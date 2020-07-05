import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

switch (process.env.NODE_ENV) {
    case "production":
        axios.defaults.baseURL = Vue.baseURL
        break;
    case "test":
        axios.defaults.baseURL = Vue.baseURL
        break;
    default:
        axios.defaults.baseURL = Vue.baseURL
        break;
}

axios.defaults.timeout = 10000;
// axios.defaults.withCredentials = true

/**
 * 设置请求格式
*/

// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//针对于psot请求体进行格式改变
// axios.defaults.transformRequest = data => qs.stringify(data);



/**
 * 拦截器
*/
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
}, error => {
    return Promise.reject(error)
});

axios.defaults.validateStatus = status => {
    //自定义相应成功的http状态码
    return /^(2|3)\d{2}$/.test(status)
}
axios.interceptors.response.use(response => {
    //只返回相应主体
    return response.data
}, error => {
    let { response } = error;
    if (response) {
        //服务器有返回结果
        switch (response.status) {
            case 401:
                alert("没有登录权限")
                break;
            case 403:
                alert("服务器拒绝请求：可能为token过期")
                break;
            case 404:
                alert("请求接口不存在")
                break;
            default:
                break
        }
    } else {
        //服务器没有返回结果 服务器崩了或客户端断网
        if (!window.navigator.onLine) {
            //断网
            alert("请链接网络")
            return
        }
        return Promise.reject(error)

    }

});



export default axios




