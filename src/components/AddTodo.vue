<template>
  <div class="wrapper">
    <FlashMessage></FlashMessage>
    <form @submit="InputValidation">
      <input id="title" type="text" name="title" placeholder="Add Todo..." v-model="title">
      <button type="submit" name="Submit" class="btn">Send Todo</button>
    </form>
  </div>
</template>


<script>
import uuid from 'uuid'
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    }
  },
  methods: {

    addTodo(event) {
      event.preventDefault();
      //create newTodo object
      const newTodo = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      }
      // send newTodo up to parent
      this.$emit('add-todo', newTodo)

      //clear title input field
      this.title = ""
    },
    InputValidation(event) {
      event.preventDefault();

      if (this.title !== "") {
        this.addTodo(event)
        this.flashMessage.success({
          title: 'Success', 
          message: 'You have successfully added a new todo to your list!', 
          time: 5000,
          });
      }
      else if (this.title === "") {
        this.flashMessage.error({
          title: 'Type in something to do!', 
          message: 'You have to type in something first!', 
          time: 5000,
          });
      }
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