<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="nav-item" v-tooltip="'Home'">
          <font-awesome-icon icon="home" />
        </router-link>
        <router-link to="/projects" class="nav-item" v-tooltip="'Projects'">
          <font-awesome-icon icon="project-diagram" />
        </router-link>
        <router-link to="/about" class="nav-item" v-tooltip="'About'">
          <font-awesome-icon icon="user" />
        </router-link>
        <router-link to="/contact" class="nav-item" v-tooltip="'Contact'">
          <font-awesome-icon icon="envelope" />
        </router-link>
      </nav>
      <div class="social-icons">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" v-tooltip="'GitHub'">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://yourblog.tistory.com" target="_blank" rel="noopener noreferrer" v-tooltip="'Blog'">
          <font-awesome-icon :icon="['fab', 'blogger']" />
        </a>
        <a href="tel:+1234567890" v-tooltip="'Call Me'">
          <font-awesome-icon icon="phone" />
        </a>
      </div>
    </header>

    <main class="main-content">
      <Home class="left-content" />
      <Projects class="right-content" />
    </main>


    <footer>
      <p>&copy; 2024 김동규. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'

export default {
  name: 'App',
  components: {
    Home,
    Projects
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
}

nav, .social-icons {
  display: flex;
  gap: 1rem;
}

.nav-item, .social-icons a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.nav-item:hover, .social-icons a:hover {
  color: var(--primary-color);
}

.left-content, .right-content {
  flex: 1;
  overflow-y: auto;
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

header {
  overflow: visible;
}

.nav-item, .social-icons a {
  position: relative;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header, footer {
  flex-shrink: 0;
}

.main-content {
  flex-grow: 1;
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
</style>