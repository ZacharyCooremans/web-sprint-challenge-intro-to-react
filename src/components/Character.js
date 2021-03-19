// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'

const MainDiv = styled.div`
  text-align: center;
  align-items:center;
  margin-top:1%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid black;

  /* &:hover{
      color: ${prop => prop.theme.firstColor};
      background-color: 'yellow';
  } */

`
const MainP = styled.p`
    color: white;
    text-align:center;
`


 //const Character = props => {
    // const { characterName, close} = props
    // const {details, setDetails} = useState(null)
    // console.log('THIS IS NAME', characterName)

    // useEffect(() => {
    //     axios
    //       .get(`https://swapi.dev/api/people/${characterName}`)

    //       .then((res) => {
    //           console.log(res) 
    //           setDetails(res.data) 
    //         })
    //       .catch((err) => {
    //            console.log(err)
    //          }) 
    //   }, [characterName])

    export default function Character({character}) {

    return (
        <MainDiv>
            <MainP>Name: {character.name}</MainP>
            <MainP>Weight: {character.mass}</MainP>
            <MainP>Gender: {character.gender}</MainP>
            <MainP>Date of Birth: {character.birth_year}</MainP>
        </MainDiv>
    )
        // <MainDiv className='container'>
        //     <h2>Details: of {characterName}</h2>
        //     {
        //         details &&
        //         <>
        //             <MainP>{details.name}</MainP>
        //             <MainP>{details.mass}</MainP>
        //             <ul>
        //                 {details.films.map((film, idx) => <li key={idx}>{film}</li>)}
        //             </ul>
        //         </>
        //     }
        //     <button onClick={close}>Close</button>
        //</MainDiv>
    //)
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
//export default Character