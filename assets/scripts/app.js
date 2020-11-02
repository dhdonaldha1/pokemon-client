'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#show-pokemon-form').hide()
  $('#add-pokemon-form').hide()
  $('#delete-pokemon-form').hide()
  $('#update-pokemon-form').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#add-pokemon-form').on('submit', authEvents.onAddPokemon)
  $('#show-pokemon-form').on('submit', authEvents.onShowPokemon)
  $('#delete-pokemon-form').on('submit', authEvents.onDeletePokemon)
  $('#update-pokemon-form').on('submit', authEvents.onUpdatePokemon)
})
