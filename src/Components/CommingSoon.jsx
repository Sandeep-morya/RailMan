import { Image, Spacer, Stack } from '@chakra-ui/react'
import React from 'react'
import SetBg from './SetBg'
import cms from '../Assets/progress.png'
import { dummyArray } from '../JS/functions'
const CommingSoon = () => {
  return (
    <Stack w={['80%','20%']} m='auto'>
        {dummyArray(10,'cms').map((e,i)=><Spacer key={e+i}/>)}
        <Image src={cms} alt='cms' />
    </Stack>
  )
}

export default CommingSoon