import { SET_PAGES, PAGE_FETCHED } from '../../actions/types'

export default function pages(state = [], action = {}) {
  switch(action.type) {    

    case SET_PAGES:
      return action.pages

    case PAGE_FETCHED: 
      const parentIdIndexAddTask = state.findIndex(item => item._id === action.page._parentId)
      if (parentIdIndexAddTask > -1) {
        return state.map(item => {
          if (item._id === action.page._parentId) {
            return {
              ...item,
              pages: [...item.pages, action.page]     
            }  
          }
          return item 
        })
      } else {
        return [...state]
      }

    default: return state
  }
}
