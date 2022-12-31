import React from 'react'
import { VStack } from '@chakra-ui/react';
import SetBg from '../Components/SetBg';
import coachImage from '../Assets/coach_postion.jpg'

const CoachPosition = () => {
  return (
    <VStack position="relative">
      <SetBg url={coachImage} altText={"coachImage"} />
    </VStack>
  )
}

export default CoachPosition