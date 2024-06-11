export async function sendNotification(message) {
  return await iziToast.info({
    message,
    position: 'topCenter'
  })
}
