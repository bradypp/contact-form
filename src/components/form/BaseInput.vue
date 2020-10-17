<template>
  <input
    :id="id"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @blur="validate"
    @keypress="validate"
  />
</template>

<script>
export default {
  inject: ['validate'],
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
