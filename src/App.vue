<template>
  <div id="app">
    <header>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Light Tracker</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item to="/buildings">Buildings</b-nav-item>
            <b-nav-item to="/rooms">Rooms</b-nav-item>
            <b-nav-item to="/lights">Lights</b-nav-item>
            <b-nav-item to="/temperature-sensors">Temperature Sensors</b-nav-item>
            <b-nav-item to="/humidity-sensors">Humidity Sensors</b-nav-item>
            <b-nav-item to="/all">EVERYTHING!</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
