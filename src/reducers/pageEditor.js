import { SET_PAGES, PAGE_FETCHED } from '../actions/types'

export default function pageEditor(state = [], action = {}) {
  switch(action.type) {    

    case SET_PAGES:
      return action.pages

    case PAGE_FETCHED: 
      const index = state.findIndex(item => item._id === action.page._id)
      if (index > -1) {
        return state.map(item => {
          if (item._id === action.page._id) return action.page
          return item
        })
      } else {
        return [
          ...state,
          action.page
        ]
      }

    default: return state
  }
}
