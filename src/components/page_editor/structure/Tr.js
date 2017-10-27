import React, { Component } from 'react'

// Import collapse module
import 'bootstrap/js/dist/collapse'

class Tr extends Component {

  constructor(){
    super()
    this.state = {
      title: 'Title'
    }
  }

  componentDidMount = () => {

  }

  handleCollapse = () => {
    $('.collapse').collapse()
  }

  render() {
    setTimeout(() => {
      this.setState({ title: 'Title updated' })
    }, 3000)
    //<h2>{this.state.title}</h2> 

    return(        
      <tr onClick={this.handleCollapse.bind(this)}>
        <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
        <td>Chapter 1</td>
        <td>Navigation menu</td>
        <td>
          <select className="custom-select-sm">
            <option defaultValue>-Set status-</option>
            <option value="progress">In progress</option>
            <option value="hold">On hold</option>
            <option value="review">Needs Review</option>
            <option value="ready">Ready</option>
            <option value="approved">Publish</option>
          </select>       
        </td>
        <td>Sep, 5, 2017</td>
        <td className="text-center">
          <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Settings</a>
            <a className="dropdown-item" href="#">Change item type</a>
            <a className="dropdown-item" href="#">Copy settings from another item</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Add item</a>
            <a className="dropdown-item" href="#">Show only this item and subitems</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Change order</a>
            <a className="dropdown-item" href="#">Move</a>
            <a className="dropdown-item" href="#">Duplicate</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Import material from Cloubi 1.0 as subitems</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Delete</a>
          </div>
        </td> 
      </tr>

    )
  }
}

export default Tr