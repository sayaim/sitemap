<template>
  <div>
    <div class="">
      <div v-if="!newMemo">
        <button @click="New">作成</button>
        <button @click="destroy">削除</button>
        <button @click="update">変更</button>
      </div>
      <div v-else>
        <button @click="New">作成</button>
        <button @click="destroy">削除</button>
        <button @click="create">保存</button>
      </div>
    </div>
    <div class="d-flex d-inline-block">
      <div class="list col-2 d-flex flex-column">
        <button v-for="memo in memos" :key="memo.id" @click="edit(memo.id)">
          {{ memo.title }}
        </button>
      </div>
      <div class="d-flex flex-column col">
        <input type="text" v-model="title">
        <textarea type="text" v-model="content"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import DS from "../services/DataService";

export default {
  data() {
    return {
      memos: [],
      id: "",
      title: "",
      content: "",
      newMemo: false,
    };
  },
  methods: {
    index() {
      DS.index()
        .then((response) => {
          this.memos = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    edit(id) {
      DS.edit(id)
        .then((response) => {
          this.id = response.data[0].id;
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
      this.content = "",
      this.newMemo = true
    },
		create() {
			const data = { title: this.title, content: this.content };
      DS.store(data)
        .catch((e) => {
					console.log(e);
        });
		},
		update() {
			const data = { id: this.id, title: this.title, content: this.content };
			DS.update(data)
        .catch((e) => {
					console.log(e);
        });
		},
		destroy() {
      const id = this.id;
			DS.destroy(id)
				.catch((e) => {
					console.log(e);
				});
		},
  },
  mounted() {
    this.index();
  }
};
</script>
