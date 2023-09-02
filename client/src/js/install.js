const butInstall = document.getElementById('buttonInstall')

// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt fired!')
  e.preventDefault()
  window.deferredPrompt = e
  butInstall.classList.remove('hide')
  butInstall.classList.add('show')
})

// Event handler for the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('butInstall btn click event fired!')
  const promptEvent = window.deferredPrompt
  if (!promptEvent) {
    return
  }
  promptEvent.prompt()
  window.deferredPrompt = null
  butInstall.classList.remove('show')
  butInstall.classList.add('hide')
})

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
  console.log('appinstalled event fired!')
  window.deferredPrompt = null
})
