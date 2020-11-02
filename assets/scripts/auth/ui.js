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
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-pokemon-form').show()
  $('#add-pokemon-form').show()
  $('#delete-pokemon-form').show()
  $('#update-pokemon-form').show()
  $('#sign-up-form').hide()
  $('#sign-up-message').hide()
  // $('#sign-out-message').hide()
  $('#sign-in-form').hide()
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
  $('#change-password').hide()
  $('#sign-up-message').hide()
  $('#sign-in-message').hide()
  $('#change-password-message').hide()
  $('#sign-out').hide()
  $('#show-pokemon-form').hide()
  $('#add-pokemon-form').hide()
  $('#delete-pokemon-form').hide()
  $('#update-pokemon-form').hide()
  $('#show-pokemon-message').hide()
  $('#add-pokemon-message').hide()
  $('#delete-pokemon-message').hide()
  $('#update-pokemon-message').hide()
  $('.some-div').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
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
        <form id="nature-selection">
          <label for="natures">Choose a nature:</label>
          <select name="natures" id="natures">
            <option value="Adamant">Adamant</option>
            <option value="Bashful">Bashful</option>
            <option value="Bold">Bold</option>
            <option value="Brave">Brave</option>
            <option value="Calm">Calm</option>
            <option value="Careful">Careful</option>
            <option value="Docile">Docile</option>
            <option value="Gentle">Gentle</option>
            <option value="Hardy">Hardy</option>
            <option value="Hasty">Hasty</option>
            <option value="Impish">Impish</option>
            <option value="Jolly">Jolly</option>
            <option value="Lax">Lax</option>
            <option value="Lonely">Lonely</option>
            <option value="Mild">Mild</option>
            <option value="Modest">Modest</option>
            <option value="Naive">Naive</option>
            <option value="Naughty">Naughty</option>
            <option value="Quiet">Quiet</option>
            <option value="Quirky">Quirky</option>
            <option value="Rash">Rash</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Sassy">Sassy</option>
            <option value="Serious">Serious</option>
            <option value="Timid">Timid</option>
          </select>
          <input type="submit" value="Submit">
        </form>
        <li>Move 1: ${pokemon.move1}</li>
        <li>Move 2: ${pokemon.move2}</li>
        <li>Move 3: ${pokemon.move3}</li>
        <li>Move 4: ${pokemon.move4}</li>
    </div>
    <div class="pokemon">
    <img src="https://imgur.com/lC3uFSZ.jpg" alt="pokeball-img" width="110" height="100"><button type="button">Click Me!</button>
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
