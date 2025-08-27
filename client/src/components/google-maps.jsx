import React from 'react'
import { Card } from './ui/card'

const GoogleMaps = () => {
  return (
    
   <Card className='md:h-[70vh] h-[50vh] shadow-md'>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.435958246258!2d79.98099581484401!3d14.912785489604266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7b8c7ae4a3dd%3A0x64952da143ca8d29!2sPBR%20Visvodaya%20Institute%20of%20Technology%20%26%20Science!5e0!3m2!1sen!2sin!4v1679472218078!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
   </Card>
  
 
  )
}

export default GoogleMaps
