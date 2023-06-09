import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input,
    SkeletonText,
    Text,
    FormControl,
    FormLabel,
    Select ,
    Textarea ,
  } from '@chakra-ui/react'
  import { FaLocationArrow, FaTimes } from 'react-icons/fa'
  
  import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
  
  import { useRef, useState,useEffect } from 'react'

 
  import { useNavigate, useParams } from "react-router-dom";
  
  
  const center = { lat: 48.8584, lng: 2.2945 }
  
  function RequestUpdate() {


    
    const [id, idchange] = useState(0);
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [creditlimit, limitchange] = useState('');

    const{code}=useParams();

    const navigate=useNavigate();



    useEffect(()=>{
         

        fetch("https://localhost:7229/api/DriverStorage/driverby/"+code).then(res=>{
            return res.json();
        }).then(res=>{
            idchange(res.dsId);
            namechange(res.dsName);
            emailchange(res.dsEmail);
             
        }).catch((err)=>{
            console.log(err.message);
        })
     

    },[]);


  
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
  
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()
  
    if (!isLoaded) {
      return <SkeletonText />
    }
  
    async function calculateRoute() {
      if (originRef.current.value === '' || destiantionRef.current.value === '') {
        return
      }
      // eslint-disable-next-line no-undef
      const directionsService = new google.maps.DirectionsService()
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destiantionRef.current.value,
        // eslint-disable-next-line no-undef
        travelMode: google.maps.TravelMode.DRIVING,
      })
      setDirectionsResponse(results)
      setDistance(results.routes[0].legs[0].distance.text )
      setDuration(results.routes[0].legs[0].duration.text)
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }
  
  
  
    return (
        <div><h1 className='underline font-bold text-center text-lg capitalize'>Verifying Driver Request</h1>
      <Flex
     position='relative'
     flexDirection='column'
     alignItems='center'
    //   h='100vh'
    //   w='100vw'
    >
       



      {/* box for calucation */}
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
        boxShadow='dark-lg'
      >

        {/* for date and time */}
          <HStack spacing={2} mb={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <FormControl>
                <FormLabel>Driver Name</FormLabel>
              <Input value={name} onChange={e => namechange(e.target.value)} type='text'  ref={originRef} disabled />
              </FormControl>
          </Box>
          <Box flexGrow={1}>
          <FormControl>
                <FormLabel>Driver Email</FormLabel>
              <Input
              value={email} onChange={e => emailchange(e.target.value)}
                type='text'
                 
                ref={destiantionRef}
                disabled
              />
            </FormControl>
          </Box>
       
            {/* <Box flexGrow={1}>
            <FormControl>
                <FormLabel>Vehicle</FormLabel>
                <Select placeholder='Select Vehicle'>
                  <option value='option1'>Bakkie</option>
                  <option value='option2'>Small Truck 2</option>
                   <option value='option3'>Big Truck</option>
                </Select>
            </FormControl>
          </Box> */}
          
        </HStack>

        {/* for text are */}
        <HStack spacing={2}  justifyContent='space-between'>
        <Box flexGrow={1}>
            
             
            {/* <FormControl>
            <FormLabel>Details of package</FormLabel>
            <Textarea placeholder='If not sure of vehichle then details what kind of package you have' />
              </FormControl> */}
              <FormControl>
                <FormLabel>Verifying</FormLabel>
                <Select placeholder='Select Status'>
                  <option value='option1'>Accept</option>
                  <option value='option2'>Decline </option>
                   <option value='option3'>Big Truck</option>
                </Select>
            </FormControl>


            {/* <FormControl>
            <FormLabel>FeedBack </FormLabel>
            <Textarea placeholder='Reason for the validity' />
              </FormControl> */}
            
          </Box>
        </HStack>
          {/* for something */}
        {/* <HStack spacing={2}  justifyContent='space-between'>
          <Box flexGrow={1}>
            
            <Autocomplete>
            <FormControl>
            <FormLabel>Pick UP</FormLabel>
              <Input type='text' placeholder='Origin' ref={originRef} />
              </FormControl>
            </Autocomplete>
            
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
            <FormControl>
            <FormLabel>Destination</FormLabel>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
               </FormControl>
            </Autocomplete>
          </Box>
  
          <ButtonGroup>
            <Button colorScheme='gray' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>


        

        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance } </Text>
          <Text>Duration: {duration} </Text>
          <Text>Cost: { distance+2} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack> */}

        <HStack spacing={8} mt={4} justifyContent='space-between'>
        <ButtonGroup>
            <Button colorScheme='gray' type='submit' onClick={calculateRoute}>
             SUBMIT
            </Button>

            <Button colorScheme='red' type='submit' onClick={calculateRoute}>
             GO BACK
            </Button>
             
          </ButtonGroup>
        </HStack>
      </Box>
    </Flex>
    </div>
    );
  }
  
  export default RequestUpdate;
  