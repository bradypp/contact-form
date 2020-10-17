<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <component
      :id="id"
      :is="fieldElement"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      v-on="$listeners"
    />
    <p v-if="tip" class="tip">{{ tip }}</p>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid';
// Add validations, error messages, required asterisk if required

export default {
  inject: ['errors'],
  props: {
    element: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return ['input', 'textarea', 'checkbox', 'radio'].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    tip: {
      type: String,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      fieldElement: `Base${this.element.charAt(0).toUpperCase() + this.element.slice(1)}`,
      id: uniqueId('form-field-'),
    };
  },
};
</script>
