import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { fetchFirstLevelPage } from '../../../actions/page_editor/pageActions.js'

// Import collapse module
import 'bootstrap/js/dist/collapse'

import SecondLevelTr from './SecondLevelTr'

class FirstLevelTr extends Component {

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

  componentWillReceiveProps = (nextProps) => {
    if (nextProps) {
      if (nextProps.page.children.lenght !== 0) {
        this.setState({
          isLoading: false
        })
      }
    }
  } 

  componentDidMount = () => {
    $(".custom-select-sm").click(function(e) {
      e.stopPropagation()
    })
    $('.dropdown-toggle').dropdown(function(e){
      e.stopPropagation()
    })
    $('.page-id.checkbox').click(function(e){
      e.stopPropagation()
    })
    $('.show-page-preview').click(function(e){
      e.stopPropagation()
    })
    $('#'+this.state._id+'-name-input').focus(function(e){
      e.stopPropagation()
    })
  }

  handlePageFetch = (id, event) => {
    event.preventDefault()
    event.stopPropagation()

    $('.'+id+'').collapse('toggle')
    
    // If firstLevelTr is not in 'show' state remove 'show' class from all chid trs
    if(!$('.'+id+'').hasClass('show')) {
      $('tr').removeClass('show')
    }

    this.setState({
      currentTrId: id,
      isLoading: true
    })

    this.props.fetchFirstLevelPage(id)

    // Set clickedId for mapStatesToProps
    this.props = {
      clickedTrId: id
    }
  }

  handleChange = () => {

  }

  handleEditName = (id, event) => {
    event.preventDefault()
    event.stopPropagation()

    $('#'+id+'-name-link').addClass('d-none')
    $('#'+id+'-name-input').removeClass('d-none')

    $('#'+id+'-cancel-save-name-btns').removeClass('d-none')
    $('#'+id+'-edit-name-btn').addClass('d-none')
  }

  handleCancelName = (id, event) => {
    event.preventDefault()
    event.stopPropagation()

    $('#'+id+'-name-link').removeClass('d-none')
    $('#'+id+'-name-input').addClass('d-none')

    $('#'+id+'-cancel-save-name-btns').addClass('d-none')
    $('#'+id+'-edit-name-btn').removeClass('d-none')
  }

  handleSaveName = (id, event) => {
    event.preventDefault()
    event.stopPropagation()

    $('#'+id+'-name-link').removeClass('d-none')
    $('#'+id+'-name-input').addClass('d-none')

    $('#'+id+'-cancel-save-name-btns').addClass('d-none')
    $('#'+id+'-edit-name-btn').removeClass('d-none')
  }

  render() {

    {/* Deconstruct state */}
    const { _id, _parentId, children, name, type, state, lastModified, actions, edit, currentTrId, isLoading } = this.state
   
    let trimedLowercasedSate = state.replace(" ", "").toLowerCase()

    let typeOnClickAction = ''

    switch(type.value) {
      case "Navigation menu":
        typeOnClickAction = (<a id="nameLink" className="show-page-preview" data-on-click={"showPagePreview("+type.url+")"}>{type.value}</a>)
        break
      case "Content page":
        typeOnClickAction = (<a className="show-page-preview" data-on-click={"openExternalEditor("+type.url+")"}>{type.value}</a>)
        break
      default:
        typeOnClickAction = (<td>Unknown action!</td>)
    }
    
    let dataTTPrentId = _parentId ? _parentId : ''

    const iconElement = (
      children ? <i className="fa fa-folder-o" aria-hidden="true"></i> :
        <i className="fa fa-file-text-o" aria-hidden="true"></i>
    )
    console.log('FirstLevelTr: ', this.props.page)
    const secondLevelTrs = (
      Array.isArray(this.props.page.children) && this.props.page.children.map(page => <SecondLevelTr key={page._id} page={page} />)  
    )

    return(        
      <tr id={""+_id+""} className={classnames(""+_id+" first-level-tr", {children: children, spinner: isLoading })} onClick={this.handlePageFetch.bind(this, _id)} data-tt-id={""+_id+""} >
        
        <td colSpan="6" className="p-0">
          <table width="100%">
            <tbody> 
              <tr>
                <td><input type="checkbox" aria-label="Checkbox for following text input" className="page-id checkbox" /></td>
                <td>
                  <div className="form-inline">
                    <div className="form-group">
                      <a id={""+_id+"-name-link"} data-on-click={"selectNode("+_id+")"}>{iconElement}&nbsp;&nbsp;{name.value}</a>
                      <input id={""+_id+"-name-input"} type="text" className="form-control form-control-sm d-none" 
                        onChange={this.handleChange.bind(this)} value={name.value} />
                    </div>
                    <div className="form-group edit-name ml-2">
                      <div id={""+_id+"-cancel-save-name-btns"} className="btn-group btn-group-sm d-none">
                        <button type="button" className="btn btn-sm btn-outline cancel-name" onClick={this.handleCancelName.bind(this, _id)}><i className="fa fa-times" aria-hidden="true"></i></button>
                        <button type="button" className="btn btn-sm btn-outline-primary save-name"  onClick={this.handleSaveName.bind(this, _id)}><i className="fa fa-check-circle-o" aria-hidden="true"></i></button>
                      </div>
                      <button type="button" id={""+_id+"-edit-name-btn"} className="btn btn-sm btn-outline-primary" onClick={this.handleEditName.bind(this, _id)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </td>
                <td>{typeOnClickAction}</td>
                <td>
                  <select className="custom-select-sm" value={trimedLowercasedSate} onChange={this.handleChange.bind(this)}>
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
                  <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

              <tr className={""+_id+" p-0"}>
                <td colSpan="6" className="p-0">
                  <table width="100%">
                    <tbody> 
                      { currentTrId && secondLevelTrs }
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

FirstLevelTr.propTypes = {
  page: PropTypes.object.isRequired,
  fetchFirstLevelPage: PropTypes.func.isRequired
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

export default connect(mapStateToProps, { fetchFirstLevelPage })(FirstLevelTr)

