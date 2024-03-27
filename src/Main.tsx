import React from 'react'
import './app.css'
import Counter from './Counter'
import icon from './images/icon.png'
import Dialogs from './shadcn/Dialogs'

const icon2 = require('./images/icon.png')
const Main = () => {
  return (
    <>
      <h1>react web_pack edit </h1>;
      <img src={icon} alt="" />
      <br />
      <img src={icon2} alt="" />
      <Counter />
      <Dialogs />
    </>
  )
}

export default Main
