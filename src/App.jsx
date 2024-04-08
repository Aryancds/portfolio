
import './App.css'
import Hero from './comopnents/Hero'
import backgroundImage from '/src/assets/bgmain.png'
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <>
      <div className='p-4 h-full' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures the image covers the entire viewport
      }}>
        <Hero />
      </div>
    </>
  )
}

export default App
