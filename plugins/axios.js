import AppService from "../services/AppService";

export default ({ $axios, app }, inject) => {
  $axios.setBaseURL(process.env.SERVICE_API_URL);

  const AppApi = new AppService($axios);

  inject("appApi", AppApi);
};
