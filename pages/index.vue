<template>
    <div>
        <Banner />
        <div class="Main_banner">
            <h2>오늘의 베스트 오퍼</h2>
            <h1>{{TodaysDeal}}</h1>
            <div id="app">
                <swiper class="swiper" :options="swiperOption1">
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
        <div class="hot-items">
            <h1>Hot Now</h1>
            <swiper class="swiper" :options="swiperOption2">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
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
                swiperOption1: {
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
                },
                swiperOption2: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
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

    .Main_banner .swiper {
        width: 100%;
        height: 300px;
        padding-left: 10%;
    }

    .Main_banner .swiper-slide {
        max-width: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        transition: transform .3s;
    }

    .Main_banner .swiper-slide:hover {
        transform: scale(1.1);
    }

    .hot-items {
        margin-top: 120px;
        padding: 50px;
        background-color: black;
    }

    .hot-items h1 {
        text-align: center;
        padding: 3px;
        padding-right: 15px;
        padding-left: 15px;
        width: max-content;
        background-color: white;
        border-radius: 10px;
        margin-bottom: 30px;
    }

    .hot-items .swiper {
        height: 300px;
        width: 100%;
    }
    .hot-items .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
        background-color: white;
    }
</style>