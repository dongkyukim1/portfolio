<!-- src/components/LighthouseReportImages.vue -->
<template>
  <div class="lighthouse-report-container">
    <div class="image-container">
      <img :src="currentImage" alt="Lighthouse Report" class="lighthouse-image" />
    </div>
    <div class="controls">
      <button @click="showBefore" :class="{ active: showingBefore }">최적화 전</button>
      <button @click="showAfter" :class="{ active: !showingBefore }">최적화 후</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showingBefore = ref(true);

const beforeImage = '/before-optimization.png'; // 최적화 전 이미지 경로
const afterImage = '/after-optimization.png';  // 최적화 후 이미지 경로

const currentImage = computed(() => showingBefore.value ? beforeImage : afterImage);

const showBefore = () => showingBefore.value = true;
const showAfter = () => showingBefore.value = false;
</script>

<style scoped>
.lighthouse-report-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.image-container {
  width: 100%;
  margin-bottom: 1rem;
}

.lighthouse-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.active {
  background-color: #4caf50;
  color: white;
}

button:hover {
  background-color: #d0d0d0;
}

button.active:hover {
  background-color: #45a049;
}
</style>