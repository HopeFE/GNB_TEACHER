import axios from 'config/http'
import * as _ from 'config/whole'

/** 纠错*/
export const postCorrect = ({ rootState,commit }, params) => {
  return new Promise((resolve, reject)=> { 
    axios({
      method:'post',
      url: 'correct',
      data: {
        "token":rootState.login.token,
        "id":rootState.route.params.id,
        "subject_id":rootState.route.params.subjectId,
        "studentId":rootState.route.params.studentId,
        "content":params.content,
        "type":params.type
      }
    })
    .then((response) => {
        _.toast("纠错成功");
        resolve(response);
    })
  });
}

