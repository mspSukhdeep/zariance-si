import Axios from 'axios'

const CONFIG = {
  BASE_URL: 'https://www.zariance.com/api'
};


export const state = () => ({
  companies: {
    data: [],
    meta: {}
  },
  filters: [],
  meta: {
    isLocal: true,
    lastRefreshTime: Date.now()
  }
})


export const mutations = {
  updateCompanies(state, payload) {
    state.companies.data = payload.companies;
    state.companies.meta = {
      currentPage: payload.currentPage,
      totalPages: payload.totalRecords
    }
  },
  updateFilters(state, payload) {
    state.filters = payload.map(filterGroup => {
      let previousFilterObj = state.filters.find(filter => filter.name === filterGroup.name),
        searchTerm = '';
      if (previousFilterObj && previousFilterObj.search) {
        searchTerm = previousFilterObj.search;
      }

      filterGroup.search = searchTerm;
      return filterGroup;
    });
  },
  updateSearchTerm(state, payload) {
    state.filters = state.filters.map(filter => {
      if (filter.name === payload.name) {
        filter.search = payload.search
      }
      return filter;
    })
  }
}

export const actions = {
  async fetchData(context, payload = {}) {
    const queryParam = payload.queryParam ? '&' + payload.queryParam : '';
    const {
      data
    } = await Axios.get(
      `https://www.zariance.com/api/filters_data.php?source=cron2${queryParam}`
    )
    context.commit('updateCompanies', data)
  },
  async fetchFilters(context, payload = {}) {
    const queryParam = payload.queryParam ? '&' + payload.queryParam : '';

    const {
      data
    } = await Axios.get(
      `https://www.zariance.com/api/list_of_filters.php?${Date.now()}${queryParam}`
    )
    context.commit('updateFilters', data)
  }
}
