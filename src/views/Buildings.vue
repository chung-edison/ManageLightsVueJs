<template>
    <div id="buildings">
        <h1>Manage Buildings</h1>
        <!--<p>{{resultSet}}</p>-->
        <table class="table table-hover" v-if="resultSet">
            <thead>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            </thead>
            <tbody>
            <tr v-for="item in resultSet" :key="item.id">
                <th scope="row">{{item.id}}</th>
                <td>{{item.name}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Buildings',
        data () {
            return {
                resultSet: [],
            }
        },
        head : {
            title: {
                inner: 'Manage Buildings'
            }
        },
        mounted () {
            this.$http
                .get('https://faircorp-app-ce.cleverapps.io/api/buildings')
                .then(response => (this.resultSet = response.data))
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #buildings {
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
