import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
    setError: (state, action) => {
      state.error = action.payload.message
    },
    clearError: (state) => {
      state.error = ''
    }
  }
})

export const { toggleLoading, setError, clearError } = uiSlice.actions

export default uiSlice.reducer
