<template>
    <div>
        <Buildings></Buildings>
        <Rooms></Rooms>
        <Lights></Lights>
    </div>
</template>

<script>
    import Buildings from '@/views/Buildings.vue'
    import Rooms from '@/views/Rooms.vue'
    import Lights from '@/views/Lights.vue'

    export default {
        name: 'All',
        components: {
            Buildings,
            Rooms,
            Lights
        },
        head : {
            title: {
                inner: 'Manage EVERYTHING!'
            }
        }
    }
</script>

