import { useState,  } from 'react'
import '../style/style.css'
import SearchBar from './components/SearchBar'
import Notes from './components/Notes'
import NavBar from './components/NavBar'
import Modal from './components/Modal'

// export const modalContext = React.createContext();

function App() {
  

  return (
    <div className="App">
    <SearchBar/>
   
     <Modal/>
   
    <main>
      <Notes/>
    </main>
      <NavBar/>
    </div>
  )
}

export default App
