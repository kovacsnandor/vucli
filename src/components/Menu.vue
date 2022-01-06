<template>
  <div class="my-border">
    <!-- 5. Cserélkük le a lineket: a -> router-link, href -> to, link -> route (útvonal) -->
    <ul>
      <li>
        <router-link to="/">Főoldal</router-link>
      </li>
      <li>
        <router-link to="/hirek/">Hírek oldal</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>