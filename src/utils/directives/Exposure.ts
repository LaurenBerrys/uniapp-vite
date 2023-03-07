/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 21:00:03
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 21:15:15
 * @FilePath: /uniapp-vite/src/utils/directives/Exposure.ts
 * @Description: 
 */
//曝光指令
const exposure = {
  mounted(el:HTMLElement, binding:any) {
	const {proxy,relativeTo,observe}=binding.value
	if(proxy&&relativeTo&&observe){
		uni.createIntersectionObserver(proxy).relativeTo(relativeTo).observe(observe, (res) => {
		  console.log("qqqq",res);
		})
	}
  }
}
export default exposure
