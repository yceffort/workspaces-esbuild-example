import React from 'react'

import styled from 'styled-components'

const H1Title = styled.h1`
  font-size: 20px;
  color: red;
`

export default function Title({ title }: { title: string }) {
  return <H1Title>{title}</H1Title>
}
