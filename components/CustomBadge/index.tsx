import { Badge } from 'native-base'
import React from 'react'

type Props = {
    text:string
}

export default function index({text}: Props) {
  return (
    <Badge
              mx='auto' 
            rounded='full'
            variant='outline'
            colorScheme='info'
            px='3'
            py='1'
            _text={{
              color:'secondary.50',
              fontSize:14
            }}
            >{text}</Badge>
  )
}