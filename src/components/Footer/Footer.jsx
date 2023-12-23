import React from 'react'
import './Footer.css'

import InstagramIcon from './Assets/Icons/5282544_camera_instagram_social media_social network_instagram logo_icon.png'
import TwitterIcon from './Assets/Icons/5282551_tweet_twitter_twitter logo_icon.png'
import WhatsappIcon from './Assets/Icons/5282549_call_chat_mobile_whatsapp_whatsapp logo_icon.png'

const Footer = () => {
  return (
    <div className='Footer-Main'>
      <div className="Footer-Main-Wrapper">
        <div className="Footer-Brand">
          <h2>A Project By<span> Varad Sandeep Naik </span></h2>
        </div>
        <div className="Footer-Socials">
          <a href="https://www.instagram.com/varad5878/" target='_blank'><img src={InstagramIcon} /></a>
          <a href="https://twitter.com/VaradNaik12" target='_blank'><img src={TwitterIcon} /></a>
          <a href="https://wa.me/916239173321" target='_blank'><img src={WhatsappIcon} /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer