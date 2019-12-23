<template>
  <div class="wrapper">
    <form @submit="addTodo">
      <input id="title" type="text" name="title" placeholder="Add Todo..." v-model="title">
      <input type="submit" name="Submit" class="btn">
    </form>
  </div>
</template>


<script>
import uuid from 'uuid'
export default {
  name: "AddTodo",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(event) {
      event.preventDefault();
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // send up to parent
      this.$emit('add-todo', newTodo)

      //clear title input field
      this.title = ''
    }
  }
}
</script>


<style scoped>
  .wrapper {
    padding: 2%;
  }

  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>