
import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import { HOST, FETCHING_STATUS } from '../../constants'

const initialState = {
  data: [],
  status: FETCHING_STATUS.IDLE
}

export default handleActions({
  FETCH_BULLETINS: (state) => ({ ...state, status: FETCHING_STATUS.FETCHING }),
  UPDATE_BULLETINS: (state, action) => ({ ...state, data: action.payload}),
  FETCH_BULLETINS_DONE: (state) => ({ ...state, status: FETCHING_STATUS.DONE })
}, initialState)
