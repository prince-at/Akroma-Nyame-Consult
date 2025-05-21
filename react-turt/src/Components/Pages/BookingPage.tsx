import React from 'react'
import './Css/Booking.css'
import BookPicture from '../../assets/online-booking-traveling-plane-flight-concept.jpg'
import BookingForm from '../BookingForm'


type Props = {}

const BookingPage = (props: Props) => {
  return (
    <>
    <div className='booking-page'>
        <img src={BookPicture} alt='book-picture' className='book-picture' />
        <div >
            <h1 className='appointment-booking'>Book Appointment</h1>
        </div>
        <div className='work-hours'>
            <div>
            <h1 className='work-hours-title'>Work Hours</h1>
            <p className='days-of-work'>Monday       --      9am to 6pm </p>
            <p className='days-of-work'>Tuesday      --      9am to 6pm </p>
            <p className='days-of-work'>Wednesday    --      9am to 6pm </p>
            <p className='days-of-work'>Thursday     --      9am to 5pm </p>
            <p className='days-of-work'>Friday       --      9am to 6pm </p>
            <p className='days-of-work'>Saturday     --      9am to 5pm </p>
            </div>
        </div>
    </div>
    <div><BookingForm/> </div>

    </>
  )
}

export default BookingPage