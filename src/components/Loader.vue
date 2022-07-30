<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: string
  background?: string
  duration?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '40px',
  background: '#41b883',
  duration: '1.2s',
})

const styles = computed(() => ({
  width: props.size,
  height: props.size,
}))

const rectStyles = computed(() => ({
  backgroundColor: props.background,
  animationDuration: props.duration,
}))
</script>

<template>
  <div :style="styles" class="spinner spinner--stretch">
    <div :style="rectStyles" class="rect rect-1"></div>
    <div :style="rectStyles" class="rect rect-2"></div>
    <div :style="rectStyles" class="rect rect-3"></div>
    <div :style="rectStyles" class="rect rect-4"></div>
    <div :style="rectStyles" class="rect rect-5"></div>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  text-align: center;
  font-size: 10px;
}

.spinner * {
  line-height: 0;
  box-sizing: border-box;
}

.rect {
  margin-left: 2px;
  margin-right: 2px;
  animation: sketch 1.2s ease-in-out infinite;
}
.spinner > div {
  height: 100%;
  width: 10%;
  display: inline-block;
}
.spinner .rect-2 {
  animation-delay: -1.1s;
}
.spinner .rect-3 {
  animation-delay: -1s;
}
.spinner .rect-4 {
  animation-delay: -0.9s;
}
.spinner .rect-5 {
  animation-delay: -0.8s;
}
@keyframes sketch {
  0%,
  40%,
  100% {
    transform: scaleY(0.3);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
