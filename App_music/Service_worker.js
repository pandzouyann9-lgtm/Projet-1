//   ENREGISTREMENT DU SERVICE WORKER

 if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Application prête pour le mode hors-ligne !"))
      .catch((err) => console.log("Erreur Service Worker :", err));
  }

//   TA PLAYLIST (la suite de ton code...) 
  const playlist = [ index ];