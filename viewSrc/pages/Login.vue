<template>
  <div>
    <Card>
      <h1>login</h1>
    </Card>
    <router-link class="fc-link" tag="a" :to="{name:'home'}">文档</router-link>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "login",
  components: { Card }
};
</script>