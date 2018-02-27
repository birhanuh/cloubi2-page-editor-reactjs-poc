import { combineReducers } from 'redux'

import pages from './reducers/page_editor/pages'
import pages2 from './reducers/page_editor/pages2'
import pages3 from './reducers/page_editor/pages3'

export default combineReducers({
  pages,
  pages2,
  pages3
})