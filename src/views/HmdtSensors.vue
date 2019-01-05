<template>
    <div id="hmdtSensors">
        <h1>Humidity Sensors</h1>
        <!--<p>{{resultSet}}</p>-->
        <table class="table table-hover" v-if="resultSet">
            <thead>
            <th scope="col">ID</th>
            <th scope="col">Humidity</th>
            </thead>
            <tbody>
            <tr v-for="hmdtSensor in resultSet" :key="hmdtSensor.id">
                <th scope="row">{{hmdtSensor.id}}</th>
                <td>{{hmdtSensor.humidity}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import SockJS from "sockjs-client";
    import Stomp from "webstomp-client";

    export default {
        name: 'HmdtSensors',
        data() {
            return {
                resultSet: [],
                connected: false
            }
        },
        head: {
            title: {
                inner: 'Humidity Sensors'
            }
        },
        methods: {
            /*
            getHmdtSensors : function () {
                this.$http
                    .get(this.$masterUrl + '/humidity-sensors')
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
                        this.stompClient.subscribe("/topic/humidity-sensors", res => this.resultSet = JSON.parse(res.body));
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
    #hmdtSensors {
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
