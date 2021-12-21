import axios from 'axios';


// Constantes

const dataInicial = {
    array: [],
    offset: 0

}

//Types
const OBTNER_POKEMONES_EXITO = 'OBTENER_POKEMOSNES_EXITO'



//Reducer
export default function pokeReducer(state = dataInicial, action) {
    switch (action.type) {
        case OBTNER_POKEMONES_EXITO:
            return { ...state, array: action.payload }
        default:
            return state
    }
}


//Acciones- Dispach activa el Reducer y getState obtiene la informacion de dataInicial

export const obtenerPokemonesAccion = () => async (dispach, getState) => {

    console.log('getState', getState())

    try {

        const res = await axios.get(' https://pokeapi.co/api/v2/pokemon/ditto')

        dispach({
            type: OBTNER_POKEMONES_EXITO,
            payload: res.data.results
        })

    } catch (error) {
        console.log(error)
    }


}