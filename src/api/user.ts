/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 20:43:24
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 20:56:36
 * @FilePath: /uniapp-vite/src/api/user.ts
 * @Description: 
 * 
 */
import request from '../utils/reques/request';
export const login= (data:any)=> {
	return request({
		url: '/user/login',
		method: 'POST',
		data
	})
}






