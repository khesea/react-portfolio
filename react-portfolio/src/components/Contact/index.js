import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef()

  useEffect (() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', refForm.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
          letterClass={letterClass}
          strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
          idx={15} />
        </h1>
        <p>
        I am interested in freelance opportunities - especially ambitious or
        large projects. However, if you have other request or questions,
        don't hestitate to contact me using below form either.
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required />
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info-map">
        Khisamov Ruslan,
        <br />
        Uzbekistan,
        <br />
        Tuzel-1, 17
        <br />
        Tashkent, Yashnabad district
        <br />
        <span>khesearus@yahoo.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[41.29606, 69.358785]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[41.29606, 69.358785]}>
            <Popup>khesea lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact
