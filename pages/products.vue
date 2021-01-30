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
      <paginated-list :list-array="product" />
      <div class="products">
        <div
          class="contents"
          v-for="items in product"
          :key="items"
          onclick="location.href = 'productDetail'"
        >
          <div class="product_image">
            <img :src="require(`@/assets/images/${items.image}.png`)" />
          </div>
          <p style="font-size: 1.2rem; overflow: ">
            <strong>{{ items.product_name }}</strong>
          </p>
          <div class="product_ex">
            <p>
              현재입찰가 <strong>{{ items.current_bid_price }}원</strong>
            </p>
            <p>입찰 {{ items.bid }}</p>
            <p>남은시간 {{ items.time_remain }}</p>
          </div>
          <div class="view_count">
            <img src="@/assets/images/view.png" />
            <p>00000</p>
          </div>
        </div>
      </div>
      <div class="btn-cover">
        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
          이전
        </button>
        <span class="page-count"
          >{{ pageNum + 1 }} /{{ pageCount }} 페이지</span
        >
        <button
          :disabled="pageNum >= pageCount - 1"
          @click="nextPage"
          class="page-btn"
        >
          다음
        </button>
      </div>
    </div>
    <div class="btn-cover">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="totalPage"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageNum: 0,
      categories: ["예술품", "생물", "골동품", "옷"],
      product: [
        {
          image: "default",
          product_name: "default 1",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100001
        },
        {
          image: "default",
          product_name: "default 2",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100002
        },
        {
          image: "default",
          product_name: "default 3",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100003
        },
        {
          image: "default",
          product_name: "default 4",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100004
        },
        {
          image: "default",
          product_name: "default 5",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100005
        },
        {
          image: "default",
          product_name: "default 6",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100006
        },
        {
          image: "default",
          product_name: "default 7",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100007
        },
        {
          image: "default",
          product_name: "default 8",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100008
        },
        {
          image: "default",
          product_name: "default 9",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100009
        },
        {
          image: "default",
          product_name: "default 10",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100010
        },
        {
          image: "default",
          product_name: "default 11",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100011
        },
        {
          image: "default",
          product_name: "default 12",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100012
        },
        {
          image: "default",
          product_name: "default 13",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100013
        },
        {
          image: "default",
          product_name: "default 14",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100014
        },
        {
          image: "default",
          product_name: "default 15",
          instant_pay: 0,
          current_bid_price: 0,
          bid: 0,
          time_remain: "00:00:00",
          see: 0,
          item_number: 100015
        }
      ]
    };
  },
  props: {
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  methods: {
    nextPage() {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
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
@media (min-width: 1600px) {
  .contents {
    width: 33%;
  }
}
.main_contents {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
}
.nav_list {
  display: flex;
  flex-direction: column;
  min-width: 200px;
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
  justify-content: space-between;
}

.contents {
  background-color: #f1f1f1;
  position: relative;
  width: 19%;
  margin: 5px;
  margin-bottom: 15px;
  padding: 5px;
}

.product_image {
  background-color: rgb(245, 245, 245);
  overflow: hidden;
}

.product_image img {
  object-fit: cover;
  display: block;
  margin: 0px auto;
  width: 100%;
}

.contents a:hover {
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

.product_ex p {
  margin: 0;
}
.view_count {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  margin: 3px;
}
.view_count img {
  margin-top: 8px;
  margin-right: 5px;
  width: 16px;
  height: 100%;
}
</style>
