<template>
  <div id="app">
    <h2>Get In Touch</h2>
    <Options :selectedForm="selectedForm" @updateTab="updateTab" />
    <keep-alive>
      <component :is="selectedForm"/>
    </keep-alive>
  </div>
</template>

<script>
import Options from '@/components/Options';
import EnquiryForm from '@/components/EnquiryForm';
import ReturnsForm from '@/components/ReturnsForm';
import DeliveryForm from '@/components/DeliveryForm';
import '@/styles/global.scss'

export default {
  components: {
    EnquiryForm,
    ReturnsForm,
    DeliveryForm,
    Options,
  },
  data() {
    return {
      selectedForm: 'EnquiryForm',
    };
  },
  methods: {
    updateTab(selectedForm) {
      this.selectedForm = selectedForm;
      console.log(this.selectedForm);
    },
  },
};
</script>
