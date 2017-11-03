import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { fetchParentPage } from '../../../actions/page_editor/pageActions.js'

// Import collapse module
import 'bootstrap/js/dist/collapse'

import ChildTr from './ChildTr'

class Tr extends Component {

  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.page ? this.props.page._id : null,
      _parentId: this.props.page ? this.props.page._parentId : null,
      children: this.props.page ? this.props.page.children : false,
      name: {
        value: this.props.page ? this.props.page.name.value : '',
        url: this.props.page ? this.props.page.name.url : ''
      },
      type: {
        value: this.props.page ? this.props.page.type.value : '',
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
      },
      currentTrId: null,
      isLoading: false
    }
  }

  handlePageFetch = (id, event) => {
    event.preventDefault()
    event.stopPropagation();

    $('.collapse').collapse()
  
    this.setState({
      currentTrId: id,
      isLoading: false
    })

    this.props.fetchParentPage(id, (page) => {
      if (page) {
        this.setState({
          isLoading: false
        })
      }
    })
     
    // Set clickedId fro mapStatesToProps
    this.props = {
      clickedTrId: id
    }
  }

  handlePageFetch = (id, event) => {
    event.preventDefault()
    event.stopPropagation()

    $('.collapse').collapse()
  
    this.setState({
      currentTrId: id,
      isLoading: false
    })

    this.props.fetchParentPage(id, (page) => {
      if (page) {
        this.setState({
          isLoading: false
        })
      }
    })
     
    // Set clickedId fro mapStatesToProps
    this.props = {
      clickedTrId: id
    }
  }

  handleStateChange = () => {

  }

  render() {

    {/* Deconstruct state */}
    const { _id, _parentId, children, name, type, state, lastModified, actions, currentTrId, isLoading } = this.state
   
    let trimedLowercasedSate = state.replace(" ", "").toLowerCase()

    let typeOnClickAction = ''

    switch(type.value) {
      case "Navigation menu":
        typeOnClickAction = (<td><a data-on-click="showPagePreview('+type.url+')">{type.value}</a></td>)
        break
      case "Content page":
        typeOnClickAction = (<td><a data-on-click="openExternalEditor('+type.url+')">{type.value}</a></td>)
        break
      default:
        typeOnClickAction = (<td>Unknown action!</td>)
    }
    
    let dataTTPrentId = _parentId ? _parentId : ''

    const iconElement = (
      children ? <i className="fa fa-folder-o" aria-hidden="true"></i> :
        <i className="fa fa-file-text-o" aria-hidden="true"></i>
    )
    console.log('Tr: ', this.props.page)
    const childrenTrs = (
      Array.isArray(this.props.page.children) && this.props.page.children.map(page => <ChildTr key={page._id} page={page} />)  
    )

    const faSpinner = (
      <div className="loader">Loading...</div>
    )

    return(        
      <tr id={_id} onClick={this.handlePageFetch.bind(this, _id)} data-tt-id={""+_id+""} data-tt-parent-id={""+dataTTPrentId+""} className={classnames({children: children, spinner: isLoading })} >
        
        <td colSpan="6" className="p-0">
          <table width="100%">
            <tbody> 
              <tr>
                <td id={_id}><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                <td><a data-on-click={"selectNode("+_id+")"}>{iconElement}&nbsp;&nbsp;{name.value}</a></td>
                {typeOnClickAction}
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
                <td>{lastModified}<span></span></td>
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

              { currentTrId && childrenTrs }

            </tbody>
          </table>
        </td>        

      </tr>

    )
  }
}

Tr.propTypes = {
  page: PropTypes.object.isRequired,
  fetchParentPage: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
  const id = props.clickedTrId
  if (id) {
    return {
      page: state.pages.find(item => item._id === id)
    }
  }
  return {

  }
}

export default connect(mapStateToProps, { fetchParentPage })(Tr)

