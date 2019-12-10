import React from 'react'
import styled from 'styled-components'

export default function Preloader() {
  return (
    <$Container>
      <$Holder>
      <div className="first_spin"></div>
      <div className="second_spin"></div>
      </$Holder>
    </$Container>
  )
}

const $Container = styled.div`
  position: relative;
  width:  100%;
  height: 100%;
`

const $Holder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;

  div.first_spin{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid transparent;
    border-left-color: #333;
    border-top-color: #333;
    animation: spin 1.2s infinite linear;
  }

  div.second_spin{
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-left-color: #333;
    border-top-color: #333;
    animation: spin 1s infinite linear reverse;
  }

  @keyframes spin{
    0%{
      transform: rotateZ(0);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }
`

