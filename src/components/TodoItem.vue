<template>
  <!-- bind a class if the "completed" key's value is true -->
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">

    <p>
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


<style scoped>
  .todo-item {
    background: #27ae60;
    padding: 10px;
    border-bottom: 0.3rem #12181f solid;
  }
  .is-complete {
    text-decoration: line-through;
  }
  .del {
    background: #851f1f;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 0%;
    cursor: pointer;
    float: right;
  }
</style>
