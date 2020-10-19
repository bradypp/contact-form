<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <slot :id="id"></slot>
    <p v-if="tip" class="tip">{{ tip }}</p>
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
  },
  data() {
    return {
      id: uniqueId('form-field-'),
    };
  },
};
</script>
