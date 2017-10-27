import { getPages, getPage } from '../utils'
import { SET_PAGES, PAGE_FETCHED } from '.types'

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

export function fetchPages(argument) {
  return dispatch => {
    return getPages((pages) => {
      dispatch(setPages(pages))
    })
  }
}

export function fetchPage(id) {
  return dispatch => {
    return getPage(id, (page) => {
      dispatch(pageFetched(page))
    })
  }
}