import { useState,  } from 'react'
import '../style/style.css'

import Notes from './components/Notes'
import NavBar from './components/NavBar'
import Modal from './components/Modal'
// import TransitionsModal from './components/TransitionModal'

// export const modalContext = React.createContext();

function App() {
  

  return (
    <div className="App">
    
   
     <Modal />
    
    <main>
      <Notes/>
    </main>
      <NavBar/>
    </div>
  )
}

export default App
