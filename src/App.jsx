import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimeCard from './TimeCard'
import UserCard from './UserCard'

function App() {

  return (
    <div>
      <div className="container mt-5">
        <div className='row d-flex justify-content-evenly'>
          <div className='col-3'> <UserCard nombre1="Jeremy Robson" logo="./img/image-jeremy.png"/>  </div>

          <div className="col-9">

            <div className="row">
              <div className='col-4 my-1'> <TimeCard nombre="Work" horas="32hrs" semana="Last Week - 36hrs" imagen="./img/icon-work.svg" color="#ff8b64" />  </div>
              <div className='col-4 my-1'> <TimeCard nombre="Play" horas="10hrs" semana="Last Week - 8hrs" imagen="./img/icon-play.svg" color="#56c2e6" />  </div>
              <div className='col-4 my-1'> <TimeCard nombre="Study" horas="4hrs" semana="Last Week - 7hrs" imagen="./img/icon-study.svg" color="#ff5e7d" />  </div>

              <div className='col-4 my-1'> <TimeCard nombre="Exercise" horas="4hrs" semana="Last Week - 5hrs" imagen="./img/icon-exercise.svg" color="#4bcf83" />  </div>
              <div className='col-4 my-1'> <TimeCard nombre="Social" horas="5hrs" semana="Last Week - 10hrs" imagen="./img/icon-social.svg" color="#7235d1" />  </div>
              <div className='col-4 my-1'> <TimeCard nombre="Self Care" horas="2hrs" semana="Last Week - 2hrs" imagen="./img/icon-self-care.svg" color="#f1c75b" />  </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
