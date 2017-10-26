import React, { Component } from 'react'

import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/dropdown'

// Localization 
import T from 'i18n-react'

// Images
import logoInverted from '../../images/logo-inverted.svg'
import avatarPlaceholder from '../../images/avatar-placeholder.png'

class HeaderNav extends Component {      
  render() {
    return(
        <header className="navbar navbar-expand-md fixed-top">
          <a className="navbar-brand" href="#"><img src={logoInverted} alt="logo-inverted" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item">
              <img src={avatarPlaceholder} className="img-thumbnail avatar" alt="avatar-placeholder" width="40" height="40" />
            </li>
            <li className="nav-item dropdown">
              <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Birhanu Hailemariam
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                <a className="dropdown-item active" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">{T.translate("internal_navigation.notifications")}</a>
              </div>
            </li>
          </ul>

        </header>

    )
  }
}

export default HeaderNav
