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
 
  
  import { useRef, useState } from 'react'
  
  
 
  
  function AddOrder() {
   
  
  
  
    return (
        <div><h1 className='underline font-bold text-center'>ORDER FORM</h1>
      <Flex
    //   position='relative'
    //   flexDirection='column'
    //   alignItems='center'
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
                <FormLabel>Sender Details</FormLabel>
              <Input type='text' placeholder='Full Name'   />
              </FormControl>
          </Box>
          <Box flexGrow={1}>
          <FormControl>
                <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                placeholder='123@gmail.com'
                 
              />
            </FormControl>
          </Box>
       
            <Box flexGrow={1}>
            <FormControl>
                <FormLabel>Contact Details</FormLabel>
                <Input
                type='text'
                placeholder='017255469'
                 
              />
            </FormControl>
          </Box>
          
        </HStack>


        <HStack spacing={2} mb={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <FormControl>
                <FormLabel>Receiver Details</FormLabel>
              <Input type='text' placeholder='Full Name'   />
              </FormControl>
          </Box>
          <Box flexGrow={1}>
          <FormControl>
                <FormLabel>Email Address</FormLabel>
              <Input
                type='email'
                placeholder='123@gmail.com'
                 
              />
            </FormControl>
          </Box>
       
            <Box flexGrow={1}>
            <FormControl>
                <FormLabel>Contact Details</FormLabel>
                <Input
                type='text'
                placeholder='017255469'
                 
              />
            </FormControl>
          </Box>
          
        </HStack>

        {/* for text are */}
        <HStack spacing={2}  justifyContent='space-between'>
        <Box flexGrow={1}>
            
             
            <FormControl>
            <FormLabel> Order Details  </FormLabel>
            <Textarea placeholder='If not sure of vehichle then details what kind of package you have' />
              </FormControl>
            
            
          </Box>
        </HStack>
          {/* for something */}
        <HStack spacing={2}  justifyContent='space-between'>
          <Box flexGrow={1}>
            
            
            <FormControl>
            <FormLabel>Pick UP</FormLabel>
              <Input disabled type='text' placeholder='Origin'  />
              </FormControl>
            
            
          </Box>
          <Box flexGrow={1}>
            
            <FormControl>
            <FormLabel>Destination</FormLabel>
              <Input
                type='text'
                placeholder='Destination'
                
              />
               </FormControl>
           
          </Box>
  
           
        </HStack>


        

        <HStack spacing={2} mt={4} justifyContent='space-between'>
          <Text>Distance : ef  </Text>
          <Text>Duration : ewfe  </Text>
          <Text>Cost :fewf   </Text>
           
        </HStack>

        <HStack spacing={4} mt={4} justifyContent='space-between'>
        <ButtonGroup>
            <Button colorScheme='gray' type='submit'  >
             SUBMIT
            </Button>
             
          </ButtonGroup>
        </HStack>
      </Box>
    </Flex>
    </div>
    );
  }
  
  export default AddOrder;
  