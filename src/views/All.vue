<template>
    <div>
        <Buildings></Buildings>
        <Rooms></Rooms>
        <Lights></Lights>
        <TempSensors></TempSensors>
        <HmdtSensors></HmdtSensors>
    </div>
</template>

<script>
    import Buildings from '@/views/Buildings.vue'
    import Rooms from '@/views/Rooms.vue'
    import Lights from '@/views/Lights.vue'
    import TempSensors from "@/views/TempSensors.vue";
    import HmdtSensors from "@/views/HmdtSensors.vue";

    export default {
        name: 'All',
        components: {
            Buildings,
            Rooms,
            Lights,
            TempSensors,
            HmdtSensors
        },
        head : {
            title: {
                inner: 'Manage EVERYTHING!'
            }
        }
    }
</script>

