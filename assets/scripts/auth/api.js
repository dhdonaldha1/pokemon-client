const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: "POST",
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: "POST",
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: "PATCH",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}

const addPokemon = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pokemons',
    method: "POST",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const showPokemon = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pokemons',
    method: "GET",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
const deletePokemon = function (pokemonId) {
  return $.ajax({
    url: config.apiUrl + `/pokemons/${pokemonId}`,
    method: "DELETE",
    headers: {Authorization: 'Bearer ' + store.user.token}
  })
}
const updatePokemon = function (data) {
  return $.ajax({
    url: config.apiUrl + `/pokemons/${data.pokemon.id}`,
    method: "PATCH",
    headers: {Authorization: 'Bearer ' + store.user.token},
    data: data
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addPokemon,
  showPokemon,
  deletePokemon,
  updatePokemon
}
