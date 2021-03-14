<template>
    <div>
        <h2>Bank application</h2>
        <hr>
        <router-link to="/">Return home</router-link>
        <MainScreen />
    </div>
</template>

<script>
import MainScreen from '@/components/MainScreen'
// import moment from 'moment'


export default {
  name: 'App',
  components: {
      MainScreen
  },

}
</script>