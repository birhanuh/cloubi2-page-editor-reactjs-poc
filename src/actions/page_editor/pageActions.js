import { objectAPI } from '../../utils'
import { SET_PAGES, PAGE_FETCHED } from '../types'

export function setPages(pages) {
  return {
    type: SET_PAGES,
    pages
  }
}

export function pageFetched(page) {
  return {
    type: PAGE_FETCHED,
    page
  }
}

export function fetchPages() {
  return dispatch => {
    return objectAPI.getPages((pages) => {
      if (pages) {
        dispatch(setPages(pages)) 
      }
    })
  }
}

export function fetchPage(id) {
  return dispatch => {
    return objectAPI.getPage(id, (page) => {
      if (page) {
        dispatch(pageFetched(page))
      }
    })
  }
}