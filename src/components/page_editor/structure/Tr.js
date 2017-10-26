import React, { Component } from 'react'

class Tr extends Component {

  constructor(){
    super()
    this.state = {
      title: 'Title'
    }
  }

  componentDidMount = () => {

  }

  render() {
    setTimeout(() => {
      this.setState({ title: 'Title updated' })
    }, 3000)

    return(
      <tr id="exampleAccordion" data-children=".item">               
        <td colSpan="6" className="item p-0">

        <h2>{this.state.title}</h2> 
          <table width="100%">
            <tbody>
              <tr>
                <td className="item"><input type="checkbox" aria-label="Checkbox for following text input" /></td>

                <td className="item">
                  <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1"> 
                    Chapter 1
                  </a>  
                </td>
                <td className="item">Navigation menu</td>
                <td className="item">Draft</td>
                <td className="item">Sep, 5, 2017</td>
                <td className="item text-center">
                  <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-cogs" aria-hidden="true"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </td> 
              </tr>

              <tr id="exampleAccordion" data-children=".item">               
                <td colSpan="6" className="item p-0">

                  <table width="100%">
                    <tbody>
                      <tr>
                        <td className="item"><input type="checkbox" aria-label="Checkbox for following text input" /></td>

                        <td className="item">
                          <a data-toggle="collapse" data-parent="#exampleAccordion" href="#exampleAccordion1" aria-expanded="true" aria-controls="exampleAccordion1"> 
                            Chapter 1
                          </a>  
                        </td>
                        <td className="item">Navigation menu</td>
                        <td className="item">Draft</td>
                        <td className="item">Sep, 5, 2017</td>
                        <td className="item text-center">
                          <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-cogs" aria-hidden="true"></i>
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                          </div>
                        </td> 
                      </tr>
                    </tbody>
                  </table>

                </td>
               
              </tr>  
      
            </tbody>
          </table>

        </td>
       
      </tr>  

    )
  }
}

export default Tr