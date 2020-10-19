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
      <label for="order-number">Order Number*</label>
      <input
        id="order-number"
        type="text"
        name="order-number"
        v-model.trim="orderNumber"
        required
        placeholder="21686939"
      />
      <p class="tip">Order Number can be found on your order confirmation/invoice</p>
    </div>
    <div class="field">
      <label for="message">Message*</label>
      <textarea
        id="message"
        type="text"
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
import BaseButton from './ui/BaseButton';
export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      email: '',
      fullName: '',
      message: '',
      orderNumber: '',
    };
  },
  methods: {
    submitForm() {
      // TODO: send data
    },
  },
};
</script>
