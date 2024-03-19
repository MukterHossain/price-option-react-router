

import './App.css'
// import DaisyNav from './componets/DaisyNav/DaisyNav'
import NavBar from './componets/NavBar/NavBar'
import PriceOptions from './componets/PriceOptions/PriceOptions'
import LineChart from './componets/LineChart/LineChart'


function App() {


  return (
    <>
     
      
      <NavBar ></NavBar>
      {/* <DaisyNav></DaisyNav> */}

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>


    </>
  )
}

export default App
