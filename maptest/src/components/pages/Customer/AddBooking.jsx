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
  
  import { useRef, useState } from 'react'
  
  import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor
     
  } from '@chakra-ui/react'
  
  const center = { lat: 48.8584, lng: 2.2945 }
  
  function AddBooking() {
  
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    })
  
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const [cost, setCost] = useState('')
  
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
      setCost( results.routes[0].legs[0].distance.value )
    }
  
    function clearRoute() {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      setCost('')
      originRef.current.value = ''
      destiantionRef.current.value = ''
    }
  
  
  
    return (
      <div>
        <h1 className="underline font-bold">BOOKING FORM</h1>
        <Flex
        //   position='relative'
        //   flexDirection='column'
        //   alignItems='center'
        //   h='100vh'
        //   w='100vw'
        >
          {/* <Box position='absolute' left={0} top={0} h='100%' w='100%'>  
         
          <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '500px', height: '500px' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>   */}

          {/* Box for inputing information the booking */}
          {/* <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
        boxShadow='dark-lg'
           
      >
   
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
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
        </HStack>
      </Box> */}

          {/* box for calucation */}
          <Box
            p={4}
            borderRadius="lg"
            m={4}
            bgColor="white"
            shadow="base"
            minW="container.md"
            zIndex="1"
            boxShadow="dark-lg"
          >
            {/* for date and time */}
            <HStack spacing={2} mb={2} justifyContent="space-between">
              <Box flexGrow={1}>
                <FormControl>
                  <FormLabel>Date</FormLabel>
                  <Input type="date" placeholder="Origin" ref={originRef} />
                </FormControl>
              </Box>
              <Box flexGrow={1}>
                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Input
                    type="time"
                    placeholder="Destination"
                    ref={destiantionRef}
                  />
                </FormControl>
              </Box>

              <Box flexGrow={1}>
                <FormControl>
                  <FormLabel>Vehicle</FormLabel>
                  <Select placeholder="Select Vehicle">
                    <option value="option1">Bakkie</option>
                    <option value="option2">Small Truck 2</option>
                    <option value="option3">Big Truck</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>

            {/* for text are */}
            <HStack spacing={2} justifyContent="space-between">
              <Box flexGrow={1}>
                <FormControl>
                  <FormLabel>Details of package</FormLabel>
                  <Textarea placeholder="If not sure of vehichle then details what kind of package you have" />
                </FormControl>
              </Box>
            </HStack>
            {/* for something */}
            <HStack spacing={2} justifyContent="space-between">
              <Box flexGrow={1}>
                <Autocomplete>
                  <FormControl>
                    <FormLabel>Pick UP</FormLabel>
                    <Input type="text" placeholder="Origin" ref={originRef} />
                  </FormControl>
                </Autocomplete>
              </Box>
              <Box flexGrow={1}>
                <Autocomplete>
                  <FormControl>
                    <FormLabel>Destination</FormLabel>
                    <Input
                      type="text"
                      placeholder="Destination"
                      ref={destiantionRef}
                    />
                  </FormControl>
                </Autocomplete>
              </Box>

              <ButtonGroup>
                <Popover>
                  <PopoverTrigger>
                  <Button
                  colorScheme="gray"
                  type="submit"
                  onClick={calculateRoute}
                >
                  Calculate Route
                </Button>
                  </PopoverTrigger>
                  <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                    <PopoverArrow  bg='blue.800' />
                    <PopoverCloseButton />
                    <PopoverHeader  pt={4} fontWeight='bold' border='0'>Confirmation!</PopoverHeader>
                    <PopoverBody>
                      Are you sure you want to have that milkshake?
                    </PopoverBody>
                    <PopoverFooter
          border='0'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}
        >
          <Box fontSize='sm'>Step 2 of 4</Box>
          <ButtonGroup size='sm'>
            <Button colorScheme='green'>Setup Email</Button>
            <Button colorScheme='blue' >
              Next
            </Button>
          </ButtonGroup>
        </PopoverFooter>
                  </PopoverContent>
                </Popover>
              
                <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>

            <HStack spacing={4} mt={4} justifyContent="space-between">
              <Text>Distance: {distance} </Text>
              <Text>Duration: {duration} </Text>
              <Text>Cost: {cost} </Text>
              <IconButton
                aria-label="center back"
                icon={<FaLocationArrow />}
                isRound
                onClick={() => {
                  map.panTo(center);
                  map.setZoom(15);
                }}
              />
            </HStack>

            <HStack spacing={4} mt={4} justifyContent="space-between">
              <ButtonGroup>
                <Button
                  colorScheme="gray"
                  type="submit"
                  onClick={calculateRoute}
                >
                  SUBMIT
                </Button>
              </ButtonGroup>
            </HStack>
          </Box>
        </Flex>
      </div>
    );
  }
  
  export default AddBooking;
  