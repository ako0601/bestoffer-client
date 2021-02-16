<template>
  <div>
    <Banner />
    <div class="Main_banner">
      <h2>오늘의 베스트 오퍼</h2>
      <h1>{{ TodaysDeal }}</h1>
      <div class="TDList">
        <div v-for="i in TD_data" :key="i">
          <div class="TD">
            <img :src="i.TDimage" />
          </div>
        </div>
      </div>
      <a href="#">더보기</a>
    </div>
    <div class="hot-items">
      <h1>Hot Now</h1>
      <div class="HD_main">
        <div v-for="n in HD_data" :key="n" class="contents_HD">
          <img :src="n.HDimage"/>
          <div class="HD_info">
            <div class="HD_user_info">
                <div>
                  <img :src="n.userPic"/>
                  <p>{{ n.user }}</p>
                </div>
            </div>
            <div class="HD_content_info">
              <p style="font-size:0.8rem; font-weight: 900; margin: 0">{{ n.title }}</p>
              <div class="HD_1">
                <p id="nowBID">현입찰가</p>
                <p style="font-size: 1.2rem; font-weight: 700">{{ n.now }}</p>
              </div>
              <div class="HD_2">
                <p>조회수 {{ n.see }}</p>
                <p>BID {{ n.bid }}</p>
                <p v-if="n.status === 'VIP'" id="VIP">VIP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="down_arrow">
        <div class="dal"></div>
        <div class="dar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TodaysDeal: "한정판 에어조던",
      TD_data: [
        {
          index: 1,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 2,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 3,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 4,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 5,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 6,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 7,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 8,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 9,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
        {
          index: 10,
          TDimage:
            "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/AR6351-075/3b7e1149-d435-4597-86e1-bdac07e6c731_primary.jpg?gallery",
        },
      ],

      HD_data: [
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 1832000,
          status: "VIP",
        },
        {
          HDimage: "https://lh3.googleusercontent.com/proxy/ctoZVP8qDZkAbz4f12CXCCh0_GbDf_3DUe6HRvpx7hnNIclw5XkKtghMkKEU-aZalNcRKNELz6FbIsLIs3Vmotsv_ogm9FCtEcy2qo_XUJLX3c8VLuuzYNNzNQh4BY-2I1PZnuk-hqYywrWG87sXpiqMn1dCF74XU-O4z0xe5sPOoOiyrBgWnwTtuImsHglzUdBLcdOxlCkIYTT0wqhKfrk0qNPVd4RovzCFHPwz5wTel4zJ_LtHQ_AkMxmtBNVQmuSS7B0CWDHZHRYxwzMYv86_8BoGZBUkkV78sIBdWgJP1YrF23UfdFaq941Ut1OxQq2ILSM",
          user: "tableman",
          userPic:
            "https://t1.daumcdn.net/cfile/tistory/2526694858CB436C2D",
          title: "전통다과상",
          see: 241,
          bid: 247,
          now: 130000,
          status: "Normal",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 832000,
          status: "VIP",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 4832000,
          status: "Normal",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 832000,
          status: "VIP",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 832000,
          status: "VIP",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 3832000,
          status: "Normal",
        },
        {
          HDimage: "https://i.ytimg.com/vi/ZQ5okltjeE8/maxresdefault.jpg",
          user: "knifeMan12",
          userPic:
            "https://cphoto.asiae.co.kr/listimglink/6/2019100115493093127_1569912571.jpg",
          title: "무쇠칼 (장인이 만든 칼)",
          see: 2331,
          bid: 447,
          now: 832000,
          status: "Normal",
        },
      ],
    };
  },
};
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

.Main_banner .TDList {
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1000px;
  justify-content: center;
}

.Main_banner .TD {
  font-weight: bold;
  font-size: 3rem;
  transition: transform 0.3s;
  margin: 10px;
}

.Main_banner a {
  float: right;
}

.Main_banner .TD img {
  max-width: 160px;
  cursor: pointer;
}

.Main_banner .TD:hover {
  transform: scale(1.1);
}

.hot-items {
  margin-top: 120px;
  background: linear-gradient(#394759, white);
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px 3px #39475921;
}

.HD_main {
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  justify-content: center;
}

.contents_HD {
  background: white;
  border-radius: 30px;
  margin: 10px;
  width: 250px;
  height: 250px;
  box-shadow: 5px 5px 15px 3px #39475957;
}

.HD_info {
  display: flex;
  height: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: red 1px solid;
}

.hot-items h1 {
  text-align: center;
  width: max-content;
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 2.5rem;
  color: white;
  margin-top: 30px;
}

.contents_HD img {
  width: 250px;
  height: 150px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 30px 30px 0 0;
}

.HD_user_info {
  margin-right: 15px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 0.5rem;
  font-weight: 600;
  border: 1px solid blue;
}

.HD_user_info img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 75%;
}

.HD_content_info {
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid indigo;
}

.HD_1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
}

.HD_1 p {
  margin: 0;
  margin-right: 15px;
}

.HD_2 {
  display: flex;
  font-size: 0.7rem;
  font-weight: 500;
  justify-content: flex-start;
  margin: 0;
}

.HD_2 p {
  margin: 0;
  margin-right: 10px;
  font-weight: 600;
}

#nowBID {
  background: #394759;
  color: white;
  width: 60px;
  height: 22px;
  border-radius: 5px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

#VIP {
    background: #eec510;
    color: white;
    width: 30px;
    border-radius: 4px;
    text-align: center;
}

.down_arrow {
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100px;
  height: 100px;
  background: rgba(101, 118, 139, 0.144);
  border-radius: 75%;
  transition: 0.4s;
}

.down_arrow:hover {
  cursor: pointer;
  background: rgba(101, 118, 139, 0.548);
  transition: 0.7s;
}

.down_arrow:hover > .dal {
  -webkit-animation: moving 0.5s linear infinite;
}

.down_arrow:hover > .dar {
  -webkit-animation: moving 0.5s linear infinite;
}

.down_arrow .dal {
  width: 45px;
  height: 2px;
  position: absolute;
  top: 55px;
  left: 12px;
  background: white;
  transform: rotate(45deg);
}

.down_arrow .dar {
  width: 45px;
  height: 2px;
  position: absolute;
  top: 55px;
  right: 12px;
  background: white;
  transform: rotate(-45deg);
}
@keyframes moving {
  100% {
    top: 67px;
  }
}
</style>