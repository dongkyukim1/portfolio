<template>
  <div class="projects full-height">
    <h2>프로젝트 갤러리</h2>
    <div class="project-gallery">
      <div v-for="project in projects" :key="project.id" class="project-item">
        <img :src="project.image" :alt="project.name" />
        <div class="project-overlay">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: "프로젝트 1",
    description: "프로젝트 1에 대한 간단한 설명",
    image: new URL('../assets/project1.jpg', import.meta.url).href
  },
  {
    id: 2,
    name: "프로젝트 2",
    description: "프로젝트 2에 대한 간단한 설명",
    image: new URL('../assets/project2.jpg', import.meta.url).href
  },
  // 추가 프로젝트...
])
</script>

<style scoped>

.full-height {
  height: 100%;
  overflow-y: auto;
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.project-item img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.project-item:hover img {
  transform: scale(1.1);
}

.project-item:hover .project-overlay {
  transform: translateY(0);
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1rem;
}
</style>