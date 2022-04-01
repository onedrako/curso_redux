import { TOOGLE_LOADER } from '../actions/type'

const initialState = {
  loading: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_LOADER:
      return { ...state, loading: !state.loading }
    default:
      return state
  }
}

export default uiReducer
