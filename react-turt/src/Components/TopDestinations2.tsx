import React from 'react'
import { Destination } from './scene/DestinationList'

type Props = {}

const TopDestinations2 = (props: Props) => {
  return (
    <div>
         return (
            <div className='destinationContainer'>
                {
                    Destination.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt="Destination" className='destinationImage' />
                            <div className='destinationText'>
                                <h1 className='heading-text'>{item.paragrap}</h1>
                                <p className='paragraph-text'>{item.test}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
          )
    </div>
  )
}

export default TopDestinations2