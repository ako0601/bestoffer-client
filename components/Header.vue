<template>
  <div class="size">
    <div class="upper_authentication">
      <nav class="my-2 my-md-0 mr-md-3">
        <a href="#">로그인</a> ·
        <a href="#">회원가입</a> ·
        <a href="#">고객센터</a>
      </nav>    
    </div>
    <div class="banner_title">
      <p><a href="/">베스트오퍼</a></p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .size {
    margin-right: 10%;
    margin-left: 10%;
  }

  .banner_title {
    padding-top: 50px;
    padding-bottom: 50px;
    color: black;
    font-size:4em;
    text-overflow: inherit;
    text-align: center;
    font-weight: bold;
    font-family: 'Nanum Myeongjo', serif;
  }

  .banner_title a {
    text-decoration: none;
    color: black;
  }

  .banner_title a:hover {
    text-decoration: none;
    color: black;
  }

  .upper_authentication {
    text-align: right;
  }

  .upper_authentication a {
    text-decoration: none;
    color: cornflowerblue;
  }
</style>
