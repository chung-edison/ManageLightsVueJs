<template>
    <div id="rooms">
        <h1>Manage Rooms</h1>
        <!--<p>{{resultSet}}</p>-->
        <table class="table table-hover" v-if="resultSet">
            <thead>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Floor</th>
            <th scope="col">buildingId</th>
            </thead>
            <tbody>
            <tr v-for="room in resultSet" :key="room.id">
                <th scope="row">{{room.id}}</th>
                <td>{{room.name}}</td>
                <td>{{room.floor}}</td>
                <td>{{room.buildingId}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                resultSet: [],
            }
        },
        head : {
            title: {
                inner: 'Manage Rooms'
            }
        },
        mounted () {
            this.$http
                .get('https://faircorp-app-ce.cleverapps.io/api/rooms')
                .then(response => (this.resultSet = response.data))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #rooms {
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
