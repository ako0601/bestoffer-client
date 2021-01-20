<template>
  <div class="outer">
    <div class="main_contents">
      <div class="nav_list">
        <ul id="category_list">
          <li v-for="item in categories" :key="item">
            <a href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
      <div class="products">
        <div class="contents" v-for="(items, index) in product" :key="index">
          <div class="product_image">
            <img :src="require(`@/assets/images/${items.image}.png`)" />
          </div>
          <p style="font-size: 1.2rem; overflow: ">
            <strong>{{ items.product_name }}</strong>
          </p>
          <p>
            즉시결제가 <strong>{{ items.instant_pay }}원</strong>
          </p>
          <p>
            현재입찰가 <strong>{{ items.current_bid_price }}원</strong>
          </p>
          <p>입찰 {{ items.bid }}</p>
          <p>남은시간 {{ items.time_remain }}</p>
        </div>
      </div>
    </div>
    <div class="btn-cover">
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="totalPage"></b-pagination-nav>
    </div>
  </div>
</template>

<script>
/**
 * 스크립트 실행 순서
 * 1. asyncData: Nuxt에서 제공하는 기능으로, 브라우저에서 vue 파일을 받기 전에 Nuxt 서버에서 데이터를 구성하여 브라우저에서 페이지 구성시에 data() 에 포함시킨다. (서버에서 axios로 받는 데이터를 모방함. 실제로는 axios로 통신)
 * 2. url 뒤에 ?page= 로 받는 쿼리 파라미터를 이용해 새로운 페이지 로드시 이 page 를 변경하며 리로드한다.
 * 3. page 를 리로드 할 때 서버에 로드하고자 하는 페이지 주소를 넘겨주면, 서버는 해당 페이지 정보를 브라우저로 넘겨준다.
 * 4. <b-pagination-nav> bootstrap-vue 에서 제공하는 스타일을 이용해 쉽게 url 뒤에 페이지 파라미터를 붙인다. (linkGen 함수가 알아서 page 를 붙여줌.) 
 */
export default {
  data() {
    return {
      categories: ["예술품", "생물", "골동품", "옷"],
    };
  },
  props: {
    // listArray: {
    //   type: Array,
    //   required: true
    // },
    // pageSize: {
    //   type: Number,
    //   required: false,
    //   default: 10
    // }
  },
  async asyncData({ query }) {
    let db = [
      // api 서버에 데이터를 요청하면 아래 오브젝트와 같이 정보는 product(data) 배열로 주어지고, 페이지에 관한 정보를 붙여서 함께 반환할 수 있다. (페이지별로 db 저장하는거 아님. 백엔드에서 쿼리 후 처리해줌)
      {
        product: [
          { image: "default", product_name: "이름이름 1-1", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 1-2", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 1-3", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
        ],
        perPage: 3,
        page: 1,
        totalPage: 3,
        total: 9
      },
      {
        product: [
          { image: "default", product_name: "이름이름 2-1", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 2-2", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 2-3", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
        ],
        perPage: 3,
        page: 2,
        totalPage: 3,
        total: 9
      },
      {
        product: [
          { image: "default", product_name: "이름이름 3-1", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 3-2", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
          { image: "default", product_name: "이름이름 3-3", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: "00:00:00", see: 0 },
        ],
        perPage: 3,
        page: 3,
        totalPage: 3,
        total: 9
      },
    ];
    var page = query.page ?? 1;
    var data = db.filter(row => row.page == page)[0]
    return data 
  },
  methods: {
    // https://bootstrap-vue.org/docs/components/pagination-nav 참고
    linkGen(pageNum) {
      return pageNum === 1 ? '?page=1' : `?page=${pageNum}`
    }
  },
  computed: {
    pageCount() {
      let listLeng = this.product.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);

      if (listLeng % listSize > 0) page += 1;

      return page;
    },
    paginatedData() {
      const start = this.pageNum * this.pageSize,
        end = start + this.pageSize;
      return this.listArray.slice(start, end);
    }
  }
};
</script>

<style>
.outer {
  margin-left: 10%;
  margin-right: 10%;
}

.main_contents {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
}
.nav_list {
  display: flex;
  flex-direction: column;
  min-width: 150px;
  margin: 5px;
  border: 2px solid rgb(236, 236, 236);
  border-radius: 5px;
}

.nav_list ul {
  list-style: none;
  padding-left: 0;
}

.nav_list li {
  padding: 5px;
  padding-left: 15px;
}

.nav_list li:hover {
  text-decoration: underline;
  color: royalblue;
  background-color: rgb(250, 250, 250);
}

.products {
  display: flex;
  flex-wrap: wrap;
}

.contents {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}

.contents img {
  display: block;
  margin: 0px auto;
  width: 150px;
  height: 150px;
}

.product_image {
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}

.product_image img {
  object-fit: cover;
  vertical-align: center;
}

.contens a:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.btn-cover {
  margin-top: 1.5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
</style>
