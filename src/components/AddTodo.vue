<template>
  <div class="wrapper">
    <FlashMessage></FlashMessage>
    <b-form @submit="InputValidation">
      <b-form-input 
        id="title" 
        type="text" 
        name="title" 
        placeholder="Add Todo..." 
        v-model="title">
      </b-form-input>
      <b-button variant="success" type="submit" name="Submit" class="btn">Send Todo</b-button>
    </b-form>
  </div>
</template>


<script>
import uuid from 'uuid'

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


<style lang="scss" scoped>
  @import './../assets/scss/components/_AddTodo.scss';
</style>