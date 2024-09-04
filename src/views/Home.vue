<!-- Home.vue -->
<template>
  <div class="profile-container">
    <header class="profile-header" ref="profileSection">
      <div class="profile-image-container">
        <img src="@/assets/profile-picture.jpg" alt="김동규 프로필" class="profile-image" />
      </div>
      <div class="profile-info">
        <h1>김동규 <span class="job-title">웹 개발자</span></h1>
        <p class="tagline">조금씩 이라도 매일 배우자</p>
        <p class="hashtags">#성장 #협동 #기초 #커뮤니케이션</p>
        <div class="profile-links">
          <a :href="gitLink" target="_blank" class="profile-link">
            <font-awesome-icon :icon="['fab', 'github']" size="lg" class="profile-link-icon" />
            <span class="link-text">GitHub</span>
          </a>
          <a :href="blogLink" target="_blank" class="profile-link">
            <font-awesome-icon icon="rss" size="lg" class="profile-link-icon" />
            <span class="link-text">Blog</span>
          </a>
          <a :href="resumeLink" target="_blank" class="profile-link">
            <font-awesome-icon icon="file-pdf" size="lg" class="profile-link-icon" />
            <span class="link-text">이력서</span>
          </a>
        </div>
        <div class="contact-info">
          <a :href="'tel:' + phoneNumber" class="contact-link">
            <font-awesome-icon icon="phone" /> 010 4048 8292
          </a>
          <a :href="'mailto:' + email" class="contact-link">
            <font-awesome-icon icon="envelope" /> wlsntus55@gmail.com
          </a>
        </div>
      </div>
    </header>

    <main class="profile-content">
      <section class="highlights" ref="highlightsSection">
        <h2>핵심 역량</h2>
        <div class="highlights-grid">
          <div v-for="highlight in highlights" :key="highlight.id" class="highlight-item hover-effect">
            <font-awesome-icon :icon="highlight.icon" size="2x" />
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </section>

      <section class="experience-education"  ref="experienceSection">
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

      <section class="skills" ref="skillsSection">
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
import { faUsers, faGlobe, faGraduationCap, faRss, faPhone, faEnvelope, faFilePdf, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FontAwesome 아이콘 라이브러리 설정
library.add(faUsers, faGlobe, faGraduationCap, faGithub, faRss, faPhone, faEnvelope, faFilePdf, faProjectDiagram)

const gitLink = 'https://github.com/dongkyukim1'
const blogLink = 'https://begin-developer.tistory.com/'
const resumeLink = '/resume/resume.pdf';
const email = 'wlsntus55@gmail.com'

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
  { id: 2, icon: 'globe', title: '글로벌 역량', description: '해외 교환학생 & 미국 출장관리자 ' },
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
      {name: 'SpringBoot'},
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
      {name: 'Node.js'},
      {name: 'Tomcat'}
    ]
  }
])

const getSkillIcon = (skillName) => {
  const specialCases = {
    'Node.js': 'node.js',
    'Vue.js': 'vue.js',
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

const projectsSection = ref(null)

const scrollToProjects = () => {
  projectsSection.value.$el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.profile-container {
  width: 100%;
  max-width: 900px; /* 최대 너비를 줄여 여유 공간 확보 */
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Jua', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  overflow-y: auto;
  height: auto;
}

.profile-header {
  display: flex;
  align-items: flex-start; /* 상단 정렬로 변경 */
  margin-bottom: 3rem; /* 여백 증가 */
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-image-container {
  flex-shrink: 0;
  margin-right: 2rem;
}

.profile-image {
  width: 180px; /* 이미지 크기 약간 감소 */
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #40adfb;
}

.profile-info {
  flex-grow: 1;
}

.profile-info h1 {
  font-size: 2.3rem; /* 폰트 크기 약간 감소 */
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.job-title {
  font-size: 1.3rem;
  color: #40adfb;
  margin-left: 1rem;
  font-weight: normal;
}

.tagline {
  font-size: 1.1rem;
  color: #40adfb;
  margin-bottom: 0.5rem;
}

.hashtags {
  color: #6c757d;
  margin-bottom: 1rem;
}

.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem; /* 폰트 크기 약간 감소 */
  padding: 0.4rem 0.8rem; /* 패딩 약간 감소 */
  border-radius: 20px;
  background-color: #40adfb;
}

.profile-link:hover {
  background-color: #2c3e50;
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-link-icon {
  margin-right: 0.5rem;
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  color: #2c3e4f;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem; /* 폰트 크기 약간 감소 */
}

.contact-link:hover {
  color: #40adfb;
}

.contact-link{
  margin-right: 0.5rem;
}

.profile-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; /* 섹션 간 간격 증가 */
}

h2 {
  font-size: 1.6rem; /* 폰트 크기 약간 감소 */
  color: #2c3e50;
  margin-bottom: 1.5rem; /* 여백 증가 */
  border-bottom: 2px solid #40adfb;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
  color: #40adfb;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.8rem; /* 여백 증가 */
}

.highlight-item {
  background-color: #f8f9fa;
  padding: 1.2rem; /* 패딩 증가 */
  border-radius: 8px;
  color: #40adfb;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #d1d1d1;
  margin-bottom: 1rem;
  transition: background-color 0.3s, transform 0.3s;
}

.highlight-item:hover {
  background-color: #e0f7fa;
  transform: translateY(-5px);
}

.highlight-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem; /* 폰트 크기 약간 감소 */
  color: #000000;
}

.highlight-item p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem; /* 폰트 크기 약간 감소 */
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 반응형 그리드로 변경 */
  gap: 1.5rem;
}

.experience-education {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 그리드 열 너비 조정 */
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
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem; /* 폰트 크기 약간 감소 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.skill-item img {
  width: 18px; /* 아이콘 크기 약간 감소 */
  height: 18px;
  margin-right: 0.5rem;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f1f8ff;
}

@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }

  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-image-container {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
  }

  .profile-info {
    text-align: center;
  }

  .profile-info h1 {
    font-size: 2rem;
  }

  .job-title {
    font-size: 1.2rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .hashtags {
    font-size: 0.9rem;
  }

  .profile-links {
    justify-content: center;
  }

  .profile-link {
    margin: 0.25rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  .link-text {
    display: none;
  }

  .profile-link-icon {
    margin-right: 0;
  }

  .contact-info {
    justify-content: center;
  }

  .contact-link {
    font-size: 0.9rem;
  }

  .highlights-grid,
  .experience-education,
  .skill-categories {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .highlight-item {
    text-align: center;
    justify-content: center;
  }

  .skill-items {
    justify-content: center;
  }

  .skill-item {
    justify-content: center;
  }
}
</style>