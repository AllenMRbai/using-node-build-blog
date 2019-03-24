<template>
  <div>
    <h1>首页</h1>
    <hr>
    <ul class="list-box">
      <li v-for="blog of blogs" :key="blog.id" class="list-item">
        <router-link tag="h3" class="fc-link-black" :to="{name:'detail'}">{{blog.title}}</router-link>
        <p class="text-truncate-2">{{blog.content}}</p>
        <div class="flex-between">
          <router-link tag="span" class="fc-link-black" :to="{name:'admin'}">作者：{{blog.author}}</router-link>
          <span>{{blog.createtime | timeStampToDate}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "blogs",
  data() {
    return {
      blogs: []
    };
  },
  methods: {
    fetchBlogs() {
      this.$get("/api/blog/list").then(({ data }) => {
        if (data.errno === 0) {
          this.blogs = data.data;
        }
      });
    }
  },
  mounted() {
    this.fetchBlogs();
  }
};
</script>
<style lang="scss" scoped>
@import "../variables.scss";
.list-item {
  margin: 10px auto;
  border-bottom: 1px solid $border;
  padding: 10px 8px;
}
</style>
