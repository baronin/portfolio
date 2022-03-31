<template>
  <span class="tooltip">
    <span class="tooltip-toggle" @mouseenter="open" @mouseleave="close">
      <slot name="tooltip-toggle"></slot>
    </span>
    <span v-if="isVisible" class="tooltip-content">
      <slot name="tooltip-content"></slot>
    </span>
  </span>
</template>

<script>
// import './tooltip.component.scss';
import openCloseMixin from '../../assets/mixins/open-close.mixin';

export default {
  name: 'TheTooltip',
  mixins: [openCloseMixin],
};
</script>

<style lang="scss">
@import '../../assets/scss/variables';

$tooltip-shadow: $variable;

.tooltip {
  position: relative;
}

.tooltip-content {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px;
  box-shadow: 0 1px 8px 0 $tooltip-shadow;
  background: #fff;
  border-radius: 5px;
  width: 150px;
  margin-left: 10px;
}
</style>
