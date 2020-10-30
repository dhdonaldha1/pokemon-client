const store =require ('./../store')

const onSignUpSuccess = function(response) {
  $('#sign-up-message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-message').show()
}

const onSignUpFailure = function(error) {
  $('#sign-up-message').text('Sign up failed try again')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-message').show()
}

const onSignInSuccess = function(response) {
store.user = response.user
  $('#sign-in-message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-message').show()
  // $('#sign-up-message').hide()
  // $('#change-password').show()
  // $('#sign-out').show()
  // $('#add-anime-form').show()
  // $('#delete-anime-form').show()
  // $('#show-anime').show()
  // $('#edit-anime-form').show()
  // $('#sign-up-form').hide()
  // $('#sign-out-message').hide()
  // $('#sign-in-form').hide()
}
const onSignInFailure = function(error) {
  $('#sign-in-message').show()
  $('#sign-in-message').text('Sign in failed try again')
  $('#sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function(response) {
  $('#change-password-message').show()
  $('#change-password-message').text('Password changed!!')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function(error) {
  $('#change-password-message').show()
  $('#change-password').trigger('reset')
  $('#change-password-message').text('Password change failed try again!')
}

const onSignOutSuccess = function(response) {
  $('#sign-out-message').show()
  $('#sign-out-message').text('Signed out, Please sign in again!')
  $('#sign-out-form').trigger('reset')
}
const onSignOutFailure = function(error) {
  $('#sign-out-message').show()
  $('#sign-out-message').text('could not sign out')
  $('#sign-out-form').trigger('reset')
}

const onAddPokemonSuccess = function(response) {
  $('#add-pokemon-message').text('Successfully added to team!')
  $('#add-pokemon-form').trigger('reset')
  $('#add-pokemon-message').show()
}
const onAddPokemonFailure = function(error) {
  $('#add-pokemon-message').text('Failed to add to team, please try again!')
  $('#add-pokemon-form').trigger('reset')
  $('#add-pokemon-message').show()
}

const onShowPokemonSuccess = function(response) {
  console.log(response)
const pokemons = response.pokemons
let htmlStr = ''
pokemons.forEach((pokemon) => {
  let pokemonHTML = (`
    <div class="team">
      <center><h3>${pokemon.name}</h3></center>
      <ul>
        <li>ID: ${pokemon._id}</li>
        <li>Move 1: ${pokemon.move1}</li>
        <li>Move 2: ${pokemon.move2}</li>
        <li>Move 3: ${pokemon.move3}</li>
        <li>Move 4: ${pokemon.move4}</li>
    </div>
        `)
  htmlStr += pokemonHTML
})

  $('.some-div').html(htmlStr)
  $('.some-div').show()
  $('#show-pokemon-message').text('Here is a list of all your pokemon')
  $('#show-pokemon-form').trigger('reset')
}
const onShowPokemonFailure = function(error) {
  $('#show-pokemon-message').text('Failed to get all anime!')
  $('#show-pokemon-message').show()
}

const onDeletePokemonSuccess = function(response) {
  $('#delete-pokemon-message').text('Successfully removed pokemon from team!')
  $('#delete-pokemon-form').trigger('reset')
  $('#delete-pokemon-message').show()
}
const onDeletePokemonFailure = function(error) {
  $('#delete-pokemon-message').text('Failed to remove from team, please try again!')
  $('#delete-pokemon-form').trigger('reset')
  $('#delete-pokemon-message').show()
}

const onUpdatePokemonSuccess = function(response) {
  $('#update-pokemon-message').text('Pokemon successfully updated!')
  $('#update-pokemon-form').trigger('reset')
  $('#update-pokemon-message').show()
}
const onUpdatePokemonFailure = function(error) {
  $('#update-pokemon-message').text('Pokemon failed to update.')
  $('#update-pokemon-form').trigger('reset')
  $('#update-pokemon-message').show()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onAddPokemonSuccess,
  onAddPokemonFailure,
  onShowPokemonSuccess,
  onShowPokemonFailure,
  onDeletePokemonSuccess,
  onDeletePokemonFailure,
  onUpdatePokemonSuccess,
  onUpdatePokemonFailure
}
