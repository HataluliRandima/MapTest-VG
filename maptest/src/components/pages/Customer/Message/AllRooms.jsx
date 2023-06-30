import React from 'react'
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

const AllRooms = () => {
  return (
    <div>
      <h1 className="underline font-bold text-center">YOUR CHAT ROOMS</h1>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        //   h='100vh'
        //   w='100vw'
      >
        {/* box for calucation */}
        <Box
          p={4}
          pt={6}
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
                <FormLabel className="text-center">View Rooms</FormLabel>
                <Select variant='filled' placeholder="Select Room">
                  <option value="option1">Delivery Makonde 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
            </Box>
          </HStack>
          <HStack spacing={4} mt={4} justifyContent="space-between">
            <ButtonGroup>
              <Button
                bg="black"
                colorScheme="gray"
                color="white"
                alignItems="center"
                type="submit"
                justifyContent="flex-end"
                mr={10}
              >
                OPEN
              </Button>
            </ButtonGroup>
          </HStack>
        </Box>
      </Flex>
    </div>
  );
}

export default AllRooms