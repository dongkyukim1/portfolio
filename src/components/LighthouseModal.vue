<!-- src/components/LighthouseModal.vue -->
<template>
  <div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Lighthouse 성능 개선 상세</h2>
      <LighthouseReportImages />
      <div class="improvement-details">
        <h3>주요 개선 사항</h3>
        <ul>
          <li>이미지 최적화로 로딩 시간 50% 감소</li>
          <li>JavaScript 코드 분할로 초기 로딩 크기 30% 감소</li>
          <li>효율적인 캐싱 전략으로 반복 방문 시 로딩 시간 70% 감소</li>
          <li>불필요한 CSS 제거로 렌더링 속도 20% 향상</li>
        </ul>
      </div>
      <button @click="closeModal" class="close-button">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import LighthouseReportImages from './LighthouseReportImages.vue';

const props = defineProps(['isOpen']);
const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.improvement-details {
  margin-top: 1rem;
}

.improvement-details ul {
  padding-left: 1rem;
}

.close-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>