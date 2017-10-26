import React, { Component } from 'react'

// Localization 
import T from 'i18n-react'

class Footer extends Component {      
  render() {
    return(
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">      
            <div className="col-sm-9 ml-sm-auto col-md-10">
              <h5 className="pt-2">Footer Header</h5>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
