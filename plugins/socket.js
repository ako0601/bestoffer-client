import SocketService from "../services/SocketService";

export default ({ app }, inject) => {
  inject("nuxtSocket", (socket, topic, callback) => {
    return new SocketService(socket, topic, callback);
  });
  inject("pluginTest", message => {
    console.log("pluginTest");
    return "hello plugin!";
  });
};
