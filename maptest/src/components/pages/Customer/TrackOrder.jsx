 import React, {Fragment, useState } from 'react'

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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Card, CardHeader, CardBody, CardFooter,
    Heading,
    Stack,
    StackDivider,
      Badge

  } from '@chakra-ui/react'
import ProgressBar from './ProgressBar'
  //import ModalTrcking from './ModalTrcking';
 
 
 const TrackOrder = () => {


    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

    const [showModal, setShowModal] =useState(false)
    
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

   return (
    
    <div><h1 className='underline font-bold text-center'>TRACK YOUR ORDER</h1>
    <Flex
    // position='relative'
  //   flexDirection='column'
    // alignItems='center'
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
              <FormLabel className='text-center'>Tracking Number</FormLabel>
            <Input type='text' placeholder='Full Name'     />
            </FormControl>
        </Box>
         
        
      </HStack>


  
       
        {/* for something */}
     


      

      {/* <HStack spacing={2} mt={4} justifyContent='space-between'>
        <Text>Distance : ef  </Text>
        <Text>Duration : ewfe  </Text>
        <Text>Cost :fewf   </Text>
         
      </HStack> */}

      <HStack spacing={4} mt={4} justifyContent='space-between'>
      <ButtonGroup  >
          <Button colorScheme='gray' type='submit' justifyContent='flex-end' mr={10} 
           onClick={() => {onOpen()
            // setOverlay(<OverlayOne />)
        } }
           
           >
           TRACK
          </Button>
           
        </ButtonGroup>
      </HStack>
    </Box>
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='2xl'
        
      >
        <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Card shadow='base'
       
       boxShadow='dark-lg'>
  <CardHeader>
    <Heading size='md' justifyItems='center'>Tracking Number : </Heading>
  </CardHeader>

  <CardBody >
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='md' textTransform='uppercase'>
          Status :  
           <Badge ml='2' colorScheme='green' fontSize='2xl' variant='solid'>DELIVERED</Badge>
        </Heading>
        <Heading size='md' textTransform='uppercase' pt='2'>
          Order Date :  dwwd
            
        </Heading>
        {/* <Text pt='2' fontSize='sm'>
          View a summary of all your clients over the last month.
        </Text> */}
      </Box>
      <Box>
        <Heading size='md' textTransform='uppercase'>
          Your Order Progress
        </Heading>


        <ProgressBar trackingStatus="Delivered" />



        
        <Text pt='2' fontSize='sm'>
          Check out the overview of your clients.
        </Text>
      </Box>
      <Box>
        <Heading size='md' textTransform='uppercase'>
         Order Information
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
      {/* <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Analysis
        </Heading>
        <Text pt='2' fontSize='sm'>
          See a detailed analysis of all your business clients.
        </Text>
      </Box> */}
    </Stack>
  </CardBody>
</Card>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    
  </Flex>
  
  </div>

 
   )
 }
 
 export default TrackOrder