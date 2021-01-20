<template>
    <div class="outer">
        <div class="main_contents">
            <div class="nav_list">
                <ul id="category_list">
                    <li v-for="item in categories" :key="item"><a href="#">{{item}}</a></li>
                </ul>
            </div>
            <paginated-list :list-array="product" />
            <div class="products">
                <div class="contents" v-for="items in product" :key="items">
                    <div class="product_image">
                        <img :src="require(`@/assets/images/${items.image}.png`)">
                    </div>
                    <p style="font-size: 1.2rem; overflow: "><strong>{{items.product_name}}</strong></p>
                    <p>즉시결제가 <strong>{{items.instant_pay}}원</strong></p>
                    <p>현재입찰가 <strong>{{items.current_bid_price}}원</strong></p>
                    <p>입찰 {{items.bid}} </p>
                    <p>남은시간 {{items.time_remain}}</p>
                </div>
            </div>
            
        </div>
        <div class="btn-cover">
            <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
            <span class="page-count">{{pageNum + 1}} /{{pageCount}} 페이지</span>
            <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
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
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0},
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                    { image: "default", product_name: "이름이름 default", instant_pay: 0, current_bid_price: 0, bid: 0, time_remain: '00:00:00', see: 0 },
                ]
            };
        },
        props: {
            listArray: {
                type: Array,
                required: true
            },
            pageSize: {
                type: Number,
                required: false,
                default: 10
            }
        },
        methods: {
            nextPage () {
                this.pageNum += 1;
            },
            prevPage () {
                this.pageNum -= 1;
            }
        },
        computed: {
            pageCount () {
                let listLeng = this.listArray.length,
                    listSize = this.pageSize,
                    page = Math.floor(listLeng / listSize);

                if (listLeng % listSize > 0) page += 1;
            
                return page;
            },
            paginatedData () {
                const start = this.pageNum * this.pageSize,
                    end = start + this.pageSize;
                return this.listArray.slice(start, end);
            }
        }
    }
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

    .nav_list ul{
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

    .contents img{
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
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
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