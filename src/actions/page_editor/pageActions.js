import { objectAPI } from '../../utils'
import { SET_PAGES, PARENT_PAGE_FETCHED, CHILD_PAGE_FETCHED } from '../types'

export function setPages(pages) {
  return {
    type: SET_PAGES,
    pages
  }
}

export function parentPageFetched(parentPage) {
  return {
    type: PARENT_PAGE_FETCHED,
    parentPage
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

export function fetchParentPage(id) {
  return dispatch => {
    return objectAPI.getPage(id, (page) => {
      if (page) {
        dispatch(parentPageFetched(page))
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

