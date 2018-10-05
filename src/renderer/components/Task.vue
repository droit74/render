<template>
    <div>
        <tpl-main>

            <div class="tasks">
                <div class="common__toolbar">

                     <h1>Задачи</h1>
                </div>


                <table class="table common__table tasks__table">
                    <thead>
                    <tr>


                        <th class="width-normal">
                            Статус

                        </th>
                        <th class="width-small">
                            Готово кадров

                        </th>
                        <th class="hide-xl width-small">
                            Стоимость

                        </th>
                        <th class="hide-xl width-small">
                            Продукт

                        </th>
                        <th class="hide-xl width-normal">
                            Создано

                        <th class="width-normal">
                            Обновлено

                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in tasks">

                        <td data-column="Статус" class="common__status-success">
                            Complete
                        </td>
                        <td data-column="Готово кадров">
                            {{item.frames.finished}} / {{item.frames.total}}
                        </td>
                        <td data-column="Стоимость" class="hide-xl"><span class="">
                            {{item.cost}}
                            </span></td>
                        <td data-column="Продукт" class="hide-xl">{{item.product}}</td>
                        <td data-column="Создано" class="hide-xl">{{item.created_at}}</td>
                        <td data-column="Обновлено">{{item.updated_at}}</td>

                    </tr>
                    </tbody>
                </table>
    </div>



        </tpl-main>


    </div>
</template>

<script>
    /* eslint-disable */
    import { mapState } from 'vuex'
    import {API} from '@/mixins/API'
    import tplMain from '@/components/template/main'
    export default {
        mixins:[API],
        name: "task",
        components:{tplMain},
        data(){
            return{
                t1:'1'
            }

        },
        computed:{
            ...mapState({
                tasks:state=>state.dataPush.tasks
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>