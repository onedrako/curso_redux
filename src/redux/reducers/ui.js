import { fromJS } from 'immutable'

import { TOOGLE_LOADER } from '../actions/type'

const initialState = fromJS({
  loading: false
})

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_LOADER:
      return state.set('loading', !state.get('loading'))
    default:
      return state
  }
}

export default uiReducer
