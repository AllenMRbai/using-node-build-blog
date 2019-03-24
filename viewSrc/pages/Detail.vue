<template>
  <div>
    <h1>博客详情</h1>
    <hr>
    <article v-if="detail">
      <div class="flex-start">
        <h3>{{detail.title}}</h3>
        <router-link
          :to="{name:'admin',query:{author:detail.author}}"
          class="ml-2 fc-link-black"
        >{{detail.author}}</router-link>
        <span class="ml-2">{{detail.createtime | timeStampToDate}}</span>
      </div>
      <p>{{detail.content}}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      detail: null
    };
  },
  methods: {
    fetchContent() {
      this.$get("/api/blog/detail", {
        params: { id: this.$route.params.id }
      }).then(({ data }) => {
        if (data.errno === 0) {
          this.detail = data.data;
        }
      });
    }
  },
  mounted() {
    this.fetchContent();
  }
};
</script>