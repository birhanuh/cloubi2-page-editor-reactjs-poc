import React, { Component } from 'react'

import Tr from './Tr'

class Table extends Component {

  constructor(){
    super()
  }

  render() {

    return(
      <div className="table-responsive">
        <table className="table table-striped">
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
          <tbody>          
            
            {/* Import Tr component */}  
            <Tr />            

          </tbody>
        </table> 
      </div>
    )
  }
}

export default Table