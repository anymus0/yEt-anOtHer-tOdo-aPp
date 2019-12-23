<template>
  <div id="app">
    <TodoHeader/>
    <Todos
      v-bind:todos="todos"
      v-on:del-todo="deleteTodo"
    />
    <AddTodo v-on:add-todo="addTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos'
import TodoHeader from './components/layout/TodoHeader'
import AddTodo from './components/AddTodo'

export default {
  name: 'app',
  components: {
    TodoHeader,
    Todos,
    AddTodo,
  },
  //This is where data is stored
  data() {
    return {
      //"todos" is an array of objects, gets data from addTodo() method
      todos: []
    }
  },
  methods: {
    //newTodo is an object that's constructed and emitted in AddTodo.vue
    addTodo(newTodo) {
      this.todos.push(newTodo)
    },
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

  .btn {
    background-color: #00C853;
    margin-left: 2%;
  }
  .btn:hover {
    background-color: rgb(33, 126, 72);
  }
</style>
