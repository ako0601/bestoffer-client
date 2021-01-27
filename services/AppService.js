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
  uploadImage(data) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CONTENT-TEST": "debug"
      }
    };

    return this.$axios.post("gallery/add", data, config);
  }
}
export default AppService;
