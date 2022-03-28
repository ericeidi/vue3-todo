<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 1,
    };
  },
  methods: {
    printSomething() {
      console.log("Passei aqui");
    },
  },
});
</script>

<template>
  <h1>Todo List</h1>
  <input type="text" placeholder="Task Name" />
  <button @click="printSomething" type="submit">Add</button>
</template>
