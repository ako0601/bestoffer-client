import SocketService from "../services/SocketService";

export default ({ app }, inject) => {
  inject("nuxtSocket", socket => {
    return new SocketService(socket);
  });
};
