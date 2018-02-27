import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPages} from '../../../actions/page_editor/pageActions.js'

import Table from './Table'

class Page extends Component {

  componentDidMount = () => {
    this.props.fetchPages()
  }

  render() {

    return(
      <div className="structure">
        <div className="row clearfix pt-4 pb-4">
          <div className="col-md-5">
            <div className="input-group float-left search">

              <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>  
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="btn-toolbar float-right">
              <div className="btn-group mr-2">
                <button type="button" className="btn btn-sm btn-primary">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;
                  Add item
                </button>
              </div>
              <div className="btn-group mr-2">  
                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-upload" aria-hidden="true"></i>&nbsp;
                  Import/Export
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                   <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
              <div className="btn-group mr-2">  
                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-cog" aria-hidden="true"></i>&nbsp;
                  Actions
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                   <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </div>  
            </div>   
          </div>
        </div> 

       {/* Import Table component */}  
       <Table pages={this.props.pages} />

      </div>  
    )
  }
} 

Page.propTypes = {
  fetchPages: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  return {
    pages: state.pages
  }
}

export default connect(mapStateToProps, { fetchPages })(Page)

