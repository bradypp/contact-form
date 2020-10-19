<template>
  <form class="form" @submit="submitForm">
    <h3>Where did you make your purchase?</h3>
    <div class="options">
      <label class="option" :class="onlineClass" for="online">
        <input id="online" value="online" type="radio" v-model="purchaseLocation" />
        Online</label
      >
      <label class="option" :class="retailClass" for="retail">
        <input id="retail" value="retail" type="radio" v-model="purchaseLocation" />
        Retail</label
      >
    </div>
    <div v-if="purchaseLocation">
      <h3>Is the product faulty?</h3>
      <div class="options">
        <label class="option" :class="faultyYesClass" for="faulty-yes">
          <input id="faulty-yes" value="faulty-yes" type="radio" v-model="isFaulty" />
          Yes</label
        >
        <label class="option" :class="faultyNoClass" for="faulty-no">
          <input id="faulty-no" value="faulty-no" type="radio" v-model="isFaulty" />
          No</label
        >
      </div>
    </div>

    <div v-if="purchaseLocation && isFaulty === 'faulty-yes'">
      <p class="required">All fields marked with * are required</p>
      <div class="field">
        <label for="email">Email Address*</label>
        <input
          id="email"
          type="text"
          name="email"
          required
          v-model.trim="email"
          placeholder="example@email.com"
        />
        <p class="tip">We'll never share your email with anyone else</p>
      </div>
      <div class="field">
        <label for="full-name">Full Name*</label>
        <input
          id="full-name"
          type="text"
          name="full-name"
          required
          v-model.trim="fullName"
          placeholder="John Doe"
        />
      </div>
      <div class="field">
        <label for="post-code">Postcode*</label>
        <input
          id="post-code"
          type="text"
          name="post-code"
          required
          v-model.trim="postCode"
          placeholder="Postcode"
        />
      </div>
      <div class="field" v-if="purchaseLocation === 'online'">
        <label for="order-number">Order Number*</label>
        <input
          id="order-number"
          type="text"
          name="order-number"
          required
          placeholder="21686939"
          v-model.trim="orderNumber"
        />
        <p class="tip">Order Number can be found on your order confirmation/invoice</p>
      </div>
      <div class="field">
        <label for="product-sku">Product SKU*</label>
        <input
          id="product-sku"
          type="text"
          name="product-sku"
          required
          v-model.trim="productSKU"
          placeholder="Please enter your produce SKU"
        />
        <p class="tip">Product SKU can be found on your receipt or product label</p>
      </div>
      <div v-if="purchaseLocation === 'retail'">
        <div class="field">
          <label for="location">Place of purchase*</label>
          <input
            id="location"
            type="text"
            name="location"
            required
            placeholder="Store location"
            v-model.trim="storeLocation"
          />
        </div>
        <div class="field">
          <label for="date-of-purchase">Date of purchase*</label>
          <input
            id="date-of-purchase"
            type="date"
            name="date-of-purchase"
            required
            placeholder="Store location"
            v-model="dateOfPurchase"
          />
        </div>
      </div>
      <div class="field" placeholder="Please enter your message">
        <label for="message">Details of fault*</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Please enter more details about the fault"
          v-model.trim="message"
        />
      </div>
      <BaseButton type="submit">Submit</BaseButton>
    </div>
    <div v-else-if="purchaseLocation && isFaulty === 'faulty-no'">
      <a
        class="returns-link"
        target="_blank"
        href="https://www.regatta.com/delivery-and-returns/#returns"
        >For more details about our returns please our visit our returns page
      </a>
    </div>
  </form>
</template>

<script>
import BaseButton from './ui/BaseButton';

export default {
  components: { BaseButton },
  data() {
    return {
      purchaseLocation: '',
      isFaulty: '',
      email: '',
      fullName: '',
      postCode: '',
      orderNumber: '',
      productSKU: '',
      message: '',
      storeLocation: '',
      dateOfPurchase: '',
    };
  },
  computed: {
    onlineClass() {
      return this.purchaseLocation === 'online' && 'option--active';
    },
    retailClass() {
      return this.purchaseLocation === 'retail' && 'option--active';
    },
    faultyYesClass() {
      return this.isFaulty === 'faulty-yes' && 'option--active';
    },
    faultyNoClass() {
      return this.isFaulty === 'faulty-no' && 'option--active';
    },
  },
  methods: {
    submitForm() {
      // TODO: send data
      console.log(typeof this.dateOfPurchase);
    },
  },
};
</script>
