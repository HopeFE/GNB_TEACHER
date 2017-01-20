import axios from 'config/http'
import * as types from './mutationTypes'
import * as _ from 'config/whole'

/** 修改密码*/
export const updatePwd = ({ rootState,commit },params) => {
	_.busy();
	return new Promise((resolve, reject)=> { 
		axios({
			method:'post',
			url: 'teacher/user/updatePwd',
			params: 
				_.toJson({
					"token":rootState.login.token,
					...params
				})
		})
		.then((response) => {
				localStorage.removeItem('token');
				_.leave();
				resolve(response);
		})
		.catch((error) => {
			 _.leave();
		})
	});
}

/** 检查版本*/
export const updateVersion = ({commit}) => {
	return new Promise((resolve, reject)=> { 
		axios({
			method:'get',
			url: 'teacher/updateVersion',
		})
		.then((response) => {
				commit(types.VERSION,response.data.data)
				resolve(response);
		})
	});
}

/** 提交反馈*/
export const updateAdvice = ({ rootState,commit }, params) => {
	return new Promise((resolve, reject)=> { 
			axios({
				method:'post',
				url: 'teacher/user/advice',
				data:_.toJson({"token":rootState.login.token,...params})
			})
			.then((response) => {
					_.toast("感谢您的反馈！");
					resolve(response);
			})
	});
}

/** 反馈列表*/
export const adviceHistory = ({ rootState,commit }, params) => {
		return new Promise((resolve, reject)=> { 
				axios({
					method:'get',
					url: 'teacher/user/adviceHistory',
					params: {
						"token":rootState.login.token,
					}
				})
				.then((response) => {
						commit(types.ADVICE_LIST, response.data.data);
						resolve(response);
				})
		});
}









