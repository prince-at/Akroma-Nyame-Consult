import React from 'react'

type Props = {}

const Subscribe = () => {
    return (
      <div className='subscribe-container'>
        <h2 className='subcription-text'>Subscribe to our Newsletter to get Travel updates and details</h2>
        <form
          action="https://gmail.us17.list-manage.com/subscribe/post?u=150853c268c0d4a41a9ac63aa&amp;id=62202813ea&amp;f_id=0083c2e1f0" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          method="post" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <input
            className='email-input'
            type="email"
            name="EMAIL"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className='sumbit-button'>Subscribe</button>
        </form>
      </div>
    );
  };
  

export default Subscribe