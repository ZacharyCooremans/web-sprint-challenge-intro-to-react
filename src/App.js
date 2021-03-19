import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
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

  const BigH1 = styled.h1`
    text-align:center;
    color:red;

  `
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
      <BigH1 className="Header">Characters</BigH1>
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
