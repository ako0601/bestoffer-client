<template>
    <div>
        <Banner />
        <div class="Main_banner">
            <h2>오늘의 베스트 오퍼</h2>
            <h1>{{TodaysDeal}}</h1>
            <div id="app">
                <swiper class="swiper" :options="swiperOption">
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
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>

</template>

<script>
    import { Swiper, SwiperSlide } from "vue-awesome-swiper";
    import 'swiper/swiper-bundle.css'
    export default {
        name: 'swiper-example-responsive-breakpoints',
        title: 'Responsive breakpoints',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                TodaysDeal: "한정판 에어조던",
                swiperOption: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                }
            }
        }
    }
</script>


<style>
    .Main_banner h1 {
        text-align: center;
        font-weight: 900;
    }
    .Main_banner h2 {
        margin-top: 50px;
        text-align: center;
        font-weight: 600;
        
    }

    .swiper {
        width: 100%;
        height: 300px;
        padding-left: 10%;
    }

    .swiper-slide {
        max-width: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        transition: transform .3s;
    }

    .swiper-slide:hover {
        transform: scale(1.1);
    }
</style>