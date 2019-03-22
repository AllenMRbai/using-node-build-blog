<template>
  <div class="paper">
    <article v-html="doc"></article>
  </div>
</template>
<script>
import doc from "@/docs/home.html";
console.log("看文档的内容：", doc);
export default {
  name: "doc-home",
  data() {
    return {
      doc
    };
  }
};
</script>

