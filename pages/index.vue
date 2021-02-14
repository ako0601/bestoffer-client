<template>
    <div>
        <Banner />
        <div class="Main_banner">
            <h2>오늘의 베스트 오퍼</h2>
            <h1>{{TodaysDeal}}</h1>
            <div class="TDList">
                <div v-for="i in TD_data" :key="i">
                    <div class="TD">
                        <img :src="i.TDimage">
                    </div>
                </div>
            </div>
            <a href="#">더보기</a>
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
                TD_data: [
                    {index:1, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:2, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:3, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:4, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:5, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:6, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:7, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:8, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:9, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
                    {index:10, TDimage:"https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery"},
    
                ],
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
        font-weight: 500;
    }
    .Main_banner h2 {
        margin-top: 120px;
        text-align: center;
        font-weight: 600;
    }

    .Main_banner {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .Main_banner .TDList{
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 1400px;
        justify-content: center;
    }

    .Main_banner .TD {
        font-weight: bold;
        font-size: 3rem;
        transition: transform .3s;
        margin: 10px;
    }

    .Main_banner a {
        float: right;
    }

    .Main_banner .TD img {
        max-width: 220px;
        cursor: pointer;
    }

    .Main_banner .TD:hover {
        transform: scale(1.1);
    }

    .hot-items {
        margin-top: 120px;
        padding: 50px;
        background-color: rgb(46, 54, 58);
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
        color: rgb(46, 54, 58);
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