<template>
  <h2>Welcome to OpenCRM Tasks</h2>
    <input type="text" placeholder="Add new task" v-bind:value="taskInput" v-on:input="handleTaskInput" @keypress.enter="createTask"/>
    <button type ="submit" v-on:click="createTask">Add</button>
    <div class="kanban">
      <div class="kanbanColumn droppable" @drop="onDrop($event, 'need')" @dragover="onDragOver($event)">
        <h2>
          <span>To Do</span>
          <span>({{ tasks.length }})</span>
        </h2>
        <ul class="droppable" @drop="onDrop($event, 'need')" @dragover="onDragOver($event)">
          <li v-for="task in tasks" :key="task.id" class="task draggable" draggable="true" @dragstart="onDragStart($event, task, 'need')">
            <div>
              <input type="checkbox" @change="doCheck(index, 'need')"/>
              <span>{{ task.title }}</span>
            </div>
            <button v-on:click="deleteTask(task.id, 'need')">Delete</button>
          </li>
        </ul>
      </div>
      <div class="kanbanColumn droppable" @drop="onDrop($event, 'complite')" @dragover="onDragOver($event)">
        <h2>
          <span>Done</span>
          <span>({{ compliteTasks.length }})</span>
        </h2>
        <ul сlass="droppable" @drop="onDrop($event, 'complite')" @dragover="onDragOver($event)">
          <li v-for="task in compliteTasks" :key="task.id" class="task complited draggable" draggable="true" @dragstart="onDragStart($event, task, 'complite')">
            <div>
              <input type="checkbox" checked="true" @change="doCheck(index, 'complite')"/>
              <span>{{ task.title }}</span>
            </div>
            <button v-on:click="deleteTask(task.id, 'complite')">Delete</button>
          </li>
        </ul>
      </div>
    </div>
    
</template>

<script>
export default {
  data() {
    return {
      taskInput: '',
      tasks: [],
      compliteTasks: [],
      dragObject: null,
      dragSource: null,
    }
  },
  methods: {
    createTask() {
      if (this.taskInput === '') { 
        return; 
      };
      this.tasks.push({
        title: this.taskInput,
        id: Math.random()
      });
      this.taskInput = "";
    },
    handleTaskInput(event) {
      this.taskInput = event.target.value;
    },
    deleteTask(id, type) {
      if (type === 'need') {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(index, 1);
      } else if (type === 'complite') {
        const index = this.compliteTasks.findIndex(task => task.id === id);
        this.compliteTasks.splice(index, 1);
      }
    },
    doCheck(index, type) {
      if (type === 'need') {
        const completeMask = this.tasks.splice(index, 1);
        this.compliteTasks.push(...completeMask);
      } else if (type === 'complite') {
        const noCompleteMask = this.compliteTasks.splice(index, 1);
        this.tasks.push(...noCompleteMask);
      }
    },
    onDragStart(event, task, type) {
      this.dragObject = task;
      this.dragSource = type;
      event.dataTransfer.effectAllowed = 'move';
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event, target) {
      event.preventDefault();
      if (this.dragSource === target) return;
      if (this.dragSource === 'need') {
        this.deleteTask(this.dragObject.id, 'need');
        this.compliteTasks.push(this.dragObject);
      } else {
        this.deleteTask(this.dragObject.id, 'complite');
        this.tasks.push(this.dragObject);
      }
      this.dragObject = null;
      this.dragSource = null;
    },
  }
}
</script>


<style scoped>
.task {
  display: flex;
  flex-grow: 0;
  align-items: center;
  font-size: 24px;
  border: 1px solid;
  border-radius: 20px;
  border-color: #282c34;
  justify-content: space-between;
  padding: 1%;
  margin: 1%;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.task:hover {
  background-color: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.task span {
  font-weight: 600;
  color: #333;
}

.task .task-status {
  font-size: 18px;
  color: #666;
  margin-left: 10px;
}

.complited {
  text-decoration: line-through;
}
.kanban {
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #282c34;
  border-radius: 20px;
}
.kanbanColumn {
  width: 30%;
  border: 1px solid #282c34;
  min-height: 90vh;
  border-radius: 20px;
  padding: 1% 1%;
}

</style>
