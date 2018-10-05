<template>
    <tpl-main>
        <ul>
            <li>
                Email : {{profile.common.email}}
            </li>
            <li>
                tariff : {{profile.tariff.available[0]}}
            </li>
        </ul>
    </tpl-main>
</template>

<script>
    /* eslint-disable */
    import { mapState } from 'vuex'
    import {API} from '@/mixins/API'
    import tplMain from '@/components/template/main'
    export default {
        mixins:[API],
        name: "user",
        components:{tplMain},
        data(){
            return{
                t1:'1'
            }

        },
        computed:{
            ...mapState({
                user:state=>state.user,
                profile:state=>state.dataPush.user
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>