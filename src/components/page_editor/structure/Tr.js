import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import collapse module
import 'bootstrap/js/dist/collapse'

class Tr extends Component {

  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.page ? this.props.page._id : null,
      name: {
        name: this.props.page ? this.props.page.name.name : '',
        url: this.props.page ? this.props.page.name.url : ''
      },
      type: {
        name: this.props.page ? this.props.page.type.name : '',
        url: this.props.page ? this.props.page.type.url : ''
      },
      state: this.props.page ? this.props.page.state : '',
      lastModified: this.props.page ? this.props.page.lastModified : '',
      actions: {
        pageSettingsUrl: this.props.page ? this.props.page.actions.pageSettings.url : '',
        selectTypeUrl: this.props.page ? this.props.page.actions.selectType.url : '',
        copySettingsToSinglePageUrl: this.props.page ? this.props.page.actions.copySettingsToSinglePage.url : '',
        addPagesUrl: this.props.page ? this.props.page.actions.addPages.url : '',
        editSubStructureUrl: this.props.page ? this.props.page.actions.editSubStructure.url : '',
        arrangeChildrenUrl: this.props.page ? this.props.page.actions.arrangeChildren.url : '',
        movePageUrl: this.props.page ? this.props.page.actions.movePage.url : '',
        duplicatePageUrl: this.props.page ? this.props.page.actions.duplicatePage.url : '',
        importPagesUrl: this.props.page ? this.props.page.actions.importPages.url : '',
        deletePageUrl: this.props.page ? this.props.page.actions.deletePage.url : ''
      }
    }
  }

  handleCollapse = () => {
    $('.collapse').collapse()
  }

  handleStateChange = () => {

  }

  render() {

    {/* Deconstruct state */}
    const { _id, name, type, state, lastModified, actions } = this.state
    console.log('id: ', _id)
    let trimedLowercasedSate = state.replace(" ", "").toLowerCase()

    return(        
      <tr onClick={this.handleCollapse.bind(this)}>
        <td id={_id}><input type="checkbox" aria-label="Checkbox for following text input" /></td>
        <td><a data-on-click={"selectNode("+_id+")"}>{name.name}</a></td>
        <td><a data-on-click="showPagePreview('+type.url+')">{type.name}</a></td>
        <td>
          <select className="custom-select-sm" value={trimedLowercasedSate} onChange={this.handleStateChange.bind(this)}>
            <option defaultValue>-Set status-</option>
            <option value="draft">Draft</option>
            <option value="inprogress">In progress</option>
            <option value="onhold">On hold</option>
            <option value="neesreview">Needs Review</option>
            <option value="ready">Ready</option>
            <option value="publish">Publish</option>
          </select>       
        </td>
        <td>{lastModified}</td>
        <td className="text-center">
          <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" data-on-click={"pageSettings("+actions.pageSettingsUrl+")"}>Settings</a>
            <a className="dropdown-item" data-on-click={"selectType("+actions.selectTypeUrl+")"}>Change item type</a>
            <a className="dropdown-item" data-on-click={"copySettingsToSinglePage("+actions.copySettingsToSinglePageUrl+")"}>Copy settings from another item</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" data-on-click={"addPages("+actions.addPagesUrl+")"}>Add item</a>
            <a className="dropdown-item" data-on-click={"editSubStructure("+_id+")"}>Show only this item and subitems</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" data-on-click={"arrangeChildren("+actions.arrangeChildrenUrl+")"}>Change order</a>
            <a className="dropdown-item" data-on-click={"movePage("+actions.movePageUrl+")"}>Move</a>
            <a className="dropdown-item" data-on-click={"duplicatePage("+_id+")"}>Duplicate</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" data-on-click={"importPages("+actions.importPagesUrl+")"}>Import material from Cloubi 1.0 as subitems</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" data-on-click={"deletePage("+actions.deletePageUrl+")"}>Delete</a>
          </div>
        </td> 
      </tr>

    )
  }
}

Tr.propTypes = {
  page: PropTypes.object.isRequired
}

export default Tr
