import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import $GlobalStyle from './GlobalStyles'
import HomePage from '../pages/HomePage'
import DiscoundPage from '../pages/DiscountPage'

function App() {
  useEffect(() => {
    checkMobile()
  }, [])

  function checkMobile() {
    if (!navigator.userAgent.match(/Android/i)
      && !navigator.userAgent.match(/webOS/i)
      && !navigator.userAgent.match(/iPhone/i)
      && !navigator.userAgent.match(/iPad/i)
      && !navigator.userAgent.match(/iPod/i)
      && !navigator.userAgent.match(/BlackBerry/i)
      && !navigator.userAgent.match(/Windows Phone/i)
    ) {
      window.location.replace('https://restapp.org')
    }
  }

  return (
    <Fragment>
      <$GlobalStyle />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/discount/:id" component={DiscoundPage} />
      </Router>
    </Fragment>
  );
}

export default App
