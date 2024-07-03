<template>
  <div>
    <h2>Welcome to OpenCRM</h2>
    <p>
      OpenCRM - открытая open-source система для управления сделками, задачами и документами
    </p>
  </div>
  <div>
    <h3>
      Текущие задачи
    </h3>
    <ul>
          <li v-for="task in tasks" :key="task.id" class="task">
            <div>
              <input type="checkbox" @change="doCheck(index, 'need')"/>
              <span>{{ task.title }}</span>
            </div>
            <button v-on:click="deleteTask(task.id, 'need')">Delete</button>
          </li>
        </ul>
  </div>
</template>



<script>
import Tasks from './Tasks.vue';
export default {
  components: {
    Tasks
  },
  methods: {
  }
}
</script>



<style scoped>

</style>
