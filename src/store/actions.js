import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

export default {
  async getAddress({commit, state}) {
    //发起异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个muitation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }

  },
  async getCategorys({commit}) {
    //发起异步ajax请求
    const result = await reqCategorys()
    //提交一个muitation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }

  },
  async getShops({commit, state}) {
    //发起异步ajax请求latitude
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交一个muitation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }

  }
}
