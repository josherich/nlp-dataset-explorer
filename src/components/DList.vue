<template>
  <div class="d-list">

    <template v-if="ds_name === 'WNLI'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'DIAGNOSTICS'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <!-- Lexical Semantics__Predicate-Argument Structure__Logic__Knowledge__Domain__Premise__Hypothesis__Label -->
          <span class="col-index">{{index}}</span>
          <span class="col-index">{{item[1]}}</span>
          <span class="col-label">{{item[7]}}</span>
          <span class="col-sent">{{item[5]}}</span>
          <span class="col-sent">{{item[6]}}</span>
      </div>
      <div v-else class="row">
          <!-- Lexical Semantics__Predicate-Argument Structure__Logic__Knowledge__Domain__Premise__Hypothesis__Label -->
          <span class="col-index">{{index}}</span>
          <span class="col-index">{{item[1]}}</span>
          <span class="col-label">{{item[7]}}</span>
          <span class="col-sent">{{item[5]}}</span>
          <span class="col-sent">{{item[6]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'QNLI'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <!-- Lexical Semantics__Predicate-Argument Structure__Logic__Knowledge__Domain__Premise__Hypothesis__Label -->
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
      <div v-else class="row">
          <!-- Lexical Semantics__Predicate-Argument Structure__Logic__Knowledge__Domain__Premise__Hypothesis__Label -->
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
    </template>

    <!-- id__qid1__qid2__question1__question2__is_duplicate -->
    <template v-if="ds_name === 'QQP'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[5]}}</span>
          <span class="col-sent">{{item[3]}}</span>
          <span class="col-sent">{{item[4]}}</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[5]}}</span>
          <span class="col-sent">{{item[3]}}</span>
          <span class="col-sent">{{item[4]}}</span>
      </div>
    </template>

    <!-- index__sentence1__sentence2__label -->
    <template v-if="ds_name === 'RTE'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[3]}}</span>
          <span class="col-sent">{{item[1]}}</span>
          <span class="col-sent">{{item[2]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'SST-2'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">{{index}}</span>
          <span class="col-index">{{item[1]}}</span>
          <span class="col-sent">{{item[0]}}</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{index}}</span>
          <span class="col-index">{{item[1]}}</span>
          <span class="col-sent">{{item[0]}}</span>
      </div>
    </template>

    <!-- index__genre__filename__year__old_index__source1__source2__sentence1__sentence2__score -->
    <template v-if="ds_name === 'STS-B'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[9]}}</span>
          <span class="col-sent">{{item[7]}}</span>
          <span class="col-sent">{{item[8]}}</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item[0]}}</span>
          <span class="col-label">{{item[9]}}</span>
          <span class="col-sent">{{item[7]}}</span>
          <span class="col-sent">{{item[8]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'DPR'" v-for="(item, index) in items">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">premise</span>
          <span class="col-sent">Hypothesis</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item[1]}}</span>
          <span class="col-label">{{item[4]}}</span>
          <span class="col-sent">{{item[2]}}</span>
          <span class="col-sent">{{item[3]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'basic'">
      <ul class="basic">
        <li v-for="item in items">
          <a href="#">
            <h3>{{item.title}}</h3>
            <div class="info">{{item.summary}}</div>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    ds_name: {
      type: String,
      default: 'WNLI'
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  filters: {
    subStr: function (value) {
      let newVal = value.replace(/<.*?>/g, '')
      return newVal.slice(0, 400) + '...'
    }
  }
}
</script>

<style lang='scss' scoped>
@media (max-width: 768px) {
  .d-list {
    margin: 0 8px;
  }
}
.d-list {
  .row {
    margin: 2em 0;
    font-size: 150%;
    display: flex;
  }
  .row-head {
    padding-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid #eee;
  }
  .row span {
    display: inline-block;
    line-height: 1.8rem;
  }
  span.col-index, span.col-label {
    width: 5rem;
    padding-right: 1rem;
    word-break: break-word;
  }
  span.col-label {
    font-size: 80%;
  }
  .row.row-head span.col-label {
    font-size: 100%;
  }
  span.col-sent {
    width: 40rem;
    flex: 1;
    padding: 0 2rem 0 0;
  }
  .download {
    margin-right: 1.8rem;
    text-align: right;
  }
  .thumbnail {
    position: relative;
    display: block;
    padding: 0 1.8rem 1.5rem 0;
    margin-left: 1.8rem;

    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }
    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }
    .name {
      margin-right: 1em;
      font-size: 1.4rem;
    }
    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
      margin: 0;
    }

    img {
      float: right;
      // width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size: 1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
  }

  .basic {
    h3 {
      padding: 0;
      line-height: 1.41;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    .info {
      margin-top: 0.5rem;
      font-size: 1.4rem;
      color: #42bd56;
    }
  }
}
</style>
