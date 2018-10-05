<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    /* eslint-disable */
    import {API} from '@/mixins/API'


    export default {
        mixins:[API],
        name: 'el_vue',
        mounted(){
            this.$store.dispatch('initWebSocketClient')
                .then(ws=>{
                    //var data = '{"action":"User/login","data":{"login":"vladislav7496@mail.ru","password":"xcflnypm","source":"Farm/1.2.5"},"mark":"3"}';
                    //ws.send(data);



                    ws.webSocket.onmessage = (event) =>  {
                        var data = JSON.parse(event.data)
                        console.log(data)
                        //if (data.data.result && data.mark == this.$store.state.mark){
                            this.toAction(data.action,data.data)
                        //}
                        //console.log(data);
                    };
                })
        }

    }
</script>

<style>
  @import "../.././static/App.css";
  @import "../.././static/vendor.css";




  /* CSS */
</style>
