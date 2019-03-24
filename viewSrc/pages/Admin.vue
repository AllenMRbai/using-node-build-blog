<template>
  <div>
    <h1>{{author}} 的所有博客</h1>
    <hr>
    <ul class="list-box">
      <li v-for="blog of blogs" :key="blog.id" class="list-item">
        <div class="flex-between">
          <router-link
            tag="h3"
            class="fc-link-black"
            :to="{name:'detail',params:{id:blog.id}}"
          >{{blog.title}}</router-link>
          <div v-if="isSelf">
            <AButton @click="deleteBlog(blog.id)" type="danger" size="sm">删除</AButton>
            <AButton @click="goEdit(blog.id)" size="sm">修改</AButton>
          </div>
        </div>
        <p class="text-truncate-2">{{blog.content}}</p>
        <div class="flex-between">
          <span>作者：{{blog.author}}</span>
          <span>{{blog.createtime | timeStampToDate}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { AButton } from "@/components/form";

export default {
  name: "admin",
  components: {
    AButton
  },
  data() {
    return {
      blogs: [],
      author: ""
    };
  },
  computed: {
    ...mapState(["username"]),
    isSelf() {
      return this.author === this.username;
    }
  },
  methods: {
    fetchBlogs() {
      this.$get("/api/blog/list", {
        params: { author: this.author }
      }).then(({ data }) => {
        if (data.errno === 0) {
          this.blogs = data.data;
        }
      });
    },
    deleteBlog(id) {
      this.$confirm({
        title: "提示",
        msg: "确定删除该博客？",
        onOk: () => {
          this.$post("/api/blog/del", { author: this.author, id }).then(
            ({ data }) => {
              if (data.errno === 0) {
                for (let i in this.blogs) {
                  if (this.blogs[i].id === id) {
                    this.$delete(this.blogs, i);
                    break;
                  }
                }
                this.$notify({ msg: "删除成功", type: "success" });
              }
            }
          );
        }
      });
    },
    goEdit(id) {
      this.$router.push({
        name: "edit",
        params: { type: "update" },
        query: { id }
      });
    }
  },
  mounted() {
    let author = this.$route.query.author || this.username;
    this.author = author;
    this.fetchBlogs();
  }
};
</script>
<style lang="scss">
@import "../variables.scss";
.list-item {
  margin: 10px auto;
  border-bottom: 1px solid $border;
  padding: 10px 8px;
}
</style>