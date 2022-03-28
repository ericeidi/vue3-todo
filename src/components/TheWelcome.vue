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
    addTask() {
      this.tasks.push(this.newTask);
    },
  },
});
</script>

<template>
  <h1>Todo List</h1>
  <input v-model="newTask" type="text" placeholder="Task Name" />
  <button @click="addTask()" type="submit">Add</button>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
    </li>
  </ul>
</template>
