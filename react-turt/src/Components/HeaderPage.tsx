import React from 'react'
import HeaderText from './HeaderText'

type Props = {}

const HeaderPage = (props: Props) => {
  return (<>
    <header>
       
        <div>
        <HeaderText 
        avatar='/../assets/WhatsApp Image 2025-04-07 at 3.12.19 PM.jpeg'
        name=''
        headText1='Home' 
        headText2='About' 
        headText3='Services' 
        headText4='Contact' 
        headText5='Blog'
        headText6='Book'
       />
       </div>
       
    </header>
    
    </>
  )
}

export default HeaderPage