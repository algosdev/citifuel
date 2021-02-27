import React, { useState } from 'react'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import cls from './contact.module.scss'
function ContactForm() {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    message: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  return (
    <div className={cls.container}>
      <DottedBackgroundSmall />
      <DottedBackgroundSmall />
      <div className='wrapper'>
        <div className={cls.inner}>
          <form onSubmit={handleSubmit}>
            <p className={cls.title}>Contact us</p>
            <div className={cls.input}>
              <label htmlFor='fullname'>Full Name:</label>
              <input
                id='fullname'
                value={formValues.fullname}
                onChange={handleChange}
                name='fullname'
                type='text'
                placeholder='Sam Smith'
              />
            </div>
            <div className={cls.input}>
              <label htmlFor='email'>Email:</label>
              <input
                id='email'
                value={formValues.email}
                onChange={handleChange}
                name='email'
                placeholder='samsthith@gmail.com'
                type='email'
              />
            </div>
            <div className={cls.input}>
              <label htmlFor='email'>Your message:</label>
              <textarea
                id='message'
                rows='4'
                value={formValues.message}
                onChange={handleChange}
                name='message'
                placeholder='Type your message...'
              ></textarea>
            </div>
            <div className={cls.actions}>
              <button className='btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
