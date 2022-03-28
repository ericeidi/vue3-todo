<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    printSomething() {
      this.tasks.push(this.newTask);
    },
  },
});
</script>

<template>
  <h1>Todo List</h1>
  <input v-model="newTask" type="text" placeholder="Task Name" />
  <button @click="printSomething" type="submit">Add</button>
  <ul>
    <li v-for="(task, i) in tasks" :key="i">
      {{ task }}
    </li>
  </ul>
</template>
