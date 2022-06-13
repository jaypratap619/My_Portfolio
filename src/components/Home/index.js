import './index.scss'
import LogoTitle from  '../../assets/images/logo-j.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimateLetters from '../AnimateLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [nameArray, setNameArray] = useState(['a','y', ' ', 'B', 'h', 'a', 'd', 'o', 'r', 'i', 'y', 'a'])
    const [jobArray, setJobArray] = useState(['w','e','b',' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'])
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return (
      <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt = "developer" />
            <AnimateLetters letterClass={letterClass} strArray = {nameArray} idx = {15} />
            <br/>
            <AnimateLetters letterClass={letterClass} strArray = {jobArray} idx = {27} />
        </h1>
        <h2>
            Frontend Developer / Javascript Expert / Graduated from IIIT Una
        </h2>
        <Link to='/contact' className='flat-button'>Contact Me</Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home
