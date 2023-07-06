import React from 'react'

const AboutUsTwo = () => {
  return (
    <div><div className='contact'>
    <div className="containers_desc">
      <p className='aboutus_title'>Contact Us</p>
      <div className='divider'></div>
      <p className='desc__about'>Contact us via email.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={4} required defaultValue={""} />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
  
  </div></div>
  )
}

export default AboutUsTwo