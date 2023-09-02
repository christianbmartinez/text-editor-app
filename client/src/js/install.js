const butInstall = document.getElementById('buttonInstall')

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt fired!')
  e.preventDefault()
  window.deferredPrompt = e
  butInstall.classList.toggle('hidden', false)
})

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  console.log('butInstall btn click event fired!')
  const promptEvent = window.deferredPrompt
  if (!promptEvent) {
    return
  }
  promptEvent.prompt()
  window.deferredPrompt = null
  butInstall.classList.toggle('hidden', true)
})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
  console.log('appinstalled event fired!')
  window.deferredPrompt = null
})
