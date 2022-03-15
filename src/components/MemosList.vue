<template>
  <div class="row">
<button @click="New">追加</button>
    <div class="list col-2 d-flex flex-column">
      <button v-for="memo in memos" :key="memo.id" @click="get(memo.id)">
        {{ memo.title }}
      </button>
    </div>
    <div class="col d-flex flex-column">
      <input type="text" v-model="title">
      <textarea type="text" v-model="content"></textarea>
    </div>
    <button @click="create">保存</button>
  </div>
</template>
<script>
import DS from "../services/DataService";

export default {
  name: "MemosList",
  data() {
    return {
      memos: [],
      id: "",
      title: "",
      content: "",
    };
  },
  methods: {
    getAll() {
      DS.getAll()
        .then((response) => {
          this.memos = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    get(id) {
      DS.get(id)
        .then((response) => {
          this.title = response.data[0].title;
          this.content = response.data[0].content;
          
        })
        .catch((e) => {
          console.log(e);
        });
    },
    New() {
      this.id = "",
      this.title = "",
      this.content = ""
    },
    create() {
      let data = {
        title: this.title,
        content: this.content,
      };
      DS.create(data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>
