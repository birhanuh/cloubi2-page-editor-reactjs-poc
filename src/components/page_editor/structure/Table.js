import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFirstLevelPages } from '../../../actions/page_editor/pageActions.js'

import FirstLevelTr from './FirstLevelTr'

class Table extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Title'
    }
  }

  componentDidMount = () => {
    this.props.fetchFirstLevelPages()
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
        {/* Import FirstLevelTr component */}  
        { this.props.pages.map(page => <FirstLevelTr key={page._id} page={page} />) }  
      </tbody>        
    )

    // setTimeout(() => {
    //   this.setState({ title: 'Title updated' })
    // }, 3000)
    console.log('Table: ', this.props.pages)
    return(
      <div className="table-responsive">
        <table className="table">
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
      {/*<h2>{this.state.title}</h2>*/}
        <div className="mt-5 mb-5">
          <div className="col-md-4 offset-md-4">
            <button type="button" className="btn btn-block btn-primary">
              <i className="fa fa-refresh" aria-hidden="true"></i>&nbsp;
                Load more
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  fetchFirstLevelPages: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, { fetchFirstLevelPages })(Table)
