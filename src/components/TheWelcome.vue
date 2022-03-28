<script lang="ts">
import { ref } from "vue";

export default {
  //** COMPOSITION API **/
  setup() {
    const tasks = ref([]);
    const newTask = ref("");

    function addTask() {
      tasks.value.push(newTask.value);
    }
    return {
      tasks,
      addTask,
      newTask,
    };
  },

  //** OPTIONS API **/
  // data() {
  //   return {
  //     tasks: [],
  //     newTask: "",
  //   };
  // },
  // methods: {
  //   addTask() {
  //     this.tasks.push(this.newTask);
  //   },
  // },
};
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
