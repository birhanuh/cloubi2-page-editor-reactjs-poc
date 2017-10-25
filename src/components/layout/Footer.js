import React, { Component } from 'react'

// Localization 
import T from 'i18n-react'

class Footer extends Component {      
  render() {
    return(
      <footer className="inverted container">
        <div className="row">      
          <div className="col">
            <h4>Footer Header</h4>
            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
