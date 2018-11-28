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
                    <button v-if="light.status === 'ON'" v-on:click="switchLight(light.id)"><img src="../assets/on.png"/></button>
                    <button v-else v-on:click="switchLight(light.id)"><img src="../assets/off.png"/></button>
                </td>
                <td>{{light.roomId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Lights',
        data () {
            return {
                resultSet: [],
            }
        },
        head : {
            title: {
                inner: 'Manage Lights'
            }
        },
        methods : {
            switchLight: function (id) {
                this.$http
                    .put('https://faircorp-app-ce.cleverapps.io/api/lights/' + id +'/switch')
                    .then(this.getLights)
            },
            getLights : function () {
                this.$http
                    .get('https://faircorp-app-ce.cleverapps.io/api/lights')
                    .then(response => (this.resultSet = response.data))
            }
        },
        mounted () {
            this.getLights();
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
