import axios from '../utils/http'

export const getAllLifeArticle = function () {
    return axios({
        method: 'GET',
        url: '/life/all'
    })
}

export const getArticleDetail = function (id) {
    return axios({
        method: 'GET',
        url: '/life/detail?id='+id
    })
}



