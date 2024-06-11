import { sendNotification } from './sendNotification.js'

const error = document.querySelector(".error-500")
let i = 0, data = "", text = error.getAttribute("data-text")

const typing = setInterval(() => {
  if (i == text.length) {
    clearInterval(typing)
  } else {
    data += text[i]
    document.querySelector(".error-500").setAttribute("data-text", data)
    i++
  }
}, 250)

window.onload = async () => {
  const user = JSON.parse(localStorage.getItem('userData'))

  await sendNotification(`${user.name}, seja bem-vindo à Katech!`)
}

document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if (!isLoggedIn) location.href = 'index.html'
})
