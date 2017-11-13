import { objectAPI } from '../../utils'
import { SET_FIRST_LEVEL_PAGES, FIRST_LEVEL_PAGE_FETCHED, SECOND_LEVEL_PAGE_FETCHED } from '../types'

export function setFirstLevelPages(pages) {
  return {
    type: SET_FIRST_LEVEL_PAGES,
    pages
  }
}

export function firstLevelPageFetched(firstLevelPage) {
  return {
    type: FIRST_LEVEL_PAGE_FETCHED,
    firstLevelPage
  }
}

export function secondLevelPageFetched(secondLevelPage) {
  return {
    type: SECOND_LEVEL_PAGE_FETCHED,
    secondLevelPage
  }
}

export function fetchFirstLevelPages() {
  return dispatch => {
    return objectAPI.getPages((pages) => {
      if (pages) {
        setTimeout(() => {
          dispatch(setFirstLevelPages(pages))
        }, 10000)
      }
    })
  }
}

export function fetchFirstLevelPage(id) {
  return dispatch => {
    return objectAPI.getPage(id, (page) => {
      if (page) {
        setTimeout(() => {
          dispatch(firstLevelPageFetched(page))
        }, 3000)
      }
    })
  }
}

export function fetchSecondLevelPage(id) {
  return dispatch => {
    return objectAPI.getPage(id, (page) => {
      if (page) {
        setTimeout(() => {
          dispatch(secondLevelPageFetched(page))
        }, 3000)
      }
    })
  }
}

