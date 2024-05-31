import WebsocketNotif from './websocket-notif';

let socket = null;

const WebSocketInitiator = {
  init(url) {
    socket = new WebSocket(url);
    console.log('ws connected to => ', socket.url);

    socket.onmessage = this.onMessageHandler;
  },

  onMessageHandler(message) {
    console.log('websocket onmessage handler => ', message);

    const reviewData = JSON.parse(message.data);

    WebsocketNotif.sendNotification({
      title: reviewData.name,
      options: {
        body: reviewData.review,
        icon: 'icons/192x192.png',
        vibrate: [200, 100, 200],
      },
    });
  },
};

const sendDataToWebsocket = (reviewData) => {
  const data = JSON.stringify(reviewData);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(data);
  } else {
    console.error('WebSocket connection is still in CONNECTING state.');
  }
};

export { WebSocketInitiator, sendDataToWebsocket };
