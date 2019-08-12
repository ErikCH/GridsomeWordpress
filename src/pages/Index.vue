<template>
  <Layout>
    <h1>Welcome to my blog :)</h1>
    <ul class="post-list">
      <h2>From Wordpress</h2>
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <g-link :to="node.path">{{node.title}}</g-link>
      </li>
      <h2>From Mark Down Files</h2>
      <li v-for="{ node } in $page.allPost.edges" :key="node.id">
        <g-link :to="node.path">{{node.title}}</g-link>
      </li>
      <h2>From Custom API</h2>
      <li v-for="{ node } in $page.allHackerInfo.edges" :key="node.id">
        <g-link :to="node.path">{{node.title}}</g-link>
      </li>
    </ul>
    {{$page.allWordPressPost.pageInfo}}
  </Layout>
</template>

<page-query>
query Home {
  allWordPressPost (perPage: 10) {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
  allPost {
  edges {
    node {
      path
      title
      content
    }
  }
}
allHackerInfo {
  edges {
    node {
      title
      info
      path
    }
  }
}

}
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Welcome to my blog :)"
  }
};
</script>