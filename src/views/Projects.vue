<template>
  <div class="projects full-height">
    <h2>대표 프로젝트들</h2>
    <div class="project-gallery">
      <div v-for="project in projects" :key="project.id" class="project-item"  @click="openLink(project.link)">
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
import {ref} from 'vue'

const projects = ref([
  {
    id: 1,
    name: "개발자를 위한 커뮤니티 dogfoot",
    description: "스프링 + jsp 를 활용한 개발자 강의추천사이트 ",
    image: new URL('../assets/project1.png', import.meta.url).href,
    link: "https://github.com/dongkyukim1/dogFoot"
  },
  {
    id: 2,
    name: "프로젝트 2",
    description: "프로젝트 2에 대한 간단한 설명",
    image: new URL('../assets/project2.jpg', import.meta.url).href,
    link: "#"
  },
  // 추가 프로젝트...
])

const openLink = (url) => {
  window.open(url, '_blank');
}

</script>

<style scoped>
.full-height {
  height: 100%;
  overflow-y: auto;
  padding: 2rem;
}

.project-gallery {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* 커서를 포인터로 변경 */
}

.project-item img {
  width: 100%;
  height: auto;
  display: block;
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
  transform: scale(1.05);
}

.project-item:hover .project-overlay {
  transform: translateY(0);
}

h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
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

@media (max-width: 768px) {
  .project-gallery {
    max-width: 100%;
  }
}
</style>