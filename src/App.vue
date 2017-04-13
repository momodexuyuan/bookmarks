<template>
  <div id="app">
    <mu-appbar title="便捷书签"
               class="topbar">
      <mu-text-field icon="search"
                     class="appbar-search-field"
                     slot="right"
                     hintText="请输入搜索内容"
                     @change="search"
                     style="margin-bottom: 0" />
    </mu-appbar>
    <router-view></router-view>
  
    <div class="content">
      <mu-list>
        <mu-list-item v-for="(item,index) in tree"
                      :title="item.title"
                      :key="index"
                      :toggleNested="item.children.length > 0"
                      :open="false">
          <mu-list-item slot="nested"
                        v-for="(item2,index2) in item.children"
                        v-if="item.children.length > 0"
                        :title="item2.title"
                        :key="index2"
                        :open="false">
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      tree: {}
    }
  },
  created() {
    let $this = this
    chrome.bookmarks.getTree((tree) => {
      console.log(tree)
      $this.tree = tree[0].children
    })
  },
  methods: {
    search(value) {
      let $this = this
      chrome.bookmarks.search(value, (search) => {
        console.log(search)
        $this.tree = search[0].children
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 400px;
  height: 800px;
  font-family: STHeiti, '微软雅黑', Arial, sans-serif;
  overflow: hidden;
}

.topbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: auto;
  transition: all .45s cubic-bezier(.23, 1, .32, 1);
}

.content {
  padding-top: 56px;
}
</style>
