<template>
    <div class="private_main">
        <h1>프라이빗 경매장</h1>
        <div class="auction_room_list">
            <div v-for="room in rooms" :key="room" class="list_div">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rooms: [
                { username:"김박사", uptime: "2021-01-07 18:24:37", auction_room_name: "네이버 해수어 카페 27회차 크라운피시 경매", auction_item_amount: 34, seeing: 0}
            ]
        }
    }
}
</script>

<style>

</style>