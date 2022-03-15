<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <li>
        <button @click="Delete">削除</button>
      </li>
      <li>
          <router-link to="/create">作成</router-link>
      </li>
    </nav>

    <div class="container">
      <MemosList />
    </div>
  </div>
</template>
<script>
import MemosList from "./components/MemosList";

export default {
  components: { MemosList },

};
</script>
