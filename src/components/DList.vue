<template>
  <div class="d-list">

    <template v-if="ds_name === 'WNLI'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">{{items[0][0]}}</th>
            <th class="col-label">{{items[0][3]}}</th>
            <th class="col-sent">{{items[0][1]}}</th>
            <th class="col-sent">{{items[0][2]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{item[0]}}</td>
              <td class="col-label">{{item[3]}}</td>
              <td class="col-sent">{{item[1]}}</td>
              <td class="col-sent">{{item[2]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'DIAGNOSTICS'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-index">{{items[0][1]}}</th>
            <th class="col-label">{{items[0][7]}}</th>
            <th class="col-sent">{{items[0][5]}}</th>
            <th class="col-sent">{{items[0][6]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
            <td class="col-index">{{index}}</td>
            <td class="col-index">{{item[1]}}</td>
            <td class="col-label">{{item[7]}}</td>
            <td class="col-sent">{{item[5]}}</td>
            <td class="col-sent">{{item[6]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'QNLI'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">{{items[0][0]}}</th>
            <th class="col-label">{{items[0][3]}}</th>
            <th class="col-sent">{{items[0][1]}}</th>
            <th class="col-sent">{{items[0][2]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{item[0]}}</td>
              <td class="col-label">{{item[3]}}</td>
              <td class="col-sent">{{item[1]}}</td>
              <td class="col-sent">{{item[2]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>


    <template v-if="ds_name === 'QQP'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">{{items[0][0]}}</th>
            <th class="col-label">{{items[0][5]}}</th>
            <th class="col-sent">{{items[0][3]}}</th>
            <th class="col-sent">{{items[0][4]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{item[0]}}</td>
              <td class="col-label">{{item[5]}}</td>
              <td class="col-sent">{{item[3]}}</td>
              <td class="col-sent">{{item[4]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'RTE'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">{{items[0][0]}}</th>
            <th class="col-label">{{items[0][3]}}</th>
            <th class="col-sent">{{items[0][1]}}</th>
            <th class="col-sent">{{items[0][2]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{item[0]}}</td>
              <td class="col-label">{{item[3]}}</td>
              <td class="col-sent">{{item[1]}}</td>
              <td class="col-sent">{{item[2]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'SST-2'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">{{items[0][1]}}</th>
            <th class="col-sent">{{items[0][0]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-label">{{index}}</td>
              <td class="col-sent">{{item[1]}}</td>
              <td class="col-sent">{{item[0]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'STS-B'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">{{items[0][0]}}</th>
            <th class="col-label">{{items[0][9]}}</th>
            <th class="col-sent">{{items[0][7]}}</th>
            <th class="col-sent">{{items[0][8]}}</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{item[0]}}</td>
              <td class="col-label">{{item[9]}}</td>
              <td class="col-sent">{{item[7]}}</td>
              <td class="col-sent">{{item[8]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>


    <template v-if="ds_name === 'DPR'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Premise</th>
            <th class="col-sent">Hypothesis</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items">
          <tr>
              <td class="col-index">{{item[1]}}</td>
              <td class="col-label">{{item[4]}}</td>
              <td class="col-sent">{{item[2]}}</td>
              <td class="col-sent">{{item[3]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>


    <template v-if="ds_name === 'CB' || ds_name === 'RTE-DIAGNOSTIC'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Premise</th>
            <th class="col-sent">Hypothesis</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items">
          <tr>
              <td class="col-index">{{item['idx']}}</td>
              <td class="col-label">{{item['label']}}</td>
              <td class="col-sent">{{item['premise']}}</td>
              <td class="col-sent">{{item['hypothesis']}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'COPA'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Premise</th>
            <th class="col-sent">Choice 1</th>
            <th class="col-sent">Choice 2</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items">
          <tr>
            <td class="col-index">{{item['idx']}}</td>
            <td class="col-label">{{item['label']}}</td>
            <td class="col-sent">{{item['premise']}}</td>
            <td class="col-sent">{{item['choice1']}}</td>
            <td class="col-sent">{{item['choice2']}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>


    <template v-if="ds_name === 'WIC'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Word</th>
            <th class="col-sent">Label</th>
            <th class="col-sent">Sentence 1</th>
            <th class="col-sent">Sentence 2</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items">
          <tr>
            <td class="col-index">{{item['idx']}}</td>
            <td class="col-label">{{item['word']}}</td>
            <td class="col-sent">{{item['label']}}</td>
            <td class="col-sent">{{item['sentence1'].replace(item['word'], `[${item['word']}]`)}}</td>
            <td class="col-sent">{{item['sentence2'].replace(item['word'], `[${item['word']}]`)}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'BOOLQ'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Passage</th>
            <th class="col-sent">Question</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items">
          <tr>
              <td class="col-index">{{item['idx']}}</td>
              <td class="col-label">{{item['label']}}</td>
              <td class="col-sent">{{item['passage']}}</td>
              <td class="col-sent">{{item['question']}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'CMRC' || ds_name === 'DRCD'" v-for="(item, index) in items">
      <div class="row-block">

        <h2 class="ui horizontal divider header">
          <i class="file outline icon"></i>
          {{item['title']}}
        </h2>

        <template v-for="(row, ri) in item['paragraphs']">
          <div class="paragraph">
            <p>{{row['context']}}</p>

            <h4 class="ui horizontal divider header">
              <i class="question circle outline icon"></i>
              Questions
            </h4>

            <div v-for="(q, qi) in row['qas']">
              <p class="question">{{q['question']}}</p>

              <div class="answers">
                <span class="answer" v-for="(a, ai) in q['answers']">
                  {{ai+1}}: {{a['text']}}<span>({{a['answer_start']}})</span>&nbsp;&nbsp;&nbsp;&nbsp;
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

          <h4 class="ui horizontal divider header">
            <i class="question circle outline icon"></i>
            Questions
          </h4>

          <template v-for="(row, ri) in item['passage']['questions']">
            <div class="question">
              <p>{{row['question']}}</p>

              <div class="answers">

                <div class="statement" v-for="(a, ai) in row['answers']">

                  <input type="checkbox" class="annotate-id" v-model="a.label"/>
                  <label>{{a['text']}}</label>

                </div>

              </div>
            </div>
          </template>

        </div>
      </div>
    </template>

    <template v-if="ds_name === 'RECORD'" v-for="(item, index) in items">
      <div class="row-block">
        <div class="paragraph">

          <h2 class="ui horizontal divider header">
            <i class="file outline icon"></i>
            {{item['source']}}
          </h2>

          <div class=""><p>{{item['passage']['text']}}</p></div>

          <h4 class="ui horizontal divider header">
            <i class="question circle outline icon"></i>
            Questions
          </h4>

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

          <h4 class="ui horizontal divider header">
            <i class="question circle outline icon"></i>
            Questions
          </h4>

          <template v-for="(q, qi) in item['questions']">
            <div class="questions">
              <div class="">{{q}} <span class="answer">{{item['answers'][qi]}}</span></div>

              <div class="options">
                <span class="option" v-for="(opt, opti) in item['options'][qi]">
                  <div>{{['A)', 'B)', 'C)', 'D)'][opti]}} {{opt}}</div>
                </span>
              </div>

            </div>
          </template>

        </div>
      </div>
    </template>

    <template v-if="ds_name === 'SCITAIL'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Sentence 1</th>
            <th class="col-sent">Sentence 2</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{index}}</td>
              <td class="col-label">{{item[2]}}</td>
              <td class="col-sent">{{item[0]}}</td>
              <td class="col-sent">{{item[1]}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'WINOGRANDE'">
      <table class="ui celled table">
        <thead>
          <tr>
            <th class="col-index">Index</th>
            <th class="col-label">Label</th>
            <th class="col-sent">Sentence</th>
        </tr></thead>

        <tbody>

          <template v-for="(item, index) in items.slice(1)">
          <tr>
              <td class="col-index">{{index}}</td>
              <td class="col-label">{{`${item['option1']}${item['answer']==='1'?'(x)':''}, ${item['option2']}${item['answer']==='2'?'(x)':''}`}}</td>
              <td class="col-sent">{{item['sentence']}}</td>
          </tr>
          </template>

        </tbody>
      </table>
    </template>

    <template v-if="ds_name === 'SWAG'" v-for="(item, index) in items.slice(1)">
      <div class="row-block">

        <div class="question">
          <p>{{item[2]}}...</p>

          <div class="options">
            <div class="option gold">{{item[3]}}</div>
            <div class="option">{{item[4]}}</div>
            <div class="option">{{item[5]}}</div>
            <div class="option">{{item[6]}}</div>
            <div class="option">{{item[7]}}</div>
          </div>

        </div>

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
  line-height: 120%;
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
    margin: 1rem 0;
    margin-left: 2rem;
    color: #aaa;
    .annotate-id {
      margin-left: 1rem;
      font-size: 80%;
    }
    > span {
      font-size: 0.8em;
      margin-right: 1em;
      line-height: 1.3em;
    }

  }
  .answer {
    display: inline-block;
    padding: 0.6rem 0;
    border-bottom: 2px solid #8e81ff8c;
  }
  .statement {
    margin: 1em 0;
  }
  .question {
    margin: 0;
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
  span.col-sent {
    line-height: 1.2em;
  }
  span.col-label {
    // font-size: 80%;
    color: #999;
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
  .options {
    margin: 0 0 1em 1em;
    color: #999;
  }
  .option {
    padding: 4px 0 4px 8px;
  }
  .option.gold {
    border-bottom: 2px solid RGBA(2, 184, 117, 0.50);
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
