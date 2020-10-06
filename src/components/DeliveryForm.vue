<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="field">
      <label for="email">Email Address</label>
      <input id="email" type="text" name="email" v-model.trim="email" />
    </div>
    <div class="field">
      <label for="full-name">Full Name</label>
      <input id="full-name" type="text" name="full-name" v-model.trim="fullName" />
    </div>
    <div class="field">
      <label for="message">Message</label>
      <input id="message" type="text" name="message" v-model.trim="message" />
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
