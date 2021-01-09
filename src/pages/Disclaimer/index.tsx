import React from 'react'
import { AutoColumn } from '../../components/Column'
import { Wrapper } from '../../components/swap/styleds'
import { BodyWrapper } from '../AppBody'
import { Text } from 'rebass'
import { ExternalLink } from 'theme'
import styled from 'styled-components'
import { BackArrow } from '../../theme'
import { AutoRow } from '../../components/Row'

const Link = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: #006CF9;
  :hover {
    color: #1D7EFD;
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

export default function Swap() {
  return (
    <BodyWrapper style={{maxWidth: '500px'}}>
      
        <Wrapper id="swap-page" ></Wrapper>
          <AutoColumn gap={'md'}>        
            <AutoRow style={{ alignItems: 'center', justifyContent: 'space-between' }} gap="8px">
              <BackArrow to="/swap" />
              <Text fontWeight={500} fontSize={25} textAlign="center">Disclaimer</Text>
              <Text/>
            </AutoRow>
            <br/>
            <div style={{padding: '2%'}}>
              <Text fontSize={16}>This is a fork of:<Link href="https://github.com/Uniswap/uniswap-interface">github.com/Uniswap/uniswap-interface</Link></Text>
              <br/>
              <Text fontSize={16}>Audit:<Link href="https://github.com/ConsenSys/Uniswap-audit-report-2018-12">github.com/ConsenSys/Uniswap-audit-report</Link></Text>
              <br/>
              <Text fontSize={16}>You take full responsibility for running this code. Although this should work exactly as Uniswap should, use at your own risk.</Text>
            </div>
          </AutoColumn>
    </BodyWrapper>
  )
}
