<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <nav>
    <ul>
      <li>
        <NuxtLink :to="localePath({ name: 'index' })">{{ t("home") }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath({ name: '/posts' })">{{
          t("posts")
        }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath({ name: '/work' })">{{ t("work") }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
</style>
