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
              <h5 className="pt-2">Cloubi2</h5>
              <p>© Ubiikki 2017 | A solution by </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
