<template>
  <div>
    <button @click="test">some button</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    };
  },
  methods: {
    test() {
      this.socket.emit("message", {
        content: "hello world!",
        sender: this.clientId
      });
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket(
      new WebSocket(`${process.env.SERVICE_SOCKET_URL}/adonis-ws`),
      "chats",
      data => {
        if (data.status == 0) {
          this.clientId = data.connId;
          console.log("CLIENT ID ::::", this.clientId);
        } else if (data.status == 7) {
          this.messages.push({
            contents: data.content,
            sender: data.sender
          });
        }
      }
    );
  }
};
</script>
