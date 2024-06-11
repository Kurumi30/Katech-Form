import { sendNotification } from './sendNotification.js'

document.getElementById('loginForm').addEventListener('submit', async event => {
  event.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const userData = JSON.parse(localStorage.getItem('userData'))

  if (!userData) {
    await sendNotification("Usuário não encontrado!")

    return
  }

  if (userData.email === email && userData.password === password) {
    location.href = '500.html'
  } else {
    await sendNotification("Email ou senha incorretos!")
  }
})

window.onload = async () => {
  const urlParams = new URLSearchParams(location.search)

  if (urlParams.get('newUser') === 'true') {
    await sendNotification("Usuário cadastrado com sucesso!")
  }
}
