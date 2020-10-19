<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <slot :id="id"></slot>
    <p v-if="tip && !error" class="tip">{{ tip }}</p>
    <p v-else-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid';

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    tip: {
      type: String,
    },
    error: {
      type: String,
    },
  },
  data() {
    return {
      id: uniqueId('form-field-'),
    };
  },
};
</script>
