<template>
  <div class="about">
    <h1>About Me</h1>
    <p>I'm a passionate web developer with experience in Vue.js, React, and various other web technologies.</p>
    <h2>Skills</h2>
    <ul>
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref(['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS', 'Node.js'])
</script>