<template>
    <div class="product_detail_view">
        <div class="product_brief">
            <div class="product_images">
                <div class="thumb-example">
                    <!-- swiper1 -->
                    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                        <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CI3898-100/cd660b39-ba85-42ab-be23-5d75f4a09484_primary.jpg?zoom">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                        </div>
                    </swiper-slide>
                        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    </swiper>
                    <!-- swiper2 Thumbs -->
                    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                        <swiper-slide>
                        <div class="swiper-zoom-container">
                            <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/CI3898-100/cd660b39-ba85-42ab-be23-5d75f4a09484_primary.jpg?zoom">
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="swiper-zoom-container">
                                <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="swiper-zoom-container">
                                <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="swiper-zoom-container">
                                <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="swiper-zoom-container">
                                <img src="https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="product_informations">
                <div class="bid_info">
                    <div class="bid_count">
                        <h4>입찰</h4> 
                        <h3>0 명</h3>
                    </div>
                    <div class="remain_time">
                        <h4>남은시간</h4>
                        <h3>00:00:00</h3>
                    </div>
                    <h1>❤</h1>
                </div>
                <h1>나이키 신발인데 뭔지 모름</h1>
                <h3>현재 가격: 00000원</h3>
                <h4>즉시 결제가: 128,000원</h4>
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
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/swiper-bundle.css'

    export default {
        name: 'swiper-example-thumbs-gallery',
        title: 'Thumbs gallery with Two-way control',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 10,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.params.control = swiperThumbs
                swiperThumbs.params.control = swiperTop
            })
        }
    }
</script>

<style>
    .product_detail_view {
        padding: 50px;
    }

    .product_brief {
        margin: 0 auto;
        width: 1400px;
        display: flex;
    }
    .product_images {
        width: 60%;
    }
    .product_informations {
        width: 40%;
    }
    .thumb-example {
        height: 700px;
    }

    .swiper {
        height: 360px;
        width: 100%;
    }
    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        background-color: white;
        background-position: center;
        background-size: cover;
    }

    .gallery-top {
        height: 80%;
        width: 100%;
    }
    .gallery-thumbs {
        height: 20%;
        padding: 5px;
    }
    .gallery-thumbs .swiper-slide {
        width: 12%;
        height: 100%;
        opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
        opacity: 1;
    }

    .product_detail {
        padding: 15px;
        min-height: 500px;
        background-color: rgb(248, 248, 248);
        margin: 0 auto;
        width: 1400px;
    }

    .product_detail h2 {
        padding: 8px;
        margin-bottom: 5px;
        color: white;
        background-color: #013A40;
    }

    .bid_info{
        color: #013A40;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #013A40;
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
</style>
