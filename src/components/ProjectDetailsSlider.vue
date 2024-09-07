<!-- src/components/ProjectDetailsSlider.vue -->
<template>
  <div class="project-details-slider">
    <div class="slider-content">
      <h3>{{ projects[currentIndex].name }}</h3>
      <p><strong>내 역할:</strong> {{ projects[currentIndex].myRole }}</p>
      <p><strong>프로젝트 설명:</strong> {{ projects[currentIndex].description }}</p>
      <p><strong>주요 기여:</strong></p>
      <ul>
        <li v-for="(contribution, index) in projects[currentIndex].contributions" :key="index">
          {{ contribution }}
        </li>
      </ul>
      <p><strong>성과:</strong> {{ projects[currentIndex].achievement }}</p>
      <p><strong>사용 기술:</strong> {{ projects[currentIndex].technologies.join(', ') }}</p>
    </div>
    <div class="slider-controls">
      <button @click="prevProject" :disabled="currentIndex === 0">이전</button>
      <button @click="nextProject" :disabled="currentIndex === projects.length - 1">다음</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = [
  {
    name: "개발자를 위한 커뮤니티 dogfoot",
    myRole: "프로젝트 매니저 & 풀스택 개발자",
    description: "스프링 + JSP를 활용한 개발자 강의 추천 사이트",
    contributions: [
      "프로젝트 기획 및 팀 리딩",
      "전체 자바스크립트 로직 구현",
      "인기 게시판 백엔드 및 프론트엔드 개발",
      "사용자 경험 최적화를 위한 UI/UX 개선"
    ],
    achievement: "사용자 참여도 30% 증가, 페이지 로딩 시간 40% 단축",
    technologies: ["Spring", "JSP", "JavaScript", "MySQL"]
  },
  {
    name: "형상 관리를 쉽게 웹에서 해보자",
    myRole: "프로젝트 매니저 & 프론트엔드 리드 개발자",
    description: "형상관리 + 팀 프로젝트 + OpenAI를 이용한 코드비교 웹 사이트",
    contributions: [
      "프로젝트 아키텍처 설계",
      "프론트엔드 전체 개발 및 코드 리뷰 진행",
      "OpenAI API 연동 및 코드 비교 기능 구현",
      "Docker를 활용한 개발 환경 표준화",
      "AWS EC2를 통한 배포 자동화 구축"
    ],
    achievement: "코드 리뷰 시간 50% 단축, 팀 생산성 35% 향상",
    technologies: ["React", "Node.js", "Docker", "AWS EC2", "OpenAI API"]
  },
  {
    name: "Pirates 팀 프로젝트",
    myRole: "형상관리 담당 & 메인 페이지 개발자",
    description: "팀 프로젝트 관리 및 협업 도구",
    contributions: [
      "Git 기반 형상관리 전략 수립 및 실행",
      "브랜치 전략 및 코드 리뷰 프로세스 확립",
      "메인 페이지 UI/UX 디자인 및 개발",
      "실시간 협업 기능 구현"
    ],
    achievement: "팀 내 코드 충돌 80% 감소, 프로젝트 완료 기간 20% 단축",
    technologies: ["Git", "React", "Node.js", "MongoDB"]
  }
];

const currentIndex = ref(0);

const nextProject = () => {
  if (currentIndex.value < projects.length - 1) {
    currentIndex.value++;
  }
};

const prevProject = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style scoped>
.project-details-slider {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.slider-content {
  margin-bottom: 20px;
}

h3 {
  color: #3498db;
  margin-bottom: 10px;
}

p {
  margin-bottom: 8px;
}

ul {
  margin-bottom: 8px;
  padding-left: 20px;
}

li {
  margin-bottom: 4px;
}

.slider-controls {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>