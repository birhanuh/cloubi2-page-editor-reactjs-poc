import React, { Component } from 'react'

import ophLogo from '../../images/oph-logo.png'

class Sidebar extends Component {
  
  render() {
    return (
      <nav className="col-sm-3 col-md-2 d-sm-block sidebar pt-3 pl-0 pr-0">
        <div className="logo">
          <div className="text-center">
            <img src={ophLogo} alt="ophLogo" className="img-thumbnail" width="100px" />
          </div>
          <div className="text-center">
            <a href="#" className="mt-2 mb-2 d-inline-block">OPH (Admin)</a>
          </div>
        </div>  
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp;
              Dashboard<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fa fa-archive" aria-hidden="true"></i>&nbsp;
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-book" aria-hidden="true"></i>&nbsp;
              Library
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-users" aria-hidden="true"></i>&nbsp;
              Workspaces
            </a>
          </li>
        </ul>
      </nav>

    )
  }
}

export default Sidebar