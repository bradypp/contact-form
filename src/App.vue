<template>
  <div id="app">
    <Options :selectedTab="selectedTab" @updateTab="updateTab"/>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Options from '@/components/Options';
import EnquiryForm from '@/components/EnquiryForm';
import ReturnsForm from '@/components/ReturnsForm';
import DeliveryForm from '@/components/DeliveryForm';

export default {
  components: {
    EnquiryForm,
    ReturnsForm,
    DeliveryForm,
    Options,
  },
  data() {
    return {
      selectedTab: 'EnquiryForm',
    };
  },
  methods: {
    updateTab(selectedTab) {
      this.selectedTab = selectedTab;
      console.log(this.selectedTab);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 600px;
  padding: 1rem;
}

label,
input,
textarea {
  display: block;
}
</style>
