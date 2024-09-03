<template>
  <div class="profile-container">
    <header class="profile-header">
      <img src="@/assets/profile-picture.jpg" alt="김동규 프로필" class="profile-image" />

      <div class="profile-links">
        <a :href="gitLink" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="2x" class="profile-link-icon" />
        </a>
        <a :href="blogLink" target="_blank">
          <font-awesome-icon icon="fa-solid fa-rss" size="2x" class="profile-link-icon" />
        </a>
      </div>

      <div class="profile-info">
        <h1>김동규</h1>
        <p class="tagline">조금씩 이라도 매일 배우자</p>
        <p class="hashtags">#성장 #협동 #기초 #커뮤니케이션</p>
      </div>
    </header>

    <main class="profile-content">
      <section class="highlights">
        <h2>핵심 역량</h2>
        <div class="highlights-grid">
          <div v-for="highlight in highlights" :key="highlight.id" class="highlight-item hover-effect">
            <font-awesome-icon :icon="highlight.icon" size="2x" />
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </section>

      <section class="experience-education">
        <div class="experience">
          <h2>경력</h2>
          <ul>
            <li v-for="job in experience" :key="job.id" class="hover-effect">
              <strong>{{ job.title }}</strong>
              <span>{{ job.period }}</span>
            </li>
          </ul>
        </div>
        <div class="education">
          <h2>학력 및 자격</h2>
          <ul>
            <li v-for="edu in education" :key="edu.id" class="hover-effect">
              <strong>{{ edu.title }}</strong>
              <span>{{ edu.period }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="skills">
        <h2>보유 기술</h2>
        <div class="skill-categories">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category">
            <h3>{{ category.name }}</h3>
            <div class="skill-items">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item hover-effect">
                <img :src="getSkillIcon(skill.name)" :alt="skill.name" />
                <span>{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faGlobe, faGraduationCap, faRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FontAwesome 아이콘 라이브러리 설정
library.add(faUsers, faGlobe, faGraduationCap, faGithub, faRss)

const gitLink = 'https://github.com/yourusername/your-repository' // GitHub 특정 레포지토리 링크
const blogLink = 'https://yourblog.com' // 블로그 링크

const experience = ref([
  { id: 1, title: '태흥 엔지니어링 해외 출장 담당자  ', period: '2022.12 ~ 2023.06' },
  { id: 2, title: '한정판 브랜드 스마트스토어 운영  ', period: '2017.03 ~ 2022.12' },
  { id: 3, title: '초4~고3 영어강사  ', period: '2016.06 ~ 2017.02' },
])

const education = ref([
  { id: 1, title: 'University of Mississippi 경영학과 이수  ', period: '2016.07' },
  { id: 2, title: '건국대학교 영어학과 : 경영학과 졸업  ', period: '2017.04' },
  { id: 3, title: '소프트웨어인재 개발원 개발자 과정 이수  ', period: '2024.03 ~ 2024.08' },
  { id: 4, title: '정보처리기사 필기 획득  ', period: '2024.05' },
  { id: 5, title: 'SQLD 취득  ', period: '2024.06' },
])

const highlights = ref([
  { id: 1, icon: 'users', title: '프로젝트 리더십', description: '3번의 프로젝트 조장 경험' },
  { id: 2, icon: 'globe', title: '글로벌 역량', description: '해외 교환학생 및 출장 경험' },
  { id: 3, icon: 'graduation-cap', title: '지속적 성장', description: '최근 자격증 취득 및 교육 이수' },
])

const skillCategories = ref([
  {
    name: '언어',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'JavaScript' },
    ]
  },
  {
    name: '프레임워크 & 라이브러리',
    skills: [
      {name: 'Spring'},
      {name: 'Spring Boot'},
      {name: 'React'},
      {name: 'Vue.js'},
      {name: 'jQuery'},
    ]
  },
  {
    name: '웹 기술',
    skills: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Thymeleaf'},
      {name: 'JSP'},
      {name: 'BootStrap'}
    ]
  },
  {
    name: 'DB',
    skills: [
      {name: 'Oracle'},
      {name: 'MySQL'},
      {name: 'MongoDB'},
    ]
  },
  {
    name: '협업 도구',
    skills: [
      {name: 'Git'},
      {name: 'Notion'},
    ]
  },
  {
    name: '배포 & 서버',
    skills: [
      {name: 'Docker'},
      {name: 'Kubernetes'},
      {name: 'AWS'},
      {name: 'node.js'},
      {name: 'Tomcat'}
    ]
  }
])

const getSkillIcon = (skillName) => {
  const specialCases = {
    'Node.js': 'nodejs',
    'Vue': 'vuejs',
    'jQuery': 'jquery',
    'BootStrap': 'bootstrap',
  };
  const formattedName = specialCases[skillName] || skillName.toLowerCase().replace(/\s+/g, '-');
  try {
    return new URL(`../components/icons/${formattedName}.svg`, import.meta.url).href;
  } catch (error) {
    console.warn(`Icon not found for ${skillName}. Using default icon.`);
    return new URL('../components/icons/default.svg', import.meta.url).href;
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Jua', sans-serif;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
}

.profile-info h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.2rem;
  color: #3498db;
  margin-bottom: 0.5rem;
}

.hashtags {
  color: #7f8c8d;
}

.profile-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.3rem;
  color: #34495e;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.highlight-item {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.experience-education {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.skill-item img {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .profile-image {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .highlights-grid,
  .experience-education,
  .skill-categories {
    grid-template-columns: 1fr;
  }
}
</style>
