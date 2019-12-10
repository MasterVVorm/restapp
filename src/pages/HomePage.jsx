import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import logoSrc from '../assets/logo.png'
import Slider from '../components/Slider'

export default function HomePage() {
  const [discounts, setDiscounts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { status, data } = await axios.get('https://app.restapp.org/api/discounts')
        setDiscounts(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <$Logo src={logoSrc} />
      <Slider discounts={discounts} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 20% 80%;
  justify-content: baseline;
`

const $Logo = styled.img`
  justify-self: center;
  align-self: flex-end;
`