import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemons, getPokemonWithDetails } from '../../api/getPokemons'

const initialState = {
  list: []
}

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async (_, { dispatch }) => {
    try {
      // dispatch(toggleLoading())
      const response = await getPokemons()
      const pokemonsWithDetails = await getPokemonWithDetails(
        response.results
      )
      dispatch(setPokemon(pokemonsWithDetails))
      // dispatch(toggleLoading())
    } catch (err) {
      console.log(err)
      // dispatch(setError({ error: err, message: 'Error fetching pokemons' }))
      // dispatch(toggleLoading())
    }
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon', // nombre del slice
  initialState,
  reducers: {
    setPokemon: (state, action) => {
      state.list = action.payload // por dentro es inmutable, aunque parece que no lo hacemos aquí
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.list.findIndex(
        (elem) => elem.id === action.payload.pokemonId
      )

      if (currentPokemonIndex >= 0) {
        state.list[currentPokemonIndex].favorite = !state.list[currentPokemonIndex].favorite
      }
    }
  }
})

export const { setPokemon, setFavorite } = pokemonSlice.actions // Estos son los actions

export default pokemonSlice.reducer
