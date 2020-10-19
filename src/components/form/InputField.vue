<template>
  <FieldWrapper v-bind="$attrs" v-slot="slotProps">
    <input
      :id="slotProps.id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-on="$listeners"
      @input="$emit('input', $event.target.value)"
    />
  </FieldWrapper>
</template>

<script>
import FieldWrapper from './FieldWrapper';

export default {
  components: {
    FieldWrapper,
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>
