<template>
  <div class="size">
    <div class="topbar">
      <div class="logo">
        <img onclick="location.href = '/'" src="../assets/images/Logo.png"/>
      </div>
      <div class="search_container">
        <input class="search" type="text" placeholder="검색어 입력">
        <button>검색</button>
      </div>
      <div class="infocart_contents">
        <a href="#"><img src="../assets/images/round-add-button.png"></a>
      </div>
      <div class="infocart_contents">
        <a href="#"><img src="../assets/images/shopping-cart.png"></a>
      </div>
      <div class="infocart_contents">
        <a href="#"><img src="../assets/images/user.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .size {
    margin: 10px;
  }
  .topbar {
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo img {
    width: 200px;
    cursor: pointer;
  }

  .infocart_contents img {
    width: 40px;
    height: 40px;
    margin-bottom: 2px;
  }

  .infocart_contents {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 10px;
    flex-grow: 0;
  }

  .search_container {
    height: 50px;
    width: 500px;
    border: 1px solid #013A40;
    background: #ffffff;
  }

  .search_container input {
    font-size: 16px;
    width: 425px;
    padding: 10px;
    border: 0px;
    outline: none;
    float: left;
  }

  .search_container button {
    width: 70px;
    height: 100%;
    border: 0px;
    background: #013A40;
    outline: none;
    float: right;
    color: white;
  }

</style>
