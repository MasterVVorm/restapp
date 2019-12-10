import React from 'react'
import styled from 'styled-components'

const test = {
  id: 0,
  title: 'Акция 1 + 1 = 3!',
  description: `Каждое воскресенье в этом декабре во всех наших ресторанах 
    при заказе двух блюд дороже 300р. каждое третье блюдо - в подарок. 
    Каждое воскресенье в этом декабре во всех наших ресторанах при заказе 
    двух блюд дороже 300р. каждое третье блюдо - в подарок. Каждое воскресенье 
    в этом декабре во всех наших ресторанах при заказе двух блюд дороже 300р. каждое 
    третье блюдо - в подарок. Каждое воскресенье в этом декабре во всех наших ресторанах 
    при заказе двух блюд дороже 300р. каждое третье блюдо - в подарок.`,
  formated_date_range: '01 Дек-31 Дек',
  image_url: 'https://vkusnatinka.ru/wp-content/uploads/2017/11/ciz-biz-bonfile.jpg'
}


export default function DiscountPage({ location, history }) {
  const { id, title, description, formated_date_range, image_url } = test
  const backBtnClick = () => {
    history.goBack()
  }

  return (
    <Container>
      <$Header image_url={image_url}>
        <$HeaderBGGradient />
        <$BackButton onClick={backBtnClick}>Назад</$BackButton>
        <$Title>
          {title}
          <p>{formated_date_range}</p>
        </$Title>
      </$Header>
      <$Description>
        {description}
      </$Description>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`
const $Header = styled.header`
  position: relative;
  width: 100vw;
  height: 48.8vw;
  background: url(${({ image_url }) => (image_url)}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: grid;
  grid-template-rows: 45% 55%;
  justify-content: baseline;
  align-items: baseline;
`
const $HeaderBGGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);

`
const $BackButton = styled.div`
  position: relative;
  font-family: Museo;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  color: #FFFFFF;
  align-self: center;
  margin-left: 10.93vw;
  &:before{
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: -15px;
    transform-origin: left center;
    transform: rotateZ(-45deg);
    width: 12px;
    height: 2px;
    background: white;
  }
  &:after{
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    left: -15px;
    transform-origin: left center;
    transform: rotateZ(45deg);
    width: 12px;
    height: 2px;
    background: white;
  }
`

const $Title = styled.div`
  position: relative;
  font-family: Museo;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-left: 24px;
  align-self: center;
  p{
    margin-top: 10px;
    font-size: 14px;
    opacity: .8;
  }
`
const $Description = styled.div`
  width: 87.2vw;
  margin-top: 20px;
  font-family: Museo;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`