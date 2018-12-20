<template>
    <div id="lights">
        <h1>Manage Lights</h1>
        <!--<p>{{resultSet}}</p>-->
        <table class="table table-hover" v-if="resultSet">
            <thead>
            <th scope="col">ID</th>
            <th scope="col">Level</th>
            <th scope="col">Status</th>
            <th scope="col">RoomID</th>
            </thead>
            <tbody>
            <tr v-for="light in resultSet" :key="light.id">
                <th scope="row">{{light.id}}</th>
                <td>{{light.level}}</td>
                <td>
                    <button v-if="light.status === 'ON'" v-on:click="switchLight(light.id)"><img
                            src="../assets/on.png"/></button>
                    <button v-else v-on:click="switchLight(light.id)"><img src="../assets/off.png"/></button>
                </td>
                <td>{{light.roomId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: 'Lights',
        data() {
            return {
                resultSet: [],
                connected: false
            }
        },
        head: {
            title: {
                inner: 'Manage Lights'
            }
        },
        methods: {
            switchLight: function (id) {
                this.$http
                    .put(this.$masterUrl + '/api/lights/' + id + '/switch')
                //.then(this.getLights)
            },
            /*
            getLights : function () {
                this.$http
                    .get(this.$masterUrl + '/lights')
                    .then(response => (this.resultSet = response.data))
            },
            */
            connect() {
                this.socket = new SockJS(this.$masterUrl + "/websockets");
                this.stompClient = Stomp.over(this.socket);
                this.stompClient.connect(
                    {},
                    frame => {
                        this.connected = true;
                        /* eslint-disable-next-line no-console */
                        console.log('Connected: ' + frame);
                        this.stompClient.subscribe("/topic/lights", res => this.resultSet = JSON.parse(res.body));
                    },
                    error => {
                        /* eslint-disable-next-line no-console */
                        console.log(error);
                        this.connected = false;
                    }
                );
            },
            disconnect() {
                if (this.stompClient) {
                    this.stompClient.disconnect();
                }
                this.connected = false;
            },
            tickleConnection() {
                this.connected ? this.disconnect() : this.connect();
            }
        },
        mounted() {
            // this.getLights();
            this.connect();
        },
        beforeDestroy() {
            this.disconnect();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #lights {
        margin-top: 60px;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
