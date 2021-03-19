// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainDiv = styled.div`
    color: white;
    text-align:center;
    border: 1px solid black;

`


 const Character = props => {
//     const {character, action} = props;
    //console.log('This is character', details)
    const { characterId, close} = props
    const {details, setDetails} = useState(null)

    useEffect(() => {
        axios
          .get(`https://swapi.dev/api/${characterId}`)
          //.get(("https://swapi.dev/api/people/"))
          .then((res) => {
              console.log(res) 
              setDetails(res.data) 
            })
          .catch((err) => {
               console.log(err)
             }) // eslint-disable-line
      }, [characterId])

    return (
        <div className='container'>
            <h2>Details: </h2>
            {
                details &&
                <>
                    <p>{details.name}</p>
                    <p>{details.mass}</p>
                    <ul>
                        {details.films.map((film, idx) => <li key={idx}>{film}</li>)}
                    </ul>
                </>
            }
            <button onClick={close}>Close</button>
        </div>
    )
}


//  return (
//         <div className='contaienr'}>
//             <h2>Details:</h2>
//             {this.state.on && (
//                 <h1>{character.gender}</h1>
//                 <p>{character.birth_year}</p>
//                 <p>{character.eye_color}</p>
//                 <p>{character.mass}</p>
//                 <p>{character.films}</p>
//             )}
//                 <button onClick={this.toggle}>Details</button>
//         </div>
//     )
// }
export default Character