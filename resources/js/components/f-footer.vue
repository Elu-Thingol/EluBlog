<template>
    <div class="f-footer">
        <span v-if="!_.isEmpty(blog)">Copyright © 2020 {{blog.personal.nickname}}</span>
        <br />
        <span id="poweredby">Powered by Vue</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'f-footer',
    computed: {
        ...mapGetters({
            blog: 'info/getBlog',
        }),
    }
}
</script>

<style scoped>
.f-footer {
    text-align: center;
    padding-bottom: 10px;
    margin-top: 20vh;
    margin-bottom: 4vh;
    /* color: #fff; */
    /* background-color: #555; */
    font: 12px/1.14 arial, 宋体;
    color: #606975;
    font-family: 'Noto Sans SC';
    font-weight: 100;
}
</style>
