import { SET_PAGES, PAGE_FETCHED, CHILD_PAGE_FETCHED } from '../../actions/types'

export default function pages(state = [], action = {}) {
  switch(action.type) {    

    case SET_PAGES:
      return action.pages

    case PAGE_FETCHED: 
      const pageIndex = state.findIndex(item => item._id === action.page._id)
      if (pageIndex > -1) {
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
    
    case CHILD_PAGE_FETCHED: 
      const parentPagePageIndex = state.findIndex(item => item._id === action.childPage._parentId)      
      if (parentPagePageIndex > -1) {
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
          action.childPage
        ]
      }

    default: return state
  }
}
