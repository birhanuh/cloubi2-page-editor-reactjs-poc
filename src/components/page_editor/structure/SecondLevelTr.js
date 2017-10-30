import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPage } from '../../../actions/page_editor/pageActions.js'

// Import collapse module
import 'bootstrap/js/dist/collapse'

import Tr from './Tr'

class SecondLevelTr extends Component {

  componentDidMount = () => {
    this.props.fetchPage(this.props.currentTrId)
  }

  render() {
    console.log('children: ', Array.isArray(this.props.page.children))
    return( 
      <tr>     
        <td colSpan="6" className="p-0">
          <table width="100%">
            <tbody>           

              {/* Iterate Tr component */}  
              { Array.isArray(this.props.page.children) && this.props.page.children.map(page => <Tr key={page._id} page={page} />) }  

            </tbody>
          </table>
        </td>      
      </tr>
    )
  }
}

SecondLevelTr.propTypes = {
  page: PropTypes.object.isRequired,
  fetchPage: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  const id = props.currentTrId
  if (id) {
    return {
      page: state.pages.find(item => item._id === id)
    }
  }
}

export default connect(mapStateToProps, { fetchPage })(SecondLevelTr)
