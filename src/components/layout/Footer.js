import React, { Component } from 'react'

// Localization 
import T from 'i18n-react'

class Footer extends Component {      
  render() {
    return(
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">      
            <div className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <small>© Ubiikki 2017 | Cloubi is a product by Ubiikki Ltd.</small>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
