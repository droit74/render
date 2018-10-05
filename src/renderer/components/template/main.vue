<template>
    <div class="manage transition-initial show">
        <div class="manage__sidebar fixed toggled">
            <nav>
                <div class="manage__sidebar-header"><a href="/manage/tasks/list"
                                                       class="manage__logo hide-sm active"><img src="../../../../static/images/logo.png">
                    <span class="manage__sidebar-text">TurboRender</span></a>

                </div>
                <div class="manage__sidebar-menu">
                    <ul class="manage__menu">
                        <li><a href="#" @click.prevent="toLink('Task/list')" ><span
                                class="manage__menu-icon manage__icon-rendering"></span> <span
                                class="manage__sidebar-text">Задачи</span></a></li>

                        <li><a href="#" @click.prevent="toLink('User/profile')" class=""><span
                                class="manage__menu-icon manage__icon-account"></span> <span
                                class="manage__sidebar-text">Мой профиль</span></a></li>

                    </ul>

                </div>
            </nav>
        </div>
        <div class="manage__container">
            <div class="manage__container-veil"></div>
            <header>
                <div class="manage__header">
                    <div class="manage__header-left">
                        <button class="manage__toggle"><span class="manage__toggle-icon"></span></button>

                    </div>
                    <div class="manage__header-right" style="padding-right: 17px;">
                        <div class="manage__payments">
                            <div class="manage__balance">
                                <div class="manage__balance-item hide-sm manage__balance-positive"><span
                                        class="manage__balance-title">Баланс</span> <span class="manage__balance-state"><strong>
                                    {{balance}}
                                </strong>

                                </span></div>  </div>
                            <a href="#" @click.prevent="logout()">    Выйти </a></div>


                        <button class="manage__logout"><span class="manage__logout-icon"></span></button>
                    </div>
                </div>
            </header>
            <main>
                <div class="manage__content">
                    <div class="manage__body">
                        <div class="manage__panel show-sm"><a href="/manage/tasks/create" class="btn btn-success">Новая
                            задача</a>
                            <div class="manage__balance">
                                <div class="manage__balance-item manage__balance-positive"><span
                                        class="manage__balance-title">Баланс</span> <span class="manage__balance-state"><strong>388.96</strong> <span
                                        class="fas fa-ruble-sign"></span></span></div>
                            </div>
                        </div>


                        <div class="transition">
                            <div class="common__view">
                                <div class="transition">
                                    <div class="common__view">

    <slot></slot>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="common__veil delay">
                        <div class="common__loader"><span>●</span> <span>●</span> <span>●</span> <span>●</span>
                            <span>●</span> <span>●</span></div>
                    </div>
                </div>
            </main>
        </div>

    </div>
</template>

<script>
    /* eslint-disable */
    import { mapState } from 'vuex'
    import {API} from '@/mixins/API'
    export default {
        mixins:[API],
        name: "my-main",
        computed:{
            ...mapState({
                balance:state=>state.user.balance.current,
                st:state=>state,
            })
        },
        methods:{
            logout(){

                this.$store.commit('logout')
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>