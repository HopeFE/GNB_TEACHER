import Api from '../../config/httpdispatch'
import * as types from '../mutationTypes'
import * as _ from '../../config/whole'

/**清空列表 */
export const passListClear = ({ dispatch }) => {
  dispatch(types.PASS_LIST_CLEAR);
}

/**设置高度 */
export const setScoll = ({ dispatch },height) => {
  dispatch(types.PASS_LIST_SCOLLER,height);
}

/**获取弃题列表 */
export const getPassList = ({ dispatch }, params, success) => {
  Api.passList({
    data: params,
    ok: response => {
      dispatch(types.PASS_LIST, response.data);
      success&&success();
    },
    wrong: response => {
      _.toast(response.data.msg);
    }
  })
}


