import React from 'react'

// CSS entry
import '../css/app.scss'

// Components
import HeaderNav from './layout/HeaderNav'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'
import PageEditor from './page_editor/Page'

export default class App extends React.Component {

  render() {

    return(
      <div>
        <HeaderNav/>

        <div className="container-fluid">
          <div className="row">
            
            {/* Import Sidebar component */}
            <Sidebar />

            <main role="main" id="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              
              {/* Import PageEditor component */}
              <PageEditor/>              

            </main>

            {/* Import Footer component */}
            <Footer/>
          </div>
        
        </div>
      </div>
    )
  }
}