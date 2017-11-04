import { SET_FIRST_LEVEL_PAGES, FIRST_LEVEL_PAGE_FETCHED, SECOND_LEVEL_PAGE_FETCHED } from '../../actions/types'

export default function pages(state = [], action = {}) {
  switch(action.type) {    

    case SET_FIRST_LEVEL_PAGES:
      return action.pages

    case FIRST_LEVEL_PAGE_FETCHED: 
      const firstLevelPageIndex = state.findIndex(item => item._id === action.firstLevelPage._id)
      if (firstLevelPageIndex > -1) {
        return state.map(item => {
          if (item._id === action.firstLevelPage._id) return action.firstLevelPage
          return item
        })
      } else {
        return [
          ...state,
          action.firstLevelPage
        ]
      }

    case SECOND_LEVEL_PAGE_FETCHED: 
      const firstLevelPageIndex2 = state.findIndex(item => item._id === action.secondLevelPage._parentId)
      if (firstLevelPageIndex2) {
        return state.map(item => {
          if (item._id === action.secondLevelPage._parentId) {
            let list = item.children.map(item2 => {
              if (item2._id === action.secondLevelPage._id) {
                return action.secondLevelPage
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
          action.firstLevelPage
        ]
      }
      

    default: return state
  }
}
