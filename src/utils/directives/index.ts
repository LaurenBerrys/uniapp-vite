/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-07 21:00:03
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-07 21:00:25
 * @FilePath: /uniapp-vite/src/utils/directives/index.ts
 * @Description: 
 * 
 */
import exposure from './Exposure'
import buried from './Buried'
const directives = {
	buried,
    exposure
}
export default {
    install(app:any) {
        Object.keys(directives).forEach((key) => {
            //@ts-expect-error
            app.directive(key, directives[key])
        })
    },
}
