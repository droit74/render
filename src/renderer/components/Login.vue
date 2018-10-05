<template>


    <div class="auth transition-initial show">
        <header class="auth__header"></header>
        <main>
            <div class="container-fluid">
                <div class="transition">
                    <div class="login">
                        <div class="row align-items-center full-window-height">
                            <div class="col">
                                <div class="row justify-content-center">
                                    <div class="col">
                                        <div class="auth__logo"><img src="../../../static/images/logo.png"> <span>TurboRender</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center auth__container">
                                    <div class="auth__form">
                                        <div class="col">
                                            <div class="common__control auth__field">
                                                <input v-model="login"
                                                        id="login"
                                                       name="login"
                                                       autofocus="autofocus"
                                                       class="form-control"> <label
                                                    for="login">Email</label> <span class="common__error-hint"
                                                                                    style="display: none;"><span
                                                    class="fas fa-exclamation-circle"></span>
                                Email не заполнен или имеет некорректный формат
                            </span></div>
                                            <div class="common__control auth__field">
                                                <input v-model="password"
                                                        id="password"
                                                       name="password"
                                                       type="password"
                                                       class="form-control"> <label
                                                    for="password">Пароль</label> <span class="common__error-hint"
                                                                                        style="display: none;"><span
                                                    class="fas fa-exclamation-circle"></span>
                                Введите пароль
                            </span></div>

                                            <!--div class="form-group">
                                              <div class="checkbox abc-checkbox"><input id="remember_me" type="checkbox" class="styled">
                                                <label for="remember_me">Запомнить меня</label></div>
                                            </div-->
                                            <div class="form-group extra-margin-bottom">
                                                <button class="btn btn-primary w-100" @click.prevent="formLogin()">
                                                    Войти
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>



</template>

<script>
    /* eslint-disable */

    import {API} from '@/mixins/API'

    export default {
        mixins: [API],
        name: 'landing-page',
        data() {
            return {
                login: 'vladislav7496@mail.ru',
                password: 'xcflnypm'
            }
        },
        methods: {
            toLink() {

                //console.log(this.$store.state.socket)
                //this.$router.push('/task')
            },
            formLogin() {
                this.userLogin(this.login, this.password)
            }
        },
        mounted(){
            //console.log(localStorage.getItem("test"))

            //localStorage.setItem("test", "testValue")
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Source Sans Pro', sans-serif;
    }

    #wrapper {
        background: radial-gradient(
                ellipse at top left,
                rgba(255, 255, 255, 1) 40%,
                rgba(229, 229, 229, .9) 100%
        );
        height: 100vh;
        padding: 60px 80px;
        width: 100vw;
    }

    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }


</style>
