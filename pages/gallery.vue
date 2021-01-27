<template>
  <div class="contents mx-5 mt-3">
    <div class="card">
      <div class="card-body text-center">
        <img v-if="imageData" :src="imageData" :alt="imageData.name" />
        <p v-else>이미지 없음</p>
        <input type="file" accept="image/*" @change="previewImage" />
        <button class="d-block btn btn-primary btn-lg" @click="upload">
          submut
        </button>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        1234
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageData: null,
      image: ""
    };
  },
  methods: {
    previewImage(e) {
      var input = e.target;
      if (input.files.length) {
        this.image = input.files[0];
        var fileReader = new FileReader();
        fileReader.onload = evt => {
          this.imageData = evt.target.result;
        };
        fileReader.readAsDataURL(input.files[0]);
        this.imageName = input.files[0].name;
      }
    },
    upload() {
      var formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.imageName);
      console.log("image size ::: ", this.imageName);

      this.$appApi
        .uploadImage(formData)
        .then(res => {
          console.log("result ::: " + JSON.stringify(res.data, null, "\t"));
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
