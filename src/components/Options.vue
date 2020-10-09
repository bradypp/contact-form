<template>
  <div class="options">
    <label class="option" :class="enquiryClass" for="enquiry-tab">
      <input
        id="enquiry-tab"
        value="EnquiryForm"
        type="radio"
        v-model="localSelectedForm"
        @change="onTabClick"
      />
      Enquiry</label
    >
    <label class="option" :class="returnsClass" for="returns-tab">
      <input
        id="returns-tab"
        value="ReturnsForm"
        type="radio"
        v-model="localSelectedForm"
        @change="onTabClick"
      />
      Returns</label
    >
    <label class="option" :class="deliveryClass" for="delivery-tab">
      <input
        id="delivery-tab"
        value="DeliveryForm"
        type="radio"
        v-model="localSelectedForm"
        @change="onTabClick"
      />
      Delivery</label
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      localSelectedForm: this.selectedForm,
    };
  },
  props: {
    selectedForm: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return ['DeliveryForm', 'EnquiryForm', 'ReturnsForm'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    deliveryClass() {
      return this.selectedForm === 'DeliveryForm' && 'option--active';
    },
    enquiryClass() {
      return this.selectedForm === 'EnquiryForm' && 'option--active';
    },
    returnsClass() {
      return this.selectedForm === 'ReturnsForm' && 'option--active';
    },
  },
  methods: {
    onTabClick(e) {
      this.$emit('updateTab', e.target.value);
    },
  },
};
</script>
