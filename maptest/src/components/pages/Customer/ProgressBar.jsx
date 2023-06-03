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
    Progress
  } from '@chakra-ui/react'
import Testanime from '../Driver/Testanime'

const ProgressBar = ({trackingStatus}) => {


      var now ;
      var hatya;
   if(trackingStatus === "Delivered")
    {
           now =10
           hatya=<Testanime />
    }else if(trackingStatus === "Delivered11")
   {
            now =50
   }
 

   //const HelloList33 = <Testanime />;
   

  // var now = trackingStatus === "Delivered" ? 100 : 50 ;
   var color = trackingStatus === "Delivered" ? "orange" : "green";
   var bar = trackingStatus === "Delivered" ? "Delivered" : "In Progress";


  return (
    <div className='container'>
        {hatya}
       <Progress colorScheme={color} size='lg' value={now} /> 
    </div>
  )
}

export default ProgressBar