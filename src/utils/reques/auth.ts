/*
 * @Author: Nie Chengyong
 * @Date: 2022-04-25 09:34:51
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 20:44:27
 */
const TokenKey = 'token';
// 认证令牌
export function getToken() {
	return uni.getStorageSync(TokenKey)
}
export function setToken(token:string) {
	return uni.setStorageSync(TokenKey, token)
}

export function removeToken() {
	return uni.removeStorageSync(TokenKey)
}
