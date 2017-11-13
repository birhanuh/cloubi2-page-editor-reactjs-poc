import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class ThirdLevelTr extends Component {

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
      currentTrId: null
    }
  }
  
  componentDidMount = () => {
    $("#"+this.state._id+"").click(function(e) {
      e.stopPropagation()
      $('.dropdown-menu').removeClass('show')
      $('td.text-center').removeClass('show')
    })
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
    const { _id, _parentId, children, name, type, state, lastModified, actions, currentTrId, isLoading } = this.state
   
    let trimedLowercasedSate = state.replace(" ", "").toLowerCase()

    let typeOnClickAction = ''

    switch(type.value) {
      case "Navigation menu":
        typeOnClickAction = (<a className="show-page-preview" data-on-click={"showPagePreview("+type.url+")"}>{type.value}</a>)
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
    console.log('ThirdLevelTr: ', this.props.page)

    return(        
      <tr id={""+_id+""} data-tt-id={""+_id+""} data-tt-parent-id={""+dataTTPrentId+""} className={classnames({children: children })} >
        
        <td colSpan="6" className="p-0">
          <table width="100%">
            <tbody> 
              <tr>
                <td id={_id}><input type="checkbox" aria-label="Checkbox for following text input" className="page-id checkbox" /></td>
                <td>
                  <div className="form-inline">
                    <div className="form-group">
                      <a id={""+_id+"-name-link"} data-on-click={"selectNode("+_id+")"}>{iconElement}&nbsp;&nbsp;{name.value}</a>
                      <input id={""+_id+"-name-input"} type="text" className="form-control form-control-sm d-none" 
                        onChange={this.handleChange.bind(this)} value={name.value} />
                    </div>
                    <div className="form-group ml-2">
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

            </tbody>
          </table>
        </td>        

      </tr>

    )
  }
}

ThirdLevelTr.propTypes = {
  page: PropTypes.object.isRequired
}

export default ThirdLevelTr

