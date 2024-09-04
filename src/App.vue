<template>
  <div id="app">
    <header>
      <nav>
        <a @click="scrollToSection('profileSection')" class="nav-item">
          <font-awesome-icon icon="home" />
          <span class="tooltip">Home</span>
        </a>
        <a @click="scrollToSection('highlightsSection')" class="nav-item">
          <font-awesome-icon icon="star" />
          <span class="tooltip">핵심 역량</span>
        </a>
        <a @click="scrollToSection('experienceSection')" class="nav-item">
          <font-awesome-icon icon="briefcase" />
          <span class="tooltip">경력</span>
        </a>
        <a @click="scrollToSection('skillsSection')" class="nav-item">
          <font-awesome-icon icon="code" />
          <span class="tooltip">기술</span>
        </a>
        <a @click="scrollToSection('projectsSection')" class="nav-item">
          <font-awesome-icon icon="project-diagram" />
          <span class="tooltip">프로젝트</span>
        </a>
      </nav>
      <div class="social-icons">
        <a href="https://github.com/dongkyukim1" target="_blank" rel="noopener noreferrer" class="nav-item">
          <font-awesome-icon :icon="['fab', 'github']" />
          <span class="tooltip">GitHub</span>
        </a>
        <a href="https://begin-developer.tistory.com" target="_blank" rel="noopener noreferrer" class="nav-item">
          <font-awesome-icon :icon="['fab', 'blogger']" />
          <span class="tooltip">Blog</span>
        </a>
        <a href="tel:+821040488292" class="nav-item">
          <font-awesome-icon icon="phone" />
          <span class="tooltip">Call Me</span>
        </a>
      </div>
    </header>

    <main class="main-content">
      <div class="left-content">
        <Home ref="home" />
      </div>
      <div class="right-content">
        <Projects ref="projects" />
      </div>
    </main>

    <footer>
      <p>&copy; 2024 김동규. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faStar, faBriefcase, faCode, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faStar, faBriefcase, faCode, faPhone, faProjectDiagram, faGithub, faBlogger)

export default {
  name: 'App',
  components: {
    Home,
    Projects,
    FontAwesomeIcon
  },
  setup() {
    const home = ref(null)
    const projects = ref(null)

    const scrollToSection = (sectionId) => {
      if (sectionId === 'projectsSection' && projects.value) {
        projects.value.$el.scrollIntoView({behavior: 'smooth'});
      } else if (home.value && home.value.$refs[sectionId]) {
        home.value.$refs[sectionId].scrollIntoView({behavior: 'smooth'});
      }
    }

    return {
      home,
      projects,
      scrollToSection
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #2c3e50;
  color: white;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav, .social-icons {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* 추가 */
}

.nav-item:hover {
  color: #3498db;
}

.tooltip {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  border-radius: 6px;
  padding: 5px 8px;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -30px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.8rem;
  white-space: nowrap;
}

.nav-item:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.main-content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.left-content, .right-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.left-content {
  border-right: 1px solid #e0e0e0;
}

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
  }

  nav {
    flex-direction: row; /* 세로가 아닌 가로로 정렬되도록 수정 */
  }

  .social-icons {
    flex-direction: row; /* 세로가 아닌 가로로 정렬되도록 수정 */
    margin-top: 0.5rem;
  }

  .nav-item {
    font-size: 1rem;
  }

  .main-content {
    flex-direction: column;
  }

  .left-content, .right-content {
    width: 100%;
    border-right: none;
  }
  .right-content {
    border-top: 1px solid #e0e0e0;
  }
  .tooltip {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    top: auto;
  }
}
</style>
