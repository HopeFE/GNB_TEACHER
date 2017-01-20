import axios from 'config/http'
import * as _ from 'config/whole'
import * as types from './mutationTypes'

/** 获取用户通知*/
export const getInteract = ({ rootState,commit }) => {
   return new Promise((resolve, reject)=> { 
      axios({
        method: 'get',
        url: 'teacher/message',
        params: {
          token:rootState.login.token
        }
      })
      .then((response) => {
        commit(types.INTERACT,response.data);
        resolve(response);
      })
  });
}
