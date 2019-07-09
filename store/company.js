import Axios from 'axios'

const CONFIG = {
    BASE_URL: 'https://www.zariance.com/api'
};

export const state = () => ({
    data: {},
    meta: {
        isLocal: true,
        lastRefreshTime: Date.now()
    }
})

export const mutations = {
    updateCompanyInfo(state, payload) {
        state.data = payload;
        state.meta = {
            isLocal: false,
            lastRefreshTime: Date.now()
        }
  }
}


export const actions = {
  async fetchCompanyInfo(context, payload = {}) {
    const {
      data
    } = await Axios.get(
      `${CONFIG.BASE_URL}/company.php?url=${payload.companyName}&source=cron`
    )
    context.commit('updateCompanyInfo', data)
  }
}
