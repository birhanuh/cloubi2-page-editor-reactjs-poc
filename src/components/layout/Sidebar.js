import React, { Component } from 'react'


class Sidebar extends Component {
  
  render() {
    return (
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Analytics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Export</a>
          </li>
        </ul>
      </nav>

    )
  }
}

export default Sidebar