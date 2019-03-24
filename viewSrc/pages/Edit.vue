<template>
  <div>
    <h1>{{this.type=="update"?'更新':'新建'}}博客</h1>
    <hr>
    <AInput placeholder="请输入标题" v-model="detail.title"></AInput>
    <textarea placeholder="请输入文本内容" v-model="detail.content" class="editor"></textarea>
    <div class="mt-4">
      <AButton @click="submit">提交</AButton>
    </div>
  </div>
</template>

<script>
import { AButton, AInput } from "@/components/form";
import { mapState } from "vuex";

export default {
  name: "edit",
  components: {
    AButton,
    AInput
  },
  data() {
    return {
      type: "",
      detail: {
        content: "",
        title: ""
      }
    };
  },
  computed: {
    ...mapState(["username"])
  },
  methods: {
    fetchDefault() {
      this.$get("/api/blog/detail", {
        params: { id: this.$route.query.id }
      }).then(({ data }) => {
        if (data.errno === 0) {
          this.detail = data.data;
        }
      });
    },
    submit() {
      if (!this.detail.title.trim())
        return this.$notify({ msg: "请填写标题", type: "info" });

      if (!this.detail.content.trim())
        return this.$notify({ msg: "请填写正文", type: "info" });

      let api = "/api/blog/new";
      let params = {
        content: this.detail.content.trim(),
        title: this.detail.title.trim(),
        author: this.username
      };

      if (this.type === "update") {
        api = "/api/blog/update";
        params.id = this.$route.query.id;
      }

      this.$post(api, params).then(({ data }) => {
        if (data.errno === 0) {
          this.$notify({ msg: "成功", type: "success" });
          this.$router.push({ name: "admin" });
        } else {
          this.$notify({ msg: data.msg, type: "warning" });
        }
      });
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    if (this.type === "update") this.fetchDefault();
  }
};
</script>
<style lang="scss" scoped>
.editor {
  padding: 10px;
  width: 100%;
  min-height: 300px;
}
</style>
