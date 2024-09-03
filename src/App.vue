<template>
  <div id="app">
    <header>
      <nav>
        <a @click="scrollToSection('profile')" class="nav-item">
          <font-awesome-icon icon="home" />
          <span class="tooltip">Home</span>
        </a>
        <a @click="scrollToSection('highlights')" class="nav-item">
          <font-awesome-icon icon="star" />
          <span class="tooltip">핵심 역량</span>
        </a>
        <a @click="scrollToSection('experience')" class="nav-item">
          <font-awesome-icon icon="briefcase" />
          <span class="tooltip">경력</span>
        </a>
        <a @click="scrollToSection('skills')" class="nav-item">
          <font-awesome-icon icon="code" />
          <span class="tooltip">기술</span>
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
      <Home ref="home" class="left-content" />
      <Projects class="right-content" />
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
import { faHome, faStar, faBriefcase, faCode, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faStar, faBriefcase, faCode, faPhone, faGithub, faBlogger)

export default {
  name: 'App',
  components: {
    Home,
    Projects,
    FontAwesomeIcon
  },
  setup() {
    const home = ref(null)

    const scrollToSection = (sectionId) => {
      if (home.value && home.value.$refs[sectionId]) {
        home.value.$refs[sectionId].scrollIntoView({ behavior: 'smooth' });
      }
    }

    return {
      home,
      scrollToSection
    }
  }
}
</script>


<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --background-color: #f8f9fa;
  --text-color: #333;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: var(--secondary-color);
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item:hover {
  color: var(--primary-color);
}

.tooltip {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
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
  background-color: var(--secondary-color);
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
}

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .left-content, .right-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    height: calc(100vh - 60px); /* 헤더와 푸터 높이를 고려하여 조정 */
  }

  .left-content {
    border-right: 1px solid #e0e0e0;
    display: block !important; /* 추가 */
    visibility: visible !important; /* 추가 */
  }
}
</style>