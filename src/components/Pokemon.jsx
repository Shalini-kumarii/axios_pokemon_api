import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [pokemons, setPokemones] = useState([])

    // useEffect to show the data at page loding
    // useEffect(() =>{
    //   axiosPokemons();
    // },[]) // //never put the SAME state variable in [] bc useEffect will re-trigger

    // Vanilla JS fetch

    const axiosPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                console.log(res);
                console.log(res.data)
                setPokemones(res.data.results)
            })
            // axios wraps our res in a .data obj
            .catch(err => console.log(err))
    }


return (
    <div className="App">
        <h2>pokemon</h2>
        <button onClick={axiosPokemons}>Axios Pokemon</button>
        <hr />
        {/*{JSON.stringify(pokemons)}*/}
        <table>
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Pokemon Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokemons.map((pok, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{pok.name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
);
}


export default Pokemon;