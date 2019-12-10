import React from 'react'
import styled from 'styled-components'
import Preloader from './Preloader'
import {formatCardDateRange} from '../helpers/date.helper'
import {withRouter} from 'react-router-dom'

const Card = ({id, title, description, image_url, date_start, date_end, history }) => {
  const formated_date_range = formatCardDateRange({date_start, date_end})
  
  const clickHandler = () => {
    history.push({
      pathname: `/discount/${id}`,
      state: {
        id,
        title,
        description,
        image_url,
        formated_date_range
      }
    })
  }

  return (
    <$Card image_url={image_url} onClick={clickHandler}>
      <$CardBGGradient />
      <$Title>
      {title}
      <p>{formated_date_range}</p>
      </$Title>
    </$Card>
  )
}

function Slider({ discounts, history }) {

  if (discounts.length === 0) {
    return (
      <$Container>
        <Preloader />
      </$Container>
    )
  }

  console.log(discounts)

  return (
    <$Container>
      <$CardContainer>
        {discounts.map(discount => (
          <Card key={discount.id} {...discount} history={history} />
        ))}
      </$CardContainer>
    </$Container>
  )
}

export default withRouter(Slider)

const $Container = styled.div`
  position: relative;
  width: 100vw;
  height: 50vw;
  align-items: center;
  overflow-x: auto;
  align-self: flex-start;
  display: flexbox;
`

const $CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const $Card = styled.div`
  position: relative;
  width: 58.6vw;
  height: 29.3vw;
  background: url(${({ image_url }) => (image_url)}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  animation: fade-in-left .3s ease-in-out;
  @keyframes fade-in-left{
    0%{
      opacity: 0;
       transform: translateX(100%);
    }
    100%{
      opacity: 1;
       transform: translateX(0);
    }
  }
`

const $CardBGGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 76.9%);
`

const $Title = styled.div`
  position: relative;
  font-family:  Museo;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: white;
  margin: 15px;
  p{
    font-size: 12px;
    margin: 0;
    padding: 0;
    opacity: .8;
  }
`