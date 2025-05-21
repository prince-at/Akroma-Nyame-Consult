import React from 'react'
import { CountriesList } from './scene/CountryList'

type Props = {}

const ListCountry = (props: Props) => {
  return (
    <div className='country-list-container-main'>
    <div className='study-abroad'>
    <div className='country-list-container'>
        {
            CountriesList.map((country, index) => {
                return (
                    <div key={index} className='country-list'>
                        <img src={country.image} alt={country.name} className='study-abroad-img' />
                        <h2 className='text-lag'>{country.title}</h2>
                        <p className='text-gray-500'>{country.name}</p>
                        <button className='btn-1'>{country.view}</button>
                    </div>


                )
        }
  )}
  </div>
  </div>
  <hr/>
  </div>
  )
}

export default ListCountry