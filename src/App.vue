<template>
  <div id="app">
    <mu-appbar class="topbar">
      <mu-icon-button v-show="deep > 1"
                      icon="arrow_back"
                      slot="left"
                      @click="back()" />
      <mu-text-field icon="search"
                     class="appbar-search-field"
                     slot="right"
                     hintText="请输入搜索内容"
                     @input="search"
                     style="margin-bottom: 0" />
    </mu-appbar>
    <router-view></router-view>
    <mu-row class="content"
            gutter>
      <mu-list>
        <mu-list-item v-for="(item, index) in tree"
                      :title="item.title"
                      :key="index"
                      @click="selectBookmark(index)">
          <mu-icon v-show="item.hasOwnProperty('children')"
                   value="chevron_right"
                   slot="right" />
        </mu-list-item>
      </mu-list>
    </mu-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      tree: {},
      deep: 1,
      index: []
    }
  },
  created() {
    this.getTree().then(data => {
      this.tree = data
    })
  },
  methods: {
    getTree() {
      return new Promise(function (resolve, reject) {
        chrome.bookmarks.getTree((tree) => {
          resolve(tree[0].children)
        })
      })
    },
    search(value) {
      let $this = this

      if (value === '') {
        this.getTree().then(data => {
          this.tree = data
        })
      } else {
        chrome.bookmarks.search(value, (search) => {
          $this.deep = 1
          $this.index = []
          $this.tree = search
        })
      }
    },
    selectBookmark(index) {
      let marks = this.tree[index]

      if (marks.hasOwnProperty('children')) {
        this.index.push(index)
        this.tree = marks.children
        this.deep++
      }
    },
    back() {

      console.log(this.index)
      this.getTree().then(data => {
        let tree = data

        this.index.pop()
        this.deep--

        this.index.forEach(i => {
          console.log(tree)
          console.log(tree[i].children)
          tree = tree[i].children
        })

        this.tree = tree
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
  height: 600px;
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
