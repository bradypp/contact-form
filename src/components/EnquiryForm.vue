<template>
  <AppForm
    @submit="submitForm"
    @errors="handleErrors"
    :validationSchema="validationSchema"
    :initialValues="initialValues"
  >
    <p class="required">All fields marked with * are required</p>
    <InputField
      type="text"
      name="email"
      label="Email Address"
      tip="We'll never share your email with anyone else"
      placeholder="example@email.com"
      :error="errors.email"
    />
    <InputField
      type="text"
      name="name"
      label="Full Name"
      placeholder="John Doe"
      :error="errors.name"
    />
    <TextAreaField
      type="text"
      name="message"
      label="Message"
      placeholder="Please enter your message"
      :error="errors.message"
    />
    <BaseButton type="submit">Submit</BaseButton>
  </AppForm>
</template>

<script>
import isEmpty from 'lodash.isempty';
import * as Yup from 'yup';

import AppForm from './form/AppForm';
import InputField from './form/InputField';
import TextAreaField from './form/TextAreaField';
import BaseButton from './ui/BaseButton';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Please enter your email address')
    .lowercase(),
  name: Yup.string().trim().required('Please enter your full name'),
  message: Yup.string().trim().required('Please enter your message'),
});

export default {
  components: {
    AppForm,
    InputField,
    TextAreaField,
    BaseButton,
  },
  data() {
    return {
      initialValues: {
        email: '',
        name: '',
        message: '',
      },
      validationSchema,
      errors: {},
    };
  },
  methods: {
    submitForm(values) {
      if (isEmpty(this.errors)) {
        console.log(values);
        // send data
      }
    },
    handleErrors(errors) {
      this.errors = { ...errors };
    },
  },
};
</script>
