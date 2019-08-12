<template>
  <Layout>
    <div class="markdown-body">
      <h1>{{ $page.hackerInfo.title }}</h1>
      <div v-html="$page.hackerInfo.info" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  hackerInfo (path: $path) {
    title
    info
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.hackerInfo.title
    };
  }
};
</script>