<template>
  <AppForm class="form" :onSubmit="onSubmit" :validation="{}">
    <p class="required">All fields marked with * are required</p>
    <FormField
      element="input"
      type="text"
      name="email"
      v-model="email"
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
    <BaseButton type="button" @click="testing">Submit</BaseButton>
  </AppForm>
</template>

<script>
import FormField from './form/FormField';
import AppForm from './form/AppForm';

export default {
  components: { AppForm, FormField },
  data() {
    return {
      email: '',
      fullName: '',
      message: '',
    };
  },
  methods: {
    onSubmit() {
      // TODO: send data
    },
    testing() {
      console.log(this.email);
    },
  },
};
</script>
