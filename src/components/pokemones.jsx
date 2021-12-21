import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPokemonesAccion } from '../Redux/PokeDucks'


const Pokemones = () => {

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)

    return (

        <Fragment>
            <h1>Lista de pokemones</h1>
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>

                Get Pokemones

            </button>

        </Fragment>

    );
}

export default Pokemones;