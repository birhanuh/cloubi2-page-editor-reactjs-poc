import { objectAPI } from '../../utils'
import { SET_PAGES, SET_PAGES2, SET_PAGES3, PAGE_FETCHED, CHILD_PAGE_FETCHED } from '../types'

export function setPages(pages) {
  return {
    type: SET_PAGES,
    pages
  }
}

export function setPages2(pages) {
  return {
    type: SET_PAGES2,
    pages
  }
}

export function setPages3(pages) {
  return {
    type: SET_PAGES3,
    pages
  }
}

export function pageFetched(page) {
  return {
    type: PAGE_FETCHED,
    page
  }
}

export function childPageFetched(childPage) {
  return {
    type: CHILD_PAGE_FETCHED,
    childPage
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

export function fetchPages2() {
  return dispatch => {
    return objectAPI.getPages2((pages) => {
      if (pages) {
        dispatch(setPages2(pages)) 
      }
    })
  }
}

export function fetchPages3() {
  return dispatch => {
    return objectAPI.getPages3((pages) => {
      if (pages) {
        dispatch(setPages3(pages)) 
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

export function fetchChildPage(id) {
  return dispatch => {
    return objectAPI.getPage(id, (page) => {
      if (page) {
        dispatch(childPageFetched(page))
      }
    })
  }
}

