/**
 * @Author: aaenen
 * @Date: 2021-03-16 14:53:05
 * @LastEditTime: 2021-03-16 15:18:48
 * @LastEditors: aaenen
 * @Description:
 * @FilePath: /maopu_manage/src/mixins/index.js
 * 打码不易，且行且珍惜！
 */
export const mixin = {
    methods: {
        //提示信息
        notify(title, type) {
            this.$notify({
                title: title,
                type: type
            })
        }
    }
}
