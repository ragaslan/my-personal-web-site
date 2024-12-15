import React from 'react'
import { TiSocialLinkedin,TiSocialYoutube,TiSocialGithub,TiMail } from "react-icons/ti";

function Contact() {
  const contact_data = [
    
    {
      "id" : 1,
      "name" : "Github",
      "value" : "https://github.com/ragaslan",
      "icon" : <TiSocialGithub/>
    },
    {
      "id" : 2,
      "name" : "Linkedin",
      "value" : "https://www.linkedin.com/in/ramazanagaslan/",
      "icon" : <TiSocialLinkedin/>
    },
    {
      "id" : 3,
      "name" : "Youtube",
      "value" : "https://www.youtube.com/channel/UCGiesF9nsOVb_11wbgDwkyQ",
      "icon" : <TiSocialYoutube/>
    },

  ]
  return (
    <div className='text-black flex flex-col text-center md:text-start'>
      <a className='text-2xl text-blue-400'>Mail Adresim</a>
      <a className='text-lg mt-2'>agaslanramazan@gmail.com</a>
      <a className='text-2xl text-blue-400 mt-4'>Sosyal Medya Hesaplarım</a>
      <p className='mt-2'>Ayrıca bana aşağıdaki sosyal medya platformlarından ulaşabilirsiniz.</p>
      <div className='flex text-2xl text-blue-400 gap-4 mt-4 justify-center md:justify-start'>
        {contact_data.map((contact_item) => (
          <a target='_blank' href={contact_item.value} key={contact_item.id}>
            {contact_item.icon}
          </a>
        ))}
      </div>
      
    </div>
  )
}

export default Contact