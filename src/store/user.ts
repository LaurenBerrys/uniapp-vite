/*
 * @Author: Nie Chengyong
 * @Date: 2022-04-25 09:34:51
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 20:55:53
 */
import { defineStore } from 'pinia'
import {login} from '../api/user'
export const userStore = defineStore('user',{
  // state: 返回对象的函数
  state: ()=> (
       { user: {} }
  ),
  actions: {
      Login(data:any) {
			login(data)
		}
  }
});
