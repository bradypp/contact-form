<template>
  <form class="form" @submit="submitForm">
    <p class="required">All fields marked with * are required</p>
    <div class="field">
      <label for="email">Email Address*</label>
      <input
        id="email"
        type="text"
        name="email"
        v-model.trim="email"
        required
        placeholder="example@email.com"
      />
      <p class="tip">We'll never share your email with anyone else</p>
    </div>
    <div class="field">
      <label for="full-name">Full Name*</label>
      <input
        id="full-name"
        type="text"
        name="full-name"
        v-model.trim="fullName"
        required
        placeholder="John Doe"
      />
    </div>
    <div class="field">
      <label for="message">Message*</label>
      <textarea
        id="message"
        name="message"
        v-model.trim="message"
        required
        placeholder="Please enter your message"
      />
    </div>
    <BaseButton type="submit">Submit</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      fullName: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // TODO: send data
    },
  },
};
</script>
