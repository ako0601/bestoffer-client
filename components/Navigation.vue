<template>
    <div class="navigation">
        <a href="/" id="navlink">Home</a>
        <a href="products" id="navlink">Products</a>
        <a href="elements" id="navlink">Elements</a>
        <a href="Private" id="navlink">Private</a>
        <a href="#" id="navlink">임시</a>
    </div>
</template>


<style>
    .navigation {
        padding-left: 20%;
        padding-right: 20%;
        width: 100%;
        height: 60px;
        background-color: #013A40;
        color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .navigation a {
        color: white;
        text-decoration: none;
    }

    #navlink {
        width: 100%;
        height: 100%;
        text-align: center;
        justify-content: center;
        display: flex;
        align-items: center;
        transition: background .5s, box-shadow .15s;
    }

    #navlink:hover {
        background-color: rgb(92, 108, 116);
    }
</style>