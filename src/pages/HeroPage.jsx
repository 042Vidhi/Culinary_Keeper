import React from 'react'
import flork from '../images/flork.jpeg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HeroPage() {
  return (
    <div className='h-screen w-full bg-slate-100 '>
    <Header />
    <div className='flex p-12'>
      <div className='flex flex-col items-start justify-center  h-full space-y-6'>
        <h1 className='text-6xl font-bold text-slate-900 text-start pb-4'>Welcome to<br></br>Menu Planner</h1>
        <p className='text-2xl text-slate-900 text-start'>
        🍔📆 "Burger Bonanza Calendar: Sizzle Your Way Through the Days! 🍔🔥"
        </p>
        <p className='font-semibold text-slate-700 text-xl text-start'>A simple menu planner app built with React, Tailwind CSS,
        <br></br> and AWS Amplify</p>
        
        <button className='bg-blue-500 px-6 h-10 text-white font-semibold rounded-lg hover:bg-blue-600'
        onClick={()=>window.location.href='/planner'}
        >Get Started</button>
      </div>
      <div className="flex items-center mix-blend-multiply">
        <img src={flork} alt="pic"  />
      </div>
      </div>
    <Footer/>
    </div>
  )
}

export default HeroPage