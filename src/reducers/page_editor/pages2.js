import { SET_FIRST_LEVEL_PAGES2 } from '../../actions/types'

export default function pages2(state = [], action = {}) {
  switch(action.type) {    

    case SET_FIRST_LEVEL_PAGES2:
      return action.pages
      

    default: return state
  }
}
