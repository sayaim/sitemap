<template>
<div id="app">
	<div class="">
		<!-- <div v-if="!new_client">
			<button @click="New">作成</button>
			<button @click="destroy">削除</button>																																																																																																																																																
			<button @click="update">変更</button>
		</div> -->
		<div>
			<button @click="New">作成</button>
			<button @click="destroy">削除</button>
			<button @click="create">保存</button>
		</div>
	</div>
	<div class="d-flex d-inline-block">
		<!-- <div class="list col-2 d-flex flex-column">
			<button v-for="memo in memos" :key="memo.id" @click="edit(memo.id)">
				{{ memo.name }}
			</button>
		</div> -->
		<div class="d-flex flex-column col">
			<input type="text" v-model="name">
			<textarea type="text" v-model="description"></textarea>
		</div>
	</div>
</div>
</template>

<script>
import { client } from "../services/service";

export default {
  data() {
    return {
      client: [],
      id: "",
      name: "",
      description: "",
      new_client: false,
    };
  },
  methods: {
    // all() {
    //   client.all()
    //     .then((response) => {
    //       this.client = response.data;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    edit(id) {
      client.edit(id)
        .then((response) => {
          this.id = response.data[0].id;
          this.name = response.data[0].name;
          this.description = response.data[0].description;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    New() {
			this.id = "",
      this.name = "",
      this.description = "",
      this.newMemo = true
    },
		create() {
			const data = { name: this.name, description: this.description };
      client.create(data)
        .catch((e) => {
					console.log(e);
        });
		},
		update() {
			const data = { id: this.id, name: this.name, description: this.description };
			client.update(data)
        .catch((e) => {
					console.log(e);
        });
		},
		destroy() {
      const id = this.id;
			client.destroy(id)
				.catch((e) => {
					console.log(e);
				});
		},
  },
  mounted() {
    this.all();
  }
};
</script>
