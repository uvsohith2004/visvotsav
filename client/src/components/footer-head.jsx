import React from 'react'
import SocialMediaLinks from './social-media'

const FooterHead = () => {
  return (
    <div className="w-full h-28  bg-primary flex justify-between items-center px-3">
      <div>
      <h2 className="text-white font-bold text-4xl  cursor-pointer">Visvotsav</h2>
      </div>
      <div>
        <SocialMediaLinks />
      </div>
    </div>
  )
}

export default FooterHead
