<template>
  <form class="form" @submit="submit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide() {
    return {
      validate: this.validate,
      errors: this.errors,
    };
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    validation: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      errors: {},
    };
  },
  computed: {
    hasError() {
      return this.errors.values;
    },
  },
  methods: {
    validate() {
      // validate
    },
    submit() {
      // this.validate
      // this.onSubmit
    },
  },
};
</script>
