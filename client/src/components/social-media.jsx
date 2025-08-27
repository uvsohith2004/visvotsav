import { socialLinks } from "@/constants"
import React from "react"

const SocialMediaLinks = () => {
  return (
    <div className="hidden gap-4 pr-10 sm:flex ">
        {
            socialLinks.map((link) => {
                return (
                 <a href={link.url} key={link.id} className=' rounded-full  text-white hover:bg-violet-800 p-2  hover:animate-spin ' target="_blank" >
                  {React.createElement(link.icon)}
                 </a>
                )
            })
        }
    </div>
  )
}
export default SocialMediaLinks
