<!-- Projects.vue -->
<template>
  <div class="projects full-height" id="projects">
    <h2>프로젝트 목록</h2>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-item" @click="openLink(project.link)">
        <img :src="project.image" :alt="project.name" />
        <div v-if="project.id === 2" class="project-highlight">
          <font-awesome-icon icon="star" class="star-icon" />
          <span>최신 & 대표 프로젝트</span>
        </div>
        <div class="project-overlay">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

    <div class="project-highlights">
      <h2>프로젝트 주요 역할</h2>
      <div class="highlights-grid">
        <div v-for="highlight in highlights" :key="highlight.id" class="highlight-item">
          <font-awesome-icon :icon="highlight.icon" class="highlight-icon" />
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </div>
      </div>
    </div>

    <div class="project-details">
      <h2>프로젝트 상세</h2>
      <div class="details-grid">
        <div v-for="project in projects" :key="project.id" class="detail-item">
          <font-awesome-icon :icon="project.icon" class="detail-icon" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.keyAchievement }}</p>
        </div>
      </div>
    </div>

    <div class="additional-content">
      <h2>프로페셔널 목표</h2>
      <div class="professional-goals">
        <div class="goal-item">
          <h3>단기 목표</h3>
          <ul>
            <li>현재 기술 스택 (Java, Spring, JavaScript) 심화 학습</li>
            <li>프론트엔드 프레임워크 (React, Vue.js) 전문성 강화</li>
            <li>클라우드 기술 (AWS, Docker) 실무 적용 능력 향상</li>
          </ul>
        </div>
        <div class="goal-item">
          <h3>중기 목표</h3>
          <ul>
            <li>풀스택 개발자로서의 역량 강화</li>
            <li>대규모 프로젝트 설계 및 아키텍처 구축 능력 개발</li>
            <li>팀 리더십 스킬 향상 및 주니어 개발자 멘토링</li>
          </ul>
        </div>
        <div class="goal-item">
          <h3>장기 목표</h3>
          <ul>
            <li>기술 리더 또는 아키텍트로 성장</li>
            <li>오픈 소스 프로젝트 기여 및 커뮤니티 리더십 발휘</li>
            <li>소프트웨어 개발 방법론 혁신 및 업계 트렌드 선도</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCode, faServer, faDatabase, faStar, faCodeBranch, faShip, faCoffee, faRobot } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faCode, faServer, faDatabase, faStar, faCodeBranch, faShip, faCoffee, faRobot)

const projects = ref([
  {
    id: 1,
    name: "개발자를 위한 커뮤니티 dogfoot(4인 : PM)",
    description: "스프링 + jsp 를 활용한 개발자 강의추천사이트",
    image: new URL('../assets/project1.png', import.meta.url).href,
    link: "https://github.com/dongkyukim1/dogFoot",
    keyAchievement: "전체 자바스크립트 구현 및 인기 게시판 풀스택 개발",
    icon: "users"
  },
  {
    id: 2,
    name: "형상 관리를 쉽게 웹에서 해보자(5인 : PM)",
    description: "형상관리 + 팀 프로젝트 + open ai를 이용한 코드비교 웹 사이트",
    image: new URL('../assets/project2.gif', import.meta.url).href,
    link: "https://github.com/dongkyukim1/devhub-server/tree/main?tab=readme-ov-file",
    keyAchievement: "프론트엔드 전체 개발 및 Docker, AWS EC2 배포",
    icon: "code-branch"
  },
  {
    id: 3,
    name: "Pirates 팀 프로젝트",
    description: "팀 프로젝트 관리 및 협업 도구",
    image: new URL('../assets/project5.png', import.meta.url).href,
    link: "https://github.com/romantic-pirates/pirates_server",
    keyAchievement: "프로젝트 형상관리 100% 담당 및 메인 페이지 개발",
    icon: "ship"
  },
  {
    id: 4,
    name: "스타벅스 키오스크(3인 : PM)",
    description: "자바 스윙과 오라클을 활용한 스타벅스 키오스크 프로젝트",
    image: new URL('../assets/project3.png', import.meta.url).href,
    link: "https://github.com/dongkyukim1/Java_Swing",
    keyAchievement: "Java Swing UI 구현 및 Oracle DB 연동 ",
    icon: "coffee"
  },
  {
    id: 5,
    name: "RPA 미니 프로젝트",
    description: "자동 검색, 인기 차트, 엑셀 정리 기능의 RPA 프로젝트",
    image: new URL('../assets/project4.png', import.meta.url).href,
    link: "https://github.com/dongkyukim1/RPA_Automation",
    keyAchievement: "자동화 기능 구현 및 SQLite DB 활용 (솔로 프로젝트)",
    icon: "robot"
  }
])

const highlights = ref([
  { id: 1, icon: 'users', title: '프로젝트 관리', description: '3번의 그룹 프로젝트 PM 역할' },
  { id: 2, icon: 'code', title: '프론트엔드 개발', description: '전체 자바스크립트 구현' },
  { id: 3, icon: 'server', title: '백엔드 개발', description: 'Spring & Spring Boot 활용' },
  { id: 4, icon: 'database', title: 'DB 관리', description: '게시판 DB 설계 및 구현' }
])

const openLink = (url) => {
  window.open(url, '_blank');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.full-height {
  font-family: 'Jua', sans-serif;
  padding: 1rem;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.project-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  min-height: 200px;
}

.project-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.project-item:hover .project-overlay {
  transform: translateY(0);
}

.project-item:hover img {
  transform: scale(1.05);
}

.project-overlay h3 {
  color: #3498db;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project-overlay p {
  color: #ecf0f1;
  font-size: 1rem;
}

.project-highlight {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 215, 0, 0.9);
  color: #000;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  z-index: 10;
}

.star-icon {
  margin-right: 5px;
  color: #FFD700;
}

.highlights-grid, .details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.highlight-item, .detail-item {
  background-color: #ffffff;
  padding: 0.75rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.highlight-item:hover, .detail-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.highlight-icon, .detail-icon {
  font-size: 1.75rem;
  color: #3498db;
  margin-bottom: 0.5rem;
}

.project-details, .additional-content {
  margin-top: 2rem;
}

h2 {
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 1.25rem;
  text-align: center;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #3498db;
  font-weight: bold;
}

p {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #34495e;
  line-height: 1.4;
}

.professional-goals {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.goal-item {
  background-color: #ffffff;
  padding: 1.25rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.goal-item h3 {
  color: #3498db;
  margin-bottom: 0.75rem;
}

.goal-item ul {
  padding-left: 1.5rem;
}

.goal-item li {
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  color: #34495e;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .full-height {
    padding: 1rem 0.5rem;
  }

  .project-grid,
  .highlights-grid,
  .details-grid,
  .professional-goals {
    grid-template-columns: 1fr;
  }

  .project-item {
    min-height: 150px;
  }

  .project-overlay h3 {
    font-size: 1.1rem;
  }

  .project-overlay p {
    font-size: 0.9rem;
  }

  .project-highlight {
    font-size: 0.7rem;
  }

  .highlight-item,
  .detail-item {
    padding: 0.5rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p, .goal-item li {
    font-size: 0.9rem;
  }
}
</style>