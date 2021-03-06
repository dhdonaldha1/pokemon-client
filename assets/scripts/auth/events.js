const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onAddPokemon = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.addPokemon(data)
    .then(ui.onAddPokemonSuccess)
    .catch(ui.onAddPokemonFailure)
}
const onShowPokemon = function (event) {
  event.preventDefault()
  api.showPokemon()
    .then(ui.onShowPokemonSuccess)
    .catch(ui.onShowPokemonFailure)
}
const onDeletePokemon = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deletePokemon(data.pokemon.id)
    .then(ui.onDeletePokemonSuccess)
    .catch(ui.onDeletePokemonFailure)
}
const onUpdatePokemon = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updatePokemon(data)
    .then(ui.onUpdatePokemonSuccess)
    .catch(ui.onUpdatePokemonFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddPokemon,
  onShowPokemon,
  onDeletePokemon,
  onUpdatePokemon
}
