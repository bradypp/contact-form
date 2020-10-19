<template>
  <form class="form" @submit.prevent="submitForm">
    <p class="required">All fields marked with * are required</p>
    <InputField
      type="text"
      name="email"
      v-model.trim="email"
      label="Email Address"
      tip="We'll never share your email with anyone else"
      placeholder="example@email.com"
    />
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
import InputField from './form/InputField';
import BaseButton from './ui/BaseButton';

export default {
  components: {
    InputField,
    BaseButton,
  },
  data() {
    return {
      email: '',
      fullName: '',
      message: '',
    };
  },
  computed: {
    emailError() {
      return this.$v.email.required ? 'Email is required' : '';
    },
  },
  methods: {
    submitForm() {
      // TODO: send data
    },
  },
};
</script>
