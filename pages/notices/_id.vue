<template>
  <div class="context">
    <div v-if="Object.keys(notice).length">
      <h3>해당 오브젝트는 다음과 같습니다 ::: {{ foo }}</h3>
      <p>
        title: {{ notice.title }}
        <br />
        notice_id: {{ notice.id }}
        <br />
        writer: {{ notice.writer }}
        <br />
        used: {{ notice.used }}
        <br />
      </p>
    </div>
    <div v-else>
      <p>해당 오브젝트는 DB에 등록되어있지 않습니다.</p>
    </div>
    <a class="btn btn-primary btn-lg" href="/notices">목록으로</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foo: "abc"
    };
  },
  async asyncData({ app, params }) {
    let data;
    await app.$appApi.testDetail(params.id).then(res => {
      console.log(`params ::: ${JSON.stringify(res.data, null, "\t")}`);
      data = {
        notice: res.data.data.length ? res.data.data[0] : {}
      };
    });
    return data;
  }
};
</script>
