<template>
  <div class="size">
    <div class="topbar">
      <div class="hamburger">
        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
          <template onclick="" #button-content>
            <div class="hamburger_menu"></div>
            <div class="hamburger_menu"></div>
            <div class="hamburger_menu"></div>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here...</b-dropdown-item>
        </b-dropdown>
      </div>
      
      <div class="logo">
        <img onclick="location.href = '/'" src="../assets/images/Logo.png"/>
      </div>
      <div class="search_container">
        <div class="dropdown">
          <div>
            <b-dropdown id="dropdown-1" variant="none" class="m-md-2">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>Active action</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
        <input class="search" type="text" placeholder="검색어 입력">
        <button class="searchbtn"></button>
      </div>
      <div class="user_contents">
        <div class="infocart_contents">
          <a href="#"><img src="../assets/images/round-add-button.png"></a>
        </div>
        <div class="infocart_contents">
          <a href="cart"><img src="../assets/images/shopping-cart.png"></a>
        </div>
        <div class="infocart_contents">
          <a href="#"><img src="../assets/images/user.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  };
</script>

<style>
  .size {
    height: 100px;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #394759;
  }

  .topbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1400px;
  }

  .logo img {
    width: 130px;
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
    height: 40px;
    width: 35%;
    background: #ffffff;
    border-radius: 25px;
    display: flex;
    align-items: center;
  }

  .search_container input {
    padding-left: 15px;
    font-size: 16px;
    width: 80%;
    border: 0px;
    outline: none;
    float: left;
    border-radius: 25px;
  }

  .search_container .searchbtn {
    width: 30px;
    height: 30px;
    border: 0px;
    background-image: url("../assets/images/search.png");
    background-size: cover;
    outline: none;
    float: right;
  }

  .user_contents {
    display: flex;
  }

  .hamburger_menu {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 5px 0;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 100px;
    width: 100px;
    background-color: #394759;
    transition: 0.9s;
  }

  .hamburger:hover {
    background-color: #4F5F73;
  }

  .hamburger b-dropdown {
    border: 1px solid red;
  }

</style>
