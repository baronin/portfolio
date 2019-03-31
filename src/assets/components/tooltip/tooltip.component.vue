<template>
    <span class="tooltip">
        <span class="tooltip-toggle" v-on:mouseenter="open" v-on:mouseleave="close">
            <slot name="tooltip-toggle"></slot>
        </span>
        <span class="tooltip-content" v-if="isVisible">
            <slot name="tooltip-content"></slot>
        </span>
    </span>
</template>

<script>
import './tooltip.component.scss';
import openCloseMixin from '../../mixins/open-close.mixin';

export default {
  name: 'tooltip',
  mixins: [openCloseMixin],
};
</script>

<style lang="scss">
  @import "../../scss/variables";

  $tootlip-shadow: $variable;

  .tooltip {
    position: relative;
  }

  .tooltip-content {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px;
    box-shadow: 0 1px 8px 0 $tootlip-shadow;
    background: #fff;
    border-radius: 5px;
    width: 150px;
    margin-left: 10px;
  }
</style>
