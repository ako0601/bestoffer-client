<template>
  <div>
    <h3>v-for 예시</h3>
    <div class="d-flex">
      <div v-for="(item, index) in animals" :key="index" class="card mr-3">
        <div class="card-img-top fake-img">
          <span>286 X 180</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ item }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div class="text-right">
            <small>index ::: {{ index + 1 }}</small>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <h3>v-if 예시</h3>
    <div class="text-center">
      <button
        class="btn btn-primary btn-lg my-3"
        style="width:120px;"
        @click="switchToggler()"
      >
        click me!
      </button>
    </div>
    <div class="wrapper mb-3">
      <div v-if="toggler" class="bg-success text-center">when 'if'</div>
      <div v-else class="bg-danger text-center">when 'else'</div>
    </div>
    <div class="wrapper mb-3">
      <div v-if="toggler" class="bg-primary text-center">
        when 'if' without else
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      animals: ["dog", "cat", "rabbit", "horse", "elephant", "monkey"],
      toggler: true,
      complexObj: [
        { name: "oaks", age: 29, graduated: true },
        { name: "gilmo", age: 30, graduated: false }
      ]
    };
  },
  methods: {
    switchToggler() {
      // 토글러가 true 이면 false, false 이면 true
      this.toggler = !this.toggler;
    }
  },
  mounted() {
    // 페이지가 로드되면 콘솔창을 열어 로그를 확인해보세요
    // 복잡한 오브젝트를 디버깅하는 쉬운 방법
    console.log(JSON.stringify(this.complexObj, null, "\t"));
  }
};
</script>
<style>
.fake-img {
  display: flex;
  width: 286px;
  height: 180px;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: white;
}
.card {
  width: 286px;
}
.wrapper {
  color: white;
}
</style>
