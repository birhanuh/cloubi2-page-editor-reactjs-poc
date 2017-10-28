import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPages } from '../../../actions/page_editor/pageActions.js'

import Tr from './Tr'

class Table extends Component {

  componentDidMount = () => {
    this.props.fetchPages()
  }

  render() {
    const emptyMessage = (
      <tbody>
        <tr>
          <td colSpan="6">
            <div className="alert alert-info" role="alert">
              No pages yet.
            </div>
          </td>
        </tr>
      </tbody>
    )

    const pagesList = (  
      <tbody>               
        {/* Import Tr component */}  
        { this.props.pages.map(page => <Tr key={page._id} page={page} />) }  
      </tbody>        
    )

    return(
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Checkbox for following text input" /></th>
              <th>Name</th>
              <th>Type</th>
              <th>State</th>
              <th>Last modified</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
                  
          { this.props.pages.length === 0 ? emptyMessage : pagesList}
          
        </table> 
      </div>
    )
  }
}

Table.propTypes = {
  fetchPages: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, { fetchPages })(Table)
