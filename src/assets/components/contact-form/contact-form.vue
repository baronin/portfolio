<template>
  <div>
    <form action="" class="contact-form">
      <input class="form-input" type="text" name="" id="FirstName" placeholder="First Name">
      <input class="form-input" type="text" name="" id="LastName" placeholder="Last Name">
      <input class="form-input" type="email" name="Email" id="Mail" placeholder="Email Address">
      <textarea class="form-input width"
                name="" id="textarea" cols="10" rows="10" placeholder="Message"></textarea>
      <button class="btn-reset btn-form">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact-form',
};
</script>

<style lang="scss">
  @import "../../scss/variables";

  .contact-form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .form-input {
      width: 290px;
      padding: 10px;
      margin: 0 0 14px 0;
      border: 1px solid $colorLink;
      box-shadow: 0 3px 2px -2px rgba(204, 204, 204, 0.75) inset;
      border-radius: 3px;
    }

    .width {
      width: 436px;
    }
  }
</style>
