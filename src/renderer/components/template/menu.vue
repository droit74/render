<template>
    <div>
        <ul>


            <br><hr>
        </ul>
    </div>
</template>


<script>
    /* eslint-disable */
    import { mapState } from 'vuex'
    import {API} from '@/mixins/API'
    export default {
        mixins:[API],
        name: "my-menu",
        data(){
            return{

            }

        },
        computed:{
            ...mapState({
                user:state=>state.dataPush
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>