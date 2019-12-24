<template>
  <div>
    <transition-group name="fade">
      <div v-bind:key="todo.id" v-for="todo in todos">
        <TodoItem 
          v-bind:todo="todo"
          v-on:del-todo="$emit('del-todo', todo.id)"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
}
</script>


<style lang="scss" scoped>
  @import './../assets/scss/components/_Todos.scss';
</style>