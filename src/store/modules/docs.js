import request from 'superagent'
// import jsonp from 'superagent-jsonp'

const state = {
  perPage: 200,
  page: 1,

  _data: [],
  data: [],
  dataset: ''
}

const datasetUri = {
  'WNLI': 'WNLI/dev.tsv',
  'QNLI': 'QNLI/dev.tsv',
  'QQP': 'QQP/dev.tsv',
  'RTE': 'RTE/dev.tsv',
  'SST-2': 'SST-2/dev.tsv',
  'STS-B': 'STS-B/dev.tsv',
  'DIAGNOSTICS': 'diagnostics/diagnostic-full.tsv'
}

const parseTsv = (content) => {
  return content.split('\n').map((row) => row.split('\t'))
}

const mutations = {
  loadDataset (state, payload) {
    state.page = 1
    state._data = parseTsv(payload.res)
    state.data = state._data.slice(0, state.page * state.perPage)
    state.dataset = payload.name.split('/')[0].toUpperCase()
    state.page += 1
  },
  loadMoreRows (state, payload) {
    state.data = state._data.slice(0, state.page * state.perPage)
    state.page += 1
  },
  querySentence (state, payload) {
    if (payload.queryStr.length < 3) return
    state.data = state._data.filter((row) => {
      return row.filter((col) => {
        return col.indexOf(payload.queryStr) > -1
      }).length > 0
    })
  }
}

const actions = {
  loadDataset ({commit, state}, payload) {
    if (state.noMore) return
    request
      .get(`/static/data/${datasetUri[payload.name]}`)
      // .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadDataset',
            res: res.text,
            name: payload.name
          })
        }
      })
  },
  loadMoreRows ({commit, state}, payload) {
    commit({
      type: 'loadMoreRows'
    })
  },
  querySentence ({commit, state}, payload) {
    commit({
      type: 'querySentence',
      queryStr: payload.queryStr
    })
  }
}

export default {
  state,
  mutations,
  actions
}
