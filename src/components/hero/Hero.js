import React, {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import './Hero.css';

const Hero = () => {

   const [checked, setChecked] = useState(false)

  
   

  return (
    <div className='hero'>
        <div className='content'>
            <h1>Find your Home</h1>
            <p className='search-text'>
                Search the largest selection of apartments of any kind, price and place from all over the world
            </p>
            <form className='search'>
                <div>
                    <input type='text' placeholder = 'Enter Keyword' />
                </div>
                <div className='radio'>
                    <input type='radio'  />
                    <label>Buy</label>
                    <input type='radio'   />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch  className='icon'/></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero;