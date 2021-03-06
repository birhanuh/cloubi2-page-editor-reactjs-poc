import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'

//import { SortableContainer, SortableElement, arryMove } from 'react-sortable-hoc'

import Tr from './Tr'

class Table extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps) {
      if (nextProps.pages.length !== 0) {
        this.setState({
          isLoading: false
        })
      }
    }
  } 

  componentDidMount = () => {
    this.setState({
      isLoading: true
    })
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

    console.log('Table: ', this.props.pages)
    return(
      <div className="table-responsive">
        <table className={classnames('table', { spinner: this.state.isLoading })}>
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

export default Table
