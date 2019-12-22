<template>
  <div id="app">
    <Todos 
      v-bind:todos="todos"
      v-on:del-todo="deleteTodo"
    />
  </div>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Todos,
  },
  //This is where data is stored
  data() {
    return {
      //"todos" is an array of objects
      todos: [
        {id: 1, title: "Todo1", completed: false},
        {id: 2, title: "Todo2", completed: false},
        {id: 3, title: "Todo3", completed: false}
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.4;
    background-color: #2c3e50;
  }
</style>
