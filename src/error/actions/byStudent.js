import Api from '../../config/httpdispatch'
import * as types from '../mutationTypes'
import * as _ from '../../config/whole'

/**获取记错题IDS */
export const getErrorIds = ({ dispatch }, params, success) => {
  Api.error({
    data: params,
    ok: response => {
      dispatch(types.GET_ERROR_INDEXIDS, response.data);
      success&&success();
    },
    wrong: response => {
      _.toast(response.data.msg);
    }
  })
}

/**获取记错题列表 */
export const getErrorList = ({ dispatch }, params,success) => {
  Api.exerciseList({
    data: params,
    ok: response => {
      dispatch(types.GET_ERROR_INDEXLIST, response.data);
      success&&success();
    },
    wrong: response => {
      _.toast(response.data.msg);
    }
  })
}

/**更换科目 */
export const setSubject = ({ dispatch }, id) => {
    dispatch(types.ERROR_STUD_SUBJECT_CHANGE,id);
    dispatch(types.ERROR_STUD_RELOAD);
}

/**更换时间选项 */
export const setTabTime = ({ dispatch }, type) => {
    dispatch(types.ERROR_STUD_TAB_CHANGE,type);
}

/**设置高度 */
export const setScoll = ({ dispatch }, height) => {
    dispatch(types.ERROR_STUD_SCOLL,height);
}

/**清空错题本 */
export const clearError = ({ dispatch }) => {
    dispatch(types.ERROR_STUD_RELOAD);
}
