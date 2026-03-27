
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homePage/banner/Banner'
import Players from './components/homePage/banner/players/Players'
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async() =>{
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
  const playerPromise = fetchPlayer();

  const [coin, setCoin] = useState(50000);
  return (
    <>
      {/* <h2 className='text-2xl'>Hello React</h2> */}
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Players setCoin={setCoin} coin={coin} playerPromise={playerPromise}></Players>
      </Suspense>

    </>
  )
}

export default App
