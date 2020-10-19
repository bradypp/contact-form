<template>
  <form class="form" @submit.prevent="submitForm">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      values: this.values,
      updateValues: this.updateValues,
      validate: this.validate,
    };
  },
  props: {
    initialValues: {
      type: Object,
      required: true,
    },
    validationSchema: {
      type: Object,
    },
  },
  data() {
    return {
      values: { ...this.initialValues },
      errors: {},
    };
  },
  methods: {
    submitForm: async function () {
      // Validate Form
      if (this.validationSchema) {
        try {
          await this.validationSchema.validate(this.values, { abortEarly: false });
          this.errors = {};
        } catch (error) {
          error.inner.forEach(error => {
            if (error.name === 'ValidationError') {
              this.errors[error.path] = error.message;
            }
          });
        }
      }
      this.$emit('errors', this.errors);
      this.$emit('submit', this.values);
    },
    validate: async function (name) {
      try {
        await this.validationSchema.validateAt(name, this.values);
        delete this.errors[name];
      } catch (error) {
        if (error.name === 'ValidationError') {
          this.errors[name] = error.message;
        }
      }
      this.$emit('errors', this.errors);
    },
    updateValues(value, name) {
      if (name in this.initialValues) {
        this.values[name] = value;
      } else {
        console.error(`Field with name:'${name}' is not in the initial values for this form`);
      }
    },
  },
};
</script>
