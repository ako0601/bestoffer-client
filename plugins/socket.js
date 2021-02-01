import SocketService from "../services/SocketService";

export default ({ app }, inject) => {
  const chatSocket = new SocketService(
    new WebSocket(`${process.env.SERVICE_SOCKET_URL}/adonis-ws`)
  );

  inject("chatSocket", chatSocket);
};
