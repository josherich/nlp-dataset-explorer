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

    <template v-if="ds_name === 'QQP'" v-for="(item, index) in items">
      <!-- id__qid1__qid2__question1__question2__is_duplicate -->
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

    <template v-if="ds_name === 'RTE'" v-for="(item, index) in items">
      <!-- index__sentence1__sentence2__label -->
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

    <template v-if="ds_name === 'STS-B'" v-for="(item, index) in items">
      <!-- index__genre__filename__year__old_index__source1__source2__sentence1__sentence2__score -->
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

    <template v-if="ds_name === 'DPR'" v-for="(item, index) in [{}].concat(items)">
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

    <template v-if="ds_name === 'CB' || ds_name === 'RTE-DIAGNOSTIC'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">premise</span>
          <span class="col-sent">Hypothesis</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item['idx']}}</span>
          <span class="col-label">{{item['label']}}</span>
          <span class="col-sent">{{item['premise']}}</span>
          <span class="col-sent">{{item['hypothesis']}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'COPA'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">premise</span>
          <span class="col-sent">Choice 1</span>
          <span class="col-sent">Choice 2</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item['idx']}}</span>
          <span class="col-label">{{item['label']}}</span>
          <span class="col-sent">{{item['premise']}}</span>
          <span class="col-sent">{{item['choice1']}}</span>
          <span class="col-sent">{{item['choice2']}}</span>
      </div>
    </template>


    <template v-if="ds_name === 'WIC'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">word</span>
          <span class="col-label">label</span>
          <span class="col-sent">Sentence 1</span>
          <span class="col-sent">Sentence 2</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item['idx']}}</span>
          <span class="col-label">{{item['word']}}</span>
          <span class="col-label">{{item['label']}}</span>
          <span class="col-sent">{{item['sentence1'].replace(item['word'], `[${item['word']}]`)}}</span>
          <span class="col-sent">{{item['sentence2'].replace(item['word'], `[${item['word']}]`)}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'BOOLQ'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">passage</span>
          <span class="col-sent">question</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{item['idx']}}</span>
          <span class="col-label">{{item['label']}}</span>
          <span class="col-sent">{{item['passage']}}</span>
          <span class="col-sent">{{item['question']}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'CMRC' || ds_name === 'DRCD'" v-for="(item, index) in items">
      <div class="row-block">

        <div class="title">{{item['title']}}</div>

        <template v-for="(row, ri) in item['paragraphs']">
          <div class="paragraph">
            <p>{{row['context']}}</p>

            <div v-for="(q, qi) in row['qas']">
              <p>{{q['question']}}</p>

              <div class="answers">
                <span v-for="(a, ai) in q['answers']">
                  <div>{{a['text']}}</div><div class="annotate-id">{{a['id']}}</div>
                </span>
              </div>

              <div class="answers">
                <span v-for="(a, ai) in q['answers']">
                  <div>{{a['answer_start']}}</div>
                </span>
              </div>

            </div>
          </div>

        </template>
      </div>
    </template>

    <template v-if="ds_name === 'MULTIRC'" v-for="(item, index) in items">
      <div class="row-block">
        <div class="paragraph">

          <div class=""><p>{{item['passage']['text']}}</p></div>

          <template v-for="(row, ri) in item['passage']['questions']">
            <div class="question">
              <p>{{row['question']}}</p>

              <div class="answers">
                <span class="answer" v-for="(a, ai) in row['answers']">
                  <div>{{a['text']}}</div><div class="annotate-id">{{a['label']}}</div>
                </span>
              </div>
            </div>
          </template>

        </div>
      </div>
    </template>

    <template v-if="ds_name === 'RECORD'" v-for="(item, index) in items">
      <div class="row-block">
        <div class="paragraph">
          <div class="">{{item['source']}}</div>
          <div class=""><p>{{item['passage']['text']}}</p></div>

          <template v-for="(row, ri) in item['qas']">
            <div class="question">
              <p>{{row['query']}}</p>

              <div class="answers">
                <span class="answer" v-for="(a, ai) in row['answers']">
                  <div>{{a['text']}}</div><div class="annotate-id">{{a['label']}}</div>
                </span>
              </div>
            </div>
          </template>

        </div>
      </div>
    </template>

    <template v-if="ds_name === 'RACE'" v-for="(item, index) in items">
      <div class="row-block">
        <div class="paragraph">

          <div class=""><p>{{item['article']}}</p></div>

          <template v-for="(q, qi) in item['questions']">
            <div class="question">
              <p>{{q}}</p>

              <div class="options">
                <span class="option" v-for="(opt, opti) in item['options'][qi]">
                  <div>{{['A)', 'B)', 'C)', 'D)'][opti]}} {{opt}}</div>
                </span>
              </div>
              <div class="answer">{{item['answers'][qi]}}</div>
            </div>
          </template>

        </div>
      </div>
    </template>

    <template v-if="ds_name === 'SCITAIL'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">Sentence 1</span>
          <span class="col-sent">Sentence 2</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{index}}</span>
          <span class="col-label">{{item[2]}}</span>
          <span class="col-sent">{{item[0]}}</span>
          <span class="col-sent">{{item[1]}}</span>
      </div>
    </template>

    <template v-if="ds_name === 'WINOGRANDE'" v-for="(item, index) in [{}].concat(items)">
      <div v-if="index === 0" class="row row-head">
          <span class="col-index">index</span>
          <span class="col-label">label</span>
          <span class="col-sent">Sentence</span>
      </div>
      <div v-else class="row">
          <span class="col-index">{{index}}</span>
          <span class="col-label">{{`${item['option1']}${item['answer']==='1'?'(x)':''}, ${item['option2']}${item['answer']==='2'?'(x)':''}`}}</span>
          <span class="col-sent">{{item['sentence']}}</span>
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
  methods: {
    addLocation: function (text, ids) {
      ids.map(e => {
        text.splice(ids, 0, '@')
      })
      return text
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
p {
  line-height: 130%;
}
.title {
  font-weight: bold;
}
.paragraph {
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}
.d-list {
  .answers {
    margin-left: 2rem;
    color: #aaa;
    .annotate-id {
      margin-left: 1rem;
      font-size: 80%;
    }
    > span {
      margin-right: 1rem;
    }
    div {
      display: inline-block;
    }
  }
  .answer {
    display: inline-block;
    padding: 0.6rem 0;
    border-bottom: 2px solid #8e81ff8c;
  }
  .question {
    margin-left: 2rem;
  }
  .row {
    margin: 2em 0;
    font-size: 150%;
    display: flex;
  }
  .row-block {
    margin: 2em 0;
    font-size: 150%;
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
