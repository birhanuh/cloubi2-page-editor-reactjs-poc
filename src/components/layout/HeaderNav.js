import React, { Component } from 'react'

import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/dropdown'

// Localization 
import T from 'i18n-react'

// Images
import logoInverted from '../../images/logo-inverted.svg'
import avatarPlaceholderSmall from '../../images/avatar-placeholder.png'

class HeaderNav extends Component {      
  render() {
    return(
        <nav className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#"><img src={logoInverted} alt="logo-inverted" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <div className="my-lg-0">
              <div className="dropdown-menu">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">{T.translate("internal_navigation.notifications")}</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

    )
  }
}

export default HeaderNav
