<template>
  <ul class="header">
    <li class="link_main"><router-link to="/">OpenCRM</router-link></li>
    <li class="link_main"><router-link to="/Documents">Документы</router-link></li>
    <li class="link_main"><router-link to="/Tasks">Задачи</router-link></li>
    <li class="link_main"><router-link to="/Clients">Клиенты</router-link></li>
    <li class="link_main"><router-link to="/Employers">Сотруднкики</router-link></li>
  </ul>
  <router-view></router-view>
</template>



<script setup>


</script>



<style scoped>
.header {
  font-family: "Ubuntu", sans-serif;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: left;
  font-size: 24px;
  margin-bottom: 1%;
  padding-bottom: 1%;
  border-bottom: 1px solid #282c34;
}
</style>
