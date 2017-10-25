import React from 'react'

// CSS entry
import '../css/app.scss'

// Components
import HeaderNav from './layout/HeaderNav'
import Footer from './layout/Footer'
import Sidebar from './layout/Sidebar'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Title dynamic'
    }
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Title dynamic updated"})
    }, 3000)
    return(
      <div>
        <HeaderNav/>

        <div className="container-fluid">
          <div className="row">
            
            {/* Import Sidebar component */}
            <Sidebar />

            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <h1>Dashboard</h1>

              <h2>Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                      <th>Header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Lorem</td>
                      <td>ipsum</td>
                      <td>dolor</td>
                      <td>sit</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>amet</td>
                      <td>consectetur</td>
                      <td>adipiscing</td>
                      <td>elit</td>
                    </tr>
      
                  </tbody>
                </table>
                <h1>{this.state.title}</h1>  
                <h2>Title static</h2>
              </div>
            </main>
          </div>
        </div>

        <Footer/>
      </div>
    )
  }
}