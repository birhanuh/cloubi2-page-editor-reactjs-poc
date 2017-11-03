import { SET_PAGES, PARENT_PAGE_FETCHED, CHILD_PAGE_FETCHED } from '../../actions/types'

export default function pages(state = [], action = {}) {
  switch(action.type) {    

    case SET_PAGES:
      return action.pages

    case PARENT_PAGE_FETCHED: 
      const parentPageIndex = state.findIndex(item => item._id === action.parentPage._id)
      if (parentPageIndex > -1) {
        return state.map(item => {
          if (item._id === action.parentPage._id) return action.parentPage
          return item
        })
      } else {
        return [
          ...state,
          action.parentPage
        ]
      }

    case CHILD_PAGE_FETCHED: 
      const parentPageIndex2 = state.findIndex(item => item._id === action.childPage._parentId)
      if (parentPageIndex2) {
        return state.map(item => {
          if (item._id === action.childPage._parentId) {
            let list = item.children.map(item2 => {
              if (item2._id === action.childPage._id) {
                return action.childPage
              }
              return item2
            })
            return {
              ...item,
              children: list
            }    
          }
          return item
        })     
      } else {
        return [
          ...state,
          action.parentPage
        ]
      }
      

    default: return state
  }
}
