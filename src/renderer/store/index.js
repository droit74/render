/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socket:null,
        mark:1,
        dataPush:null,
        user: false,
        task: 'стор приложени',
        count:0
    },
    actions: {
        initWebSocketClient(context,ws){

            var ws = new WebSocket('wss://renderapp.turborender.com:8443/client', ['render-app'])


            context.commit('ws',ws)
            return new Promise((resolve, reject) => {
                ws.onopen = function() {


                    let token = localStorage.getItem("token")

                    console.log(token)
                    if (!(token === null || token === undefined)){
                        var data = '{"action":"User/login","data":{"source":"Farm/1.2.6","token":"'+token+'"},"mark":"1"}'
                        ws.send(data)
                        console.log(token)
                        resolve({webSocket:ws,route:'route'})
                    }else {
                        resolve({webSocket:ws,route:false})
                    }

                }
            })
        }

    },
    mutations: {
        dataPushUser(state,user){
            state.user = user
        },
        dataPush(state,dataPush){
            state.dataPush = dataPush
        },
        ws(state,ws){
            state.socket = ws;
        },
        incrementMark(state) {
            console.log(state.mark)
            state.mark++;
        },
        logout(state){

            localStorage.clear()

        }
    }
})
