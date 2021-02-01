<template>
  <div>
    <button @click="test">some button</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      return new Promise(resolve => {
        this.socket.send(
          JSON.stringify({
            t: 7,
            d: {
              topic: "news",
              event: "message",
              data: "this is message event from client"
            }
          })
        );
        resolve();
      });
    }
  },
  mounted() {
    this.socket = new WebSocket(`${process.env.SERVICE_SOCKET_URL}/adonis-ws`);
    this.socket.onopen = event => {
      console.log("connection status: ", this.socket.readyState);
      this.socket.send(
        JSON.stringify({
          t: 1,
          d: { topic: "news" }
        })
      );
    };
    this.socket.onmessage = data => {
      console.log("received", data);
    };
  }
};
</script>
