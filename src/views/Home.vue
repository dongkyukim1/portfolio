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
            GitHub
          </a>
          <a :href="blogLink" target="_blank" class="profile-link">
            <font-awesome-icon icon="rss" size="lg" class="profile-link-icon" />
            Blog
          </a>
          <a :href="resumeLink" target="_blank" class="profile-link">
            <font-awesome-icon icon="file-pdf" size="lg" class="profile-link-icon" />
            이력서
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
import { faUsers, faGlobe, faGraduationCap, faRss, faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FontAwesome 아이콘 라이브러리 설정
library.add(faUsers, faGlobe, faGraduationCap, faGithub, faRss, faPhone, faEnvelope, faFilePdf)

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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

.profile-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Jua', sans-serif;
  background-color: #f8f9fa;
  color: #333;
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 허용 */
  height: auto; /* 높이 제한 제거 */
}

.job-title {
  font-size: 1.5rem;
  color: #40adfb;
  margin-left: 1rem;
  font-weight: normal;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #40adfb;
}

.profile-info {
  flex-grow: 1;
}

.profile-info h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.tagline {
  font-size: 1.2rem;
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
  font-size: 1rem;
  padding: 0.5rem 1rem;
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
  font-size: 1rem;
}

.contact-link:hover {
  color: #40adfb;
}

.contact-link .svg-inline--fa {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .contact-info {
    justify-content: center;
  }
}

.contact-info p {
  margin: 0.5rem 0;
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
  border-bottom: 2px solid #40adfb;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.3rem;
  color: #40adfb;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 0.5rem;
}

.highlight-item {
  background-color: #f8f9fa; /* 배경색을 약간 밝은 색으로 변경 */
  padding: 1rem;
  border-radius: 8px;
  color: #40adfb;
  text-align: left; /* 가로 정렬을 위해 좌측 정렬 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex; /* 플렉스 박스 사용 */
  align-items: center; /* 수직 정렬 */
  gap: 1rem; /* 아이콘과 텍스트 사이에 간격 추가 */
  border: 1px solid #d1d1d1; /* 테두리 추가 */
  margin-bottom: 1rem; /* 요소 사이에 간격 추가 */
  transition: background-color 0.3s, transform 0.3s; /* 배경색과 변환 효과에 트랜지션 추가 */
}

.highlight-item:hover {
  background-color: #e0f7fa; /* 호버 시 배경색 변경 */
  transform: translateY(-5px); /* 호버 시 약간 위로 이동 */
}

.highlight-item h3 {
  margin: 0 0 0.5rem 0; /* 제목과 설명 사이에 간격 추가 */
  font-size: 1.5rem;
  color: #000000;
}

.highlight-item p {
  margin: 0;
  color: #6c757d;
  font-size: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 칼럼으로 정렬 */
  gap: 1.5rem; /* 칼럼 사이에 간격 추가 */
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
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  background-color: #f1f8ff;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-image-container {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .profile-info {
    text-align: center;
  }

  .profile-links {
    justify-content: center;
  }

  .contact-info {
    justify-content: center;
  }

  .highlights-grid,
  .experience-education,
  .skill-categories {
    grid-template-columns: 1fr; /* 1열 레이아웃으로 변경 */
    gap: 2rem;
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
