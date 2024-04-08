
import './App.css'
import Hero from './comopnents/Hero'
import { Analytics } from "@vercel/analytics/react"
import backgroundImage from '/Gns38.png'




function App() {

  return (
    <>
      <div className='p-4 h-full' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        minWidth: '100vw' // Ensures the image covers the entire viewport
      }} >

        <Hero />

        <Analytics />
      </div>
    </>

  )
}

export default App
