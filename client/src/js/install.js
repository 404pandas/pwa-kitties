const butInstall = document.getElementById('buttonInstall');

// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Stores the triggered events
    window.deferredPrompt = event;

    // Removes the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
      
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Shows prompt
  promptEvent.prompt();
  
  // Resets the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  // Adds the hidden class to the button.
  butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      // Clear prompt
  window.deferredPrompt = null;
});
