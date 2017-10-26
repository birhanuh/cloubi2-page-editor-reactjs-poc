import React, { Component } from 'react'

import Table from './Table'

class Page extends Component {

  constructor(){
    super()
  }

  render() {

    return(
      <div className="structure">
        <div className="clearfix pt-4 pb-4">
          <div className="float-left">
            <div className="input-group">
              <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
              <div className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></div>
            </div>
          </div>
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

        {/* Import Table component */}  
        <Table />

      </div>  
    )
  }
} 

export default Page