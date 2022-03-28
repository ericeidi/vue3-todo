<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const tasks = ref([]);
    const newTask = ref({
      name: "",
      isCompleted: false,
    });
    function addTask() {
      if (!newTask.value.name) return;
      tasks.value.push({ ...newTask.value });
      newTask.value.name = "";
    }
    function markTaskCompleted(position: number) {
      tasks.value[position].isCompleted = !tasks.value[position].isCompleted;
    }
    function removeTask(index) {
      tasks.value.splice(index, 1);
    }
    return {
      tasks,
      addTask,
      markTaskCompleted,
      newTask,
      removeTask,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="todo">
      <h1>Todo List</h1>
      <input v-model="newTask.name" type="text" placeholder="Task Name" />
      <button @click="addTask()" type="submit">Add</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <input
            @click="markTaskCompleted(index)"
            type="checkbox"
            :checked="task.isCompleted"
          />
          {{ task.name }}
          <button @click="removeTask(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #404040;
}
.todo {
  background-color: #fff;
  padding: 8px;
}
.todo input[type=text]{
  min-width: 80%;
  background-color: transparent;
}
</style>
