<template>
    <div class="product_detail_view">
        <div class="product_all" >
            <div class="product_brief">
                <div class="product_images">
                    <swiper class="swiper" :options="swiperOption" dir="rtl">
                        <div v-for="i in productData.product_imgs" :key="i" >
                            <swiper-slide><img :src="i"></swiper-slide>
                        </div>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="product_informations">
                    <h5>{{productData.title}}</h5>
                    <p style="color:grey;"><small>상품번호:{{productData.product_hash}}</small></p>
                    <div style="display:flex; justify-content:space-between;">
                        <div style="display:flex; border-bottom-style:solid;border-bottom-color:#b9b9b9;border-bottom-width;">
                            <img :src="productData.userinfo[0]" id="user_profile">
                            <div>
                                <p><strong>{{productData.userinfo[1]}}</strong></p>
                                <p><small>{{productData.userinfo[2]}}</small></p>
                            </div>
                        </div>
                        <div style="background:grey; color:white; width:150px; height:60px;">
                            <p>Button</p>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div class="button_div">
                        <button id="btn_bid">입찰하기</button>
                    </div>
                </div> 
            </div>
            <div class="product_detail">
                <h2>상세설명</h2>
                <p>설명을 쓰겠지 아마</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: 'swiper-example-space-between',
        title: 'Space between slides',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    spaceBetween: 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                productData: { 
                    title: "파텍필립 시계 1984 HGI-158 스위스 장인 수작업 제작", 
                    product_hash:"PRIA-LSvcrSAPqSOTuezQprRp", 
                    product_img: "https://dispatch.cdnser.be/wp-content/uploads/2017/02/20170219131131_1.jpg",
                    product_imgs: ["https://dispatch.cdnser.be/wp-content/uploads/2017/02/20170219131131_1.jpg","http://img.gqkorea.co.kr/gq/2016/09/style_57d786ab8aef2.jpg","http://t1.daumcdn.net/liveboard/timeforum/fca52b56ee5d41389e337598cc1b33da.png"],
                    userinfo: ["https://dispatch.cdnser.be/wp-content/uploads/2017/02/be247503d597fc4b0c5c814ffd68a534.jpg", "김덕배", "@duckKim2"],
                    endgame: "2021-02-21 18:00:00",
                    bid_amount: 200000,
                    bidlist: [
                        {
                            bid_user_profile:"https://pbs.twimg.com/profile_images/1219904098004168704/peMlkG0Z.jpg", 
                            bid_user_id:"ako0601", 
                            bid_user_money: 150000000, 
                            when:"2021-02-21 17:40:00"
                        },
                        {
                            bid_user_profile:"https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/JW5/image/aza6y1UyWra1hcs0KPGwkj_ohhk.png", 
                            bid_user_id:"jhkim12", 
                            bid_user_money: 149800000, 
                            when:"2021-02-21 17:30:00"
                        },
                        {
                            bid_user_profile:"http://upload3.inven.co.kr/upload/2020/03/19/bbs/i14164449026.png", 
                            bid_user_id:"testman", 
                            bid_user_money: 149600000, 
                            when:"2021-02-21 17:35:00"
                        },
                    ],
                    explain: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    product_id: "HGJ-158",
                    up_date: "2021-02-20 18:00:00",
                    condition: "매우 양호",
                    expert: "감정 받지 않음",
                    return: "제품 하자 시 반품 가능",
                    delivery: "가능 (직수령 추천)",
                }                  
            }
        }
    }
</script>

<style>
    .product_detail_view {
        padding: 50px;
    }

    .swiper-button-next {
        top: 15px;
        height: 400px;
        opacity: 0%;
    }

    .swiper-button-prev {
        top: 15px;
        height: 400px;
        opacity: 0%;
    }

    .swiper-button-next:hover {
        opacity: 40%;
        transition: 0.4s;
    }

    .swiper-button-prev:hover {
        opacity: 40%;
        transition: 0.4s;
    }

    .product_brief {
        margin: 0 auto;
        width: 1000px;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        border-top-color: #8C4B26;
        border-top-width: 4px;
        border-top-style: solid;
    }
    .product_images {
        width: 40%;
    }
    .product_informations {
        width: 58%;
    }

    .swiper img {
        width: 400px;
        height: 400px;
        overflow: hidden;
        object-fit: cover;
    }

    .swiper {
        width: 400px;
        height: 400px;
    }

    .swiper .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        background-color: white;
        background-position: center;
        background-size: cover;
    }

    .product_detail {
        padding: 15px;
        min-height: 500px;
        background-color: rgb(248, 248, 248);
        margin: 0 auto;
        width: 1000px;
    }

    .product_detail h2 {
        padding: 8px;
        margin-bottom: 5px;
        color: white;
        background-color: #394759;
    }

    .bid_count {
        width: 30%;
        padding: 10px;
    }

    .remain_time {
        width: 30%;
        padding: 10px;
    }

    .product_informations button {
        background:rgb(166, 112, 65);
        color:#fff;
        border:none;
        position:relative;
        height:80px;
        font-size:1.6em;
        padding:0 2em;
        cursor:pointer;
        transition:800ms ease all;
        outline:none;
        width: 300px;
    }

    .button_div {
        text-align: center;
    }

    .product_informations button:hover{
        background:#fff;
        color:rgb(166, 112, 65);
    }

    .product_informations button:before, .product_informations button:after{
        content:'';
        position:absolute;
        top:0;
        right:0;
        height:2px;
        width:0;
        background: rgb(166, 112, 65);
        transition:400ms ease all;
    }
    .product_informations button:after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    .product_informations button:hover:before, .product_informations button:hover:after{
        width:100%;
        transition:800ms ease all;
    }

    #user_profile {
        width: 40px;
        height: 40px;
        overflow: hidden;
        object-fit: cover;
        border-radius: 75%;
    }
</style>
