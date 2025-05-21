import { IconLists } from './scene/IconList'
import logo from '../assets/visa_694756.png'
import logo2 from '../assets/plane-ticket_10577881.png'
import logo3 from '../assets/company_18528188.png'
import logo4 from '../assets/passport_18804459.png'
type Props = {}

const IconsListRen = (props: Props) => {
  return (
    <div className='icon-field'>
        <div className='icon-container1'>
        <img src={logo} alt='icon-name' className='visa' onClick={()=>{}}/>
       <h1 className='visa-text'><a href='#'>Apply for Travelling Visa</a></h1>
       </div>
       <div className='icon-container1'>
        <img src={logo2} alt='icon-name' className='visa' onClick={()=>{}}/>
       <h1 className='visa-text'> <a href='#'>Apply Flight Ticket </a></h1>
       </div>
       <div className='icon-container1'>
        <img src={logo3} alt='icon-name' className='visa' onClick={()=>{}}/>
       <h1 className='visa-text'><a href='#'>Apply for Hotel Booking</a></h1>
       </div>
       <div className='icon-container1'>
        <img src={logo4} alt='icon-name' className='visa' onClick={()=>{}}/>
       <h1 className='visa-text'><a href='#'>Passport Assistant</a></h1>
       </div>
    </div>
  )
}

export default IconsListRen