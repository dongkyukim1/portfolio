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
            <div>
              <h3>{{ highlight.title }}</h3>
              <p>{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="experience-education" ref="experienceSection">
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

      <section class="aspirations" ref="aspirationsSection">
        <h2>개발자로서의 포부</h2>
        <div class="aspiration-content">
          <p>
            저는 끊임없이 변화하는 기술 환경에서 지속적으로 학습하고 성장하는 개발자가 되고자 합니다.
            단순히 코드를 작성하는 것을 넘어, 사용자의 니즈를 정확히 파악하고 이를 효율적으로 구현하는
            문제 해결사가 되는 것이 목표입니다.
          </p>
          <p>
            또한, 팀워크와 커뮤니케이션의 중요성을 인지하고 있습니다. 동료들과의 협업을 통해
            서로의 지식을 공유하고, 함께 성장하는 개발 문화를 만들어가고 싶습니다.
          </p>
          <p>
            기술적으로는 풀스택 개발 능력을 갖추어 프로젝트의 전반적인 흐름을 이해하고,
            최적의 솔루션을 제시할 수 있는 개발자가 되고자 합니다. 특히, 클라우드 기술과
            DevOps 방법론에 대한 깊이 있는 이해를 바탕으로, 확장 가능하고 안정적인 시스템을
            구축하는 데 기여하고 싶습니다. 또한, Lighthouse와 PurgeCSS 같은 도구를 활용한
            웹 성능 최적화에도 큰 관심을 가지고 있어, 사용자 경험을 지속적으로 개선하는 데
            노력을 기울이고 있습니다.
          </p>
          <p>
            궁극적으로는 사용자에게 가치 있는 서비스를 제공하고, 기술을 통해 사회에 긍정적인
            영향을 미치는 개발자가 되는 것이 제 목표입니다.
          </p>
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
  { id: 1, icon: 'users', title: '프로젝트 리더십', description: '세 번의 프로젝트 조장 경험' },
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
  },
  {
    name: '테스트 & 문서화',
    skills: [
      {name: 'JUnit'},
      {name: 'Swagger'},
      {name: 'Postman'}
    ]
  },
  {
    name: '성능 최적화',
    skills: [
      {name: 'Lighthouse'},
      {name: 'PurgeCSS'},
    ]
  }
])

const getSkillIcon = (skillName) => {
  const specialCases = {
    'Node.js': 'node.js',
    'Vue.js': 'vue.js',
    'jQuery': 'jquery',
    'BootStrap': 'bootstrap',
    'JUnit': 'junit',
    'Postman': 'postman',
    'Swagger': 'swagger',
    'Lighthouse': 'lighthouse',
    'PurgeCSS': 'purgecss'
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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 기본 스타일 설정 */
html, body {
  overflow-x: hidden; /* 전역적으로 가로 스크롤 방지 */
}

.profile-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Jua', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.profile-image-container {
  flex-shrink: 0;
  margin-bottom: 1.5rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #40adfb;
}

.profile-info {
  position: relative;
  text-align: center; /* 모바일에서 중앙 정렬 */
  margin-left: 0; /* 강제 이동을 없앰 */
}

.profile-info h1 {
  font-size: 1.8rem;
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
  font-size: 1rem;
  color: #40adfb;
  margin-bottom: 0.5rem;
}

.hashtags {
  font-size: 0.9rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.profile-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  padding: 0.4rem 0.8rem;
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
  justify-content: center;
  margin-top: 1rem;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  color: #2c3e4f;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.contact-link:hover {
  color: #40adfb;
}

.profile-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

h2 {
  font-size: 1.6rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
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
  margin-bottom: 0.8rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.highlight-item {
  background-color: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.highlight-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  color: #2c3e50;
}

.highlight-item p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.experience-education {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.skill-item img {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.aspirations {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.aspiration-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333;
}

/* 큰 화면에서는 가로 정렬, 작은 화면에서는 세로 정렬 */
@media (min-width: 768px) {
  .profile-header {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }

  .profile-image-container {
    margin-right: 2rem;
    margin-bottom: 0;
  }

  .profile-info {
    text-align: left;
  }
}

/* 작은 화면 반응형 조정 */
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

  .profile-info h1 {
    font-size: 2rem;
  }

  .job-title {
    font-size: 1.2rem;
  }

  .profile-links, .contact-info {
    justify-content: center;
  }

  .highlights-grid,
  .experience-education,
  .skill-categories {
    grid-template-columns: 1fr;
  }

  .skill-categories {
    grid-template-columns: 1fr;
  }

  .skill-items {
    justify-content: center;
  }

  .highlight-item, .skill-item {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .profile-container {
    padding: 1rem;
  }

  .profile-header {
    padding: 1rem;
  }

  .profile-info h1 {
    font-size: 1.6rem;
  }

  .job-title {
    font-size: 1rem;
  }

  .highlight-item, .skill-item {
    justify-content: center;
    text-align: center;
  }
}
</style>