<template>
  <FieldWrapper :label="label" :tip="tip" :error="error" v-slot="slotProps">
    <textarea
      :id="slotProps.id"
      :class="{ error: error }"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="values[name]"
      @input="updateValues($event.target.value, name)"
      @blur="validate(name)"
    />
  </FieldWrapper>
</template>

<script>
import FieldWrapper from './FieldWrapper';

export default {
  inject: ['values', 'validate', 'updateValues'],
  components: {
    FieldWrapper,
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
};
</script>
