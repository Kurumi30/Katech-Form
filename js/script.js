function saveDataToLocalStorage(data) {
  localStorage.setItem('userData', JSON.stringify(data))
  localStorage.setItem('isLoggedIn', 'true')
}

function getValueFromId(id) {
  return document.getElementById(id).value
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault()

  const userData = {
    email: getValueFromId('email'),
    name: getValueFromId('name'),
    phoneNumber: getValueFromId('phoneNumber'),
    password: getValueFromId('password'),
  }

  saveDataToLocalStorage(userData)

  location.href = 'index.html?newUser=true'
})
