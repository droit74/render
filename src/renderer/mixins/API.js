/*eslint-disable */
export const API = {
    data() {
        return {
            socket: false
        }
    },
    mounted() {

    },
    methods: {
        toLink(action) {
            localStorage.setItem("action",action)

            var data = '{"action":"'+action+'","data":{},"mark":"'+this.$store.state.mark+'"}';
            this.$store.state.socket.send(data);
        },
        userLogin(login, password) {
            this.$store.commit('incrementMark')
            var data = '{"action":"User/login","data":{"login":"'+login+'","password":"'+password+'","source":"Farm/1.2.5"},"mark":"'+this.$store.state.mark+'"}';
            this.$store.state.socket.send(data);
        },
        toAction(action, data) {
            console.log(action, data)


            if (action == 'User/login'){

                localStorage.setItem("token",data.user.token)
                this.$store.commit("dataPushUser",data.user)


                this.toLink('User/profile');
                //this.$router.push('/User/profile')
            }else {
                this.$store.commit("dataPush",data)
                this.$router.push('/'+action)
            }

        }

    }
}


