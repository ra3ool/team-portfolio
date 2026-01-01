<script lang="ts" setup>
const skills = [
  {
    name: '',
    desctiption: ''
  },
  {
    name: '',
    desctiption: ''
  }
]
</script>

<template>
  <div>
    <h3 class="text-2xl font-bold">skills</h3>
    <div v-for="skill in skills" :key="skill.name">
      <span>{{ skill.name }}</span>
    </div>
  </div>
</template>
