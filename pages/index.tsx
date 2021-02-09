import React from 'react'
import styled from 'styled-components'
import Background from '../src/components/Background'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
`

export default function Home() {
  return (
    <Background>
      <Title>
        My page
    </Title>
    </Background>
  )
}
