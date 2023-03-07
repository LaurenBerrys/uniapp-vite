/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 21:00:03
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 21:01:26
 * @FilePath: /uniapp-vite/src/utils/directives/Buried.ts
 * @Description: 
 * 
 */
import {watch} from'vue'
//埋点指令
const buried = {
  updated(el:HTMLElement, binding:any){
	  const {arg}=binding
	  const {name}=binding.value
	  console.log(arg,name);
  }
}
export default buried
