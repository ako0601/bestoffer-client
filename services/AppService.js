class AppService {
  constructor($axios) {
    this.$axios = $axios;
  }

  test() {
    return this.$axios.get("notices");
  }
  testDetail(id) {
    return this.$axios.get(`notices/${id}`);
  }
  createTest(data) {
    return this.$axios.post(`notices/add`, data);
  }
}
export default AppService;
