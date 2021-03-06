
import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'

class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.openDropdown = this.openDropdown.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }
  openDropdown (e) {
    let dd = ReactDOM.findDOMNode(this.refs.dd_list)
    dd.style.display = 'block'
  }
  closeDropdown (e) {
    let dd = ReactDOM.findDOMNode(this.refs.dd_list)
    dd.style.display = 'none'
  }

  render () {
    return (
      <span className='dropdown'
        onMouseOver={this.openDropdown}
        onMouseLeave={this.closeDropdown}
      >
        <a className='links clickable' >
          {this.props.title}
          <span className='caret' />
        </a>
        <div
          className='list'
          ref='dd_list'
          style={{ display: 'none' }}
        >
          { this.props.children }
        </div>
      </span>
    )
  }
}

const DropdownLink = withRouter((props) => (
  <span className='item' onClick={() => props.history.push(props.to)}>
    { props.children }
  </span>
))

export { Dropdown, DropdownLink }
