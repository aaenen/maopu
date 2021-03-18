/**
 * @Author: aaenen
 * @Date: 2021-03-16 14:07:06
 * @LastEditTime: 2021-03-17 18:56:30
 * @LastEditors: aaenen
 * @Description: 与业务相关的方法
 * @FilePath: /maopu_manage/src/api/index.js
 * 打码不易，且行且珍惜！
 */
 import {get,post} from "./http";

 // 判断管理员是否登录成功
 export const getLoginStatus = (params) => post('admin/login/status',params);
