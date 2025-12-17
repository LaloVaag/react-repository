import { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [isMobile, setIsMobil] = useState(false);
  const isMobileEvent = (menuToggle) => {
    setIsMobil(menuToggle);
  }

  return (
    <>
      <Header onMenuEvent={isMobileEvent}/>
      <Body isMobile={isMobile}/>
      <Footer />
    </>
  )
}

export default App
