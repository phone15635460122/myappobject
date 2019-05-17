<template>
    <div>
        <div class="top">
            <span @click="$router.go(-1)"> ‹ </span>
            <h2>购物车</h2>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scope>
    .top{
        position: fixed;
        top: 0;
        width: 100%;
        height: 1.2rem;
        background-color: orange;
    }
    .top span{
        float: left;
        line-height: 1.2rem;
        font-size: 1rem;
        color: white;
        margin-left: 0.5rem;
    }
    .top h2{
        float: left;
        font-size: 0.4rem;
        margin-left: 2.4rem;
        color: white;
        line-height: 1.2rem;
    }
</style>