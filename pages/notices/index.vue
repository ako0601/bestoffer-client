<template>
  <div class="context mx-5 pt-3">
    <button class="btn btn-success btn-lg mb-3" @click="showModal">
      신규 등록
    </button>
    <div v-for="(notice, index) in notices" class="card mb-3" :key="index">
      <div class="card-body">
        <div class="card-title">
          <h5>title: {{ notice.title }}</h5>
        </div>
        <p>
          notice_id: {{ notice.id }}
          <br />
          writer: {{ notice.writer }}
          <br />
          used: {{ notice.used }}
          <br />
        </p>
        <a class="btn btn-primary btn-lg" :href="`notices/${notice.id}`"
          >see detail</a
        >
      </div>
    </div>
    <b-modal
      title="신규 notice 등록"
      v-model="modalShow"
      ref="notice-create"
      @ok="submit"
    >
      <form ref="notice_form">
        <div class="form-group row">
          <label for="writer" class="col-sm-4">작성자</label>
          <div class="col-sm-8">
            <input
              v-model="modalData.writer"
              id="writer"
              class="form-control"
              type="text"
              placeholder="작성자 이름을 입력해 주세요"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="title" class="col-sm-4">제목</label>
          <div class="col-sm-8">
            <input
              v-model="modalData.title"
              id="title"
              class="form-control"
              type="text"
              placeholder="notice 제목을 입력해 주세요"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="used" class="col-sm-4">사용여부</label>
          <div class="col-sm-8">
            <div class="form-check">
              <input
                v-model="modalData.used"
                id="used"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="used">사용 / 미사용</label>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>
<script>
export default {
  async asyncData({ app }) {
    let data;
    await app.$appApi.test().then(res => {
      data = {
        notices: res.data.data
      };
    });
    return data;
  },
  data() {
    return {
      modalShow: false,
      modalData: {
        writer: "",
        title: "",
        used: 0
      }
    };
  },
  methods: {
    showModal() {
      this.modalShow = !this.modalShow;
    },
    submit() {
      var formData = new FormData();
      Object.keys(this.modalData).forEach(key => {
        if (key === "used") {
          formData.append(key, this.modalData[key] ? 1 : 0);
          return;
        }
        formData.append(key, this.modalData[key]);
      });
      console.log("submitted");
      this.$appApi.createTest(formData).then(res => {
        console.log(`response :::: ${res.data}`);
      });
    }
  }
};
</script>
