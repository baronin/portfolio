<template>
  <div>
    <form action="" class="contact-form">
      <input id="FirstName" class="form-input" type="text" name="" placeholder="First Name" />
      <input id="LastName" class="form-input" type="text" name="" placeholder="Last Name" />
      <input id="Mail" class="form-input" type="email" name="Email" placeholder="Email Address" />
      <textarea
        id="textarea"
        class="form-input width"
        name=""
        cols="10"
        rows="10"
        placeholder="Message"></textarea>
      <button class="btn-reset btn-form">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables';

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
