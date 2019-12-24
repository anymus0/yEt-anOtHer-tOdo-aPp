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

<style lang="scss">
  @import './assets/scss/components/_App.scss';
</style>
