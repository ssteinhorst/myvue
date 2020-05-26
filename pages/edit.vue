<template>
  <ul>
    <li v-for="provider in providers" :key="provider.name">
      <span>{{ provider.name }}</span>
      <span>{{ provider.address }}</span>
      <span>{{ provider.phone }}</span>
    </li>
    <!-- <li><input @keyup.enter="addProvider" placeholder="Enter name"></li> -->
    <li>name <input type="text" id="pname"></li>
    <li>address<input type="text" id="paddress"></li>
    <li>phone<input type="text" id="pphone"></li>
    <button v-on:click="addProvider">Save</button>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    providers () {
      return this.$store.state.providers.list;
    }
  },
  methods: {
    addProvider (e) {
      this.$store.commit('providers/add', e.target.value);
      e.target.value = '';
    }
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>