class SocketService {
  constructor(socket, topic, callback) {
    this.socket = socket;
    this.topic = topic;
    this.connection = false;
    this.clientId = "";
    this.socket.onmessage = event => {
      console.log("FROM SOCKET ::: ", event.data);
      let result = JSON.parse(event.data);
      callback({
        status: result.t,
        ...result.d
      });
    };
    this.socket.onopen = event => {
      this.socket.send(
        JSON.stringify({
          t: 1,
          d: { topic: this.topic }
        })
      );
    };
  }

  emit(event, data) {
    this.socket.send(
      JSON.stringify({
        t: 7,
        d: {
          topic: this.topic,
          event,
          data
        }
      })
    );
  }
}

export default SocketService;
