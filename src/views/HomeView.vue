<template>
  <div class="home-view has-header">
    <!-- <sub-nav mold="quickNav"></sub-nav> -->
    <!-- <search-filter></search-filter> -->
    <div class="search">
      <form id="search_form" onsubmit="return false">
        <input
          type="text"
          name="query"
          v-model.trim.lazy="queryStr"
          placeholder="Search sentences (more than 3 chars)">
        <a href="javascript:void(0);" @click="query()">Search</a>
      </form>
    </div>

    <template>
      <div class="about">
        <template v-if="$route.query.dataset == 'DPR'">
          <a href="https://aclweb.org/anthology/papers/I/I17/I17-1100/">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'CMRC'">
          <a href="https://github.com/ymcui/cmrc2018">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'DRCD'">
          <a href="https://github.com/DRCKnowledgeTeam/DRCD">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'COPA'">
          <a href="http://people.ict.usc.edu/~gordon/copa.html">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'MultiRC'">
          <a href="https://cogcomp.seas.upenn.edu/multirc/">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'WiC'">
          <a href="https://pilehvar.github.io/wic/">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'WNLI'">
          <a href="https://cs.nyu.edu/faculty/davise/papers/WinogradSchemas/WS.html">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'ReCoRD'">
          <a href="https://sheng-z.github.io/ReCoRD-explorer/">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'BoolQ'">
          <a href="https://github.com/google-research-datasets/boolean-questions">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'RACE'">
          <a href="http://www.qizhexie.com/data/RACE_leaderboard">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'SciTail'">
          <a href="https://leaderboard.allenai.org/scitail/submissions/get-started">About This Task</a>
        </template>
        <template v-else-if="$route.query.dataset == 'Winogrande'">
          <p>A new collection of Winograd Schema Challenge (WSC) problems that are adversarially constructed to be robust against spurious statistical biases. It includes 43,985 instances, half of which are determined as adversarial. A new adversarial filtering algorithm AfLite for systematic bias reduction, combined with a careful crowdsourcing design. The performance of existing state-of-the-art methods remains modest (61.6%) and contrasts with high human performance (90.8%) for the binary questions.</p>
          <a href="https://leaderboard.allenai.org/winogrande/submissions/get-started">About This Task</a>
        </template>

        <template v-else>
          <a href="https://gluebenchmark.com/tasks">About This Task</a>
        </template>
      </div>
    </template>

    <d-list :ds_name="dataset" :items="data"></d-list>
    <button @click="onLoadMore" class="block-button">More</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import DList from '../components/DList'

export default {
  name: 'home-view',
  components: { DList, InfiniteLoading },
  data () {
    return {
      queryStr: ''
    }
  },
  computed: {
    // Getting Vuex State from store/modules/activities
    ...mapState({
      data: state => state.docs.data,
      dataset: state => state.docs.dataset,
      noMore: state => state.docs.noMore
    })
  },
  watch: {
    '$route' (to, from) {
      const name = this.$route.query.dataset || 'WNLI'
      this.loadDataset({name: name})
    }
  },
  methods: {
    // Dispatching Actions
    ...mapActions([
      'loadDataset',
      'loadMoreRows'
    ]),
    query: function () {
      if (this.queryStr.length === 0) {
        this.loadDataset({name: this.dataset})
        return
      }
      if (this.queryStr) {
        // Dispatching query
        this.$store.dispatch({
          type: 'querySentence',
          queryStr: this.queryStr
        })
      }
    },
    onLoadMore: function () {
      this.loadMoreRows()
    }
  },
  created () {
    const name = this.$route.query.dataset || 'WNLI'
    this.loadDataset({name: name})
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
@media (max-width: 768px) {
  .home-view {
    .about {
      margin: 2rem 1rem 0 1rem;
    }
  }
}

.about {
  text-align: right;
  font-size: 120%;
  margin: 2rem 0 0 0;
  p {
    text-align: left;
    font-size: 120%;
    line-height: 1.8rem;
    color: #aaa;
  }
}
.d-list {
  margin-top: 2rem;
}
.search {
  padding: 0.7rem 2rem;
  border-bottom: 0.1rem solid #F2F2F2;
  overflow: hidden;

  input {
    width: 85%;
    height: 3rem;
    padding: 0.5rem 0.8rem;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: #111;
    background: #f5f5f5;
    border-radius: 0.3rem;
    border: 0;
    outline: 0;
  }

  a {
    display: inline-block;
    float: right;
    width: 10%;
    height: 3rem;
    padding-left: 5%;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #333;
    text-decoration: none;
  }
}
.submit {
  cursor: pointer;
  width: 100%;
  padding: 1.2rem 2.6rem;
  margin-top: 1rem;
  font-size: 1.7rem;
  text-align: center;
  color: #fff;
  background: #17AA52;
  border: 0.1rem solid #17AA52;
  border-radius: 0.3rem;
}
</style>
