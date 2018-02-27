import { SET_FIRST_LEVEL_PAGES3 } from '../../actions/types'

export default function pages3(state = [], action = {}) {
  switch(action.type) {    

    case SET_FIRST_LEVEL_PAGES3:
      return action.pages
      

    default: return state
  }
}
