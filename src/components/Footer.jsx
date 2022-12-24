import React from 'react'
import Logo from "./../assets/21.png"

const Footer = () => {
  return (
    <footer>
    {/* eslint-disable-next-line */}
      <img src={Logo}></img>
      <span>
      &#169; 2022 <b>JaCarl Inc</b>
      </span>
    </footer>
  )
}

export default Footer