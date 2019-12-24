<template>
  <!-- bind a class if the "completed" key's value is true -->
  <div class="todo-item">
      <p v-bind:class="{'is-complete':todo.completed}">
        <input type="checkbox" v-on:change="markComplete">
        <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        {{todo.title}}
      </p>
      
  </div>
</template>


<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>


<style lang="scss" scoped>
  @import './../assets/scss/components/_TodoItem.scss';
</style>
