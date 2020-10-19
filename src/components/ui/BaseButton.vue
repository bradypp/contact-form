<template>
  <button v-on="$listeners">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<style scoped lang="scss">
button {
  font-family: inherit;
  font-weight: 400;
  color: var(--grey-dark);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: var(--green);
  border: 1px solid transparent;
  padding: 0 0.65rem;
  height: 52px;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  min-width: 150px;
  transition: 0.25s all ease;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font: 400 1rem Lato !important;

    &:after {
      content: '';
      display: inline-block;
      background-position: 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(../../assets/chevron-right.svg);
      width: 20px;
      height: 20px;
      margin-bottom: -2px;
      filter: invert(1);
    }
  }

  &:hover {
    background: var(--green-light);
  }
}
</style>
