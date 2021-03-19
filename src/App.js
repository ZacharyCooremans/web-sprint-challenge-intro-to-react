import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import Details from './components/Details'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  //const [currentCharacterName, setCurrentCharacterName] = useState("")

  // const openDetails = name => {
  //   setCurrentCharacterName(name)
  // }

  // const closeDetails = () => {
  //   setCurrentCharacterName(null)
  // }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get((`https://swapi.dev/api/people/`))
    .then((res) =>{
      console.log('This is the data', res.data)
      setCharacters(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])
 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(e => {
        return <Character key={e.name} character={e}/>
        {/* return <Details key={e.name} character={e} action={openDetails}/> */}
      })}
      {/* {
        currentCharacterName && <Character characterName={currentCharacterName} close={closeDetails}/>
      } */}
    </div>
  );
}

export default App;
