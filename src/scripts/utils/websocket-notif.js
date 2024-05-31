const WebsocketNotif = {
  sendNotification({ title, options }) {
    const isAvailable = this.checkAvailability();
    const isPermitted = this.checkPermission();

    if (!isAvailable) {
      console.info('Notification not supported in this browser');
      return;
    }
    if (!isPermitted) {
      console.info('User did not yet granted permission');
      this.requestPermission();
      return;
    }

    this.showNotification({ title, options });
  },

  checkAvailability() {
    return Boolean('Notification' in window);
  },

  checkPermission() {
    return Notification.permission === 'granted';
  },

  async requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.error('Notification Denied');
    }
    if (status === 'default') {
      console.warn('Permission closed');
    }
  },

  async showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default WebsocketNotif;
