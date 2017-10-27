import React, { Component } from 'react'

import Structure from './structure/Page'

class Page extends Component {
  
  constructor() {
    super()
  }

  render() {

    return(
      <div>
        <nav className="clearfix mb-3" aria-label="breadcrumb" role="navigation">
          <h1 className="float-left">Product 1<small className="text-muted">Exercise</small></h1>
          <ol className="breadcrumb float-right">
            <li className="breadcrumb-item"><a href="#">Products</a></li>
            <li className="breadcrumb-item active" aria-current="page">Products 1</li>
          </ol>
        </nav>        

        <div className="clearfix pb-4">
          <div className="float-right">
            <div className="btn-toolbar">
              <div className="btn-group mr-2">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;
                  Preview
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="fa fa-share-square" aria-hidden="true"></i>&nbsp;
                  Share
                </button>
              </div>               
              <div className="btn-group">
                <select className="custom-select">
                  <option defaultValue>-Set status-</option>
                  <option value="progress">In progress</option>
                  <option value="hold">On hold</option>
                  <option value="review">Needs Review</option>
                  <option value="ready">Ready</option>
                  <option value="approved">Publish</option>
                </select>                
              </div> 
            </div>
          </div>
        </div>    

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link structure active" href="#">Structure</a>
          </li>
          <li className="nav-item">
            <a className="nav-link appearances" href="#">Appearances</a>
          </li>
          <li className="nav-item">
            <a className="nav-link information" href="#">Information</a>
          </li>
          <li className="nav-item">
            <a className="nav-link snapshots" href="#">Snapshots</a>
          </li>
          <li className="nav-item">
            <a className="nav-link gamification" href="#">Gamification</a>
          </li>
        </ul>

        {/* Import Structure component */}
        <Structure />

      </div>
    )
  }
}

export default Page