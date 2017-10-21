import _ from 'lodash';

import './css/app.scss'

import avatarPlaceholder from './images/avatar-placeholder.png'

import printMe from './print.js'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // Add avatar to div
  let avatar = new Image()
  avatar.src = avatarPlaceholder

  btn.innerHTML = 'Click me'
  btn.onclick = printMe

  element.appendChild(avatar)
  element.appendChild(btn)

  return element;
}

document.body.appendChild(component())