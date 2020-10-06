<template>
  <button>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
button {
  font-family: inherit;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  min-width: 150px;
  color: #000;
}

/* span:after {
  content: '';
  display: inline-block;
  background-position: 0;
  background-repeat: no-repeat;
  background-image: url(../../assets/chevron-right.svg);
  width: 17px;
  height: 12px;
  margin-bottom: -2px;
} */
</style>src\
