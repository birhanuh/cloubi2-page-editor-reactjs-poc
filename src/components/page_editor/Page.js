import React, { Component } from 'react'

class Page extends Component {
  
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
        <nav className="clearfix mb-3" aria-label="breadcrumb" role="navigation">
          <h1 className="float-left">Product 1<small>Birhanu</small></h1>
          <ol className="breadcrumb float-right">
            <li className="breadcrumb-item"><a href="#">Products</a></li>
            <li className="breadcrumb-item active" aria-current="page">Products 1</li>
          </ol>
        </nav>        

        <div className="clearfix pb-4">
          <div className="float-right">
            <div className="form-inline">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">Preview</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
              </div> 
              <div className="dropdown">
                <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Status
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Ready</a>
                  <a className="dropdown-item" href="#">Pending</a>
                  <a className="dropdown-item" href="#">Approved</a>
                </div>
              </div> 
            </div>
          </div>
        </div>    

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link structure active" href="#">Structure</a>
          </li>
          <li className="nav-item">
            <a className="nav-link appearances" href="#">Appearances</a>
          </li>
          <li className="nav-item">
            <a className="nav-link information" href="#">Information</a>
          </li>
          <li className="nav-item">
            <a className="nav-link snapshots" href="#">Snapshots</a>
          </li>
          <li className="nav-item">
            <a className="nav-link gamification" href="#">Gamification</a>
          </li>
        </ul>

        <div className="structure">

          <div className="clearfix pt-4 pb-4">
            <div className="float-left">
              <div className="input-group">
                <input type="text" className="form-control form-control-sm" id="inlineFormInputGroup" placeholder="Search" />
                <div className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></div>
              </div>
            </div>
            <div className="btn-toolbar float-right">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-primary">Add item</button>
              </div>
              <div className="btn-group">  
                <div className="dropdown">
                  <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Import/Export
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                     <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
              <div className="btn-group">  
                <div className="dropdown">
                  <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                     <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>   
            </div>
          </div> 

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
        </div>  
      </div>
    )
  }
}

export default Page