/**
 * @Author: aaenen
 * @Date: 2021-03-15 15:50:10
 * @LastEditTime: 2021-03-17 18:53:59
 * @LastEditors: aaenen
 * @Description: http访问的工具类
 * @FilePath: /maopu_manage/src/api/http.js
 * 打码不易，且行且珍惜！
 */
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '../router';
axios.defaults.timeout = 5000;  //超时时间是5秒
axios.defaults.withCredentials = true;  //允许跨域
//Content-Type 响应头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//基础url
axios.defaults.baseURL = "http://localhost:8888";

//响应拦截器
axios.interceptors.response.use(
  response => {
    //如果reponse里面的status是200，说明访问到接口了，否则错误
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:       //未登录
          router.replace({
            path: '/',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        case 404:   //没找到
          break;
      }
      return Promise.reject(error.response);
    }
  }
);


/**
 * 封装get方法
 * @export 供外界访问
 * @param {*} url 传入一个不包括baseURL的url
 * @param {*} [params={}] 不传params的话默认为空
 * @return {*} 返回处理信息，正常访问then，出现异常catch err
 */
export function get(url, params = {}) {
  //new Promise 异步处理，可能会出现两种情况，正常访问then，出现异常catch err
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      })
  }).catch((e) => { });
}

/**
 * 封装post方法
 * @export 供外界访问
 * @param {*} url 传入一个不包括baseURL的url
 * @param {*} [data={}]
 * @return {*} 返回处理信息，正常访问then，出现异常catch err
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      })
  }).catch((e) => { });
}
