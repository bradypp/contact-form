<template>
  <div class="options">
    <div class="option">
      <input
        id="enquiry-tab"
        value="EnquiryForm"
        type="radio"
        v-model="localSelectedTab"
        @change="onTabClick"
      />
      <label for="enquiry-tab">Enquiry</label>
    </div>
    <div class="option">
      <input
        id="returns-tab"
        value="ReturnsForm"
        type="radio"
        v-model="localSelectedTab"
        @change="onTabClick"
      />
      <label for="returns-tab">Returns</label>
    </div>
    <div class="option">
      <input
        id="delivery-tab"
        value="DeliveryForm"
        type="radio"
        v-model="localSelectedTab"
        @change="onTabClick"
      />
      <label for="delivery-tab">Delivery</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localSelectedTab: this.selectedTab,
    };
  },
  props: {
    selectedTab: {
      type: String,
      required: true,
      validator: function (value) {
        // The value must match one of these strings
        return ['DeliveryForm', 'EnquiryForm', 'ReturnsForm'].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    onTabClick(e) {
      this.$emit('updateTab', e.target.value);
    },
  },
};
</script>

<style scoped>
input[type='radio'] {
  display: none;
}
</style>
