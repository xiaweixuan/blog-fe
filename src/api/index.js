import axiosInstance from "../axiosInstance";
import { find } from "lodash-es";

export const getAllLifeArticle = function() {
  return axiosInstance({
    method: "GET",
    url: "/life/all"
  });
};

export const getArticleDetail = function(id) {
  return axiosInstance({
    method: "GET",
    url: "/life/detail?id=" + id
  });
};

export const getPhotos = function(id) {
  return axiosInstance({
    method: "GET",
    url: "/photos/all"
  });
};
const https = {
  async getUserMsg() {
    const {
      data: { data }
    } = await axiosInstance.get("user");
    return data[0];
  },
  async getArticles(params) {
    const {
      data: { data }
    } = await axiosInstance.get("articles", params);
    const { byId, allIds, blogIds, lifeIds } = {
      byId: {},
      allIds: [],
      blogIds: [],
      lifeIds: []
    };
    data &&
      data.forEach(item => {
        find(item.ArticleTypes, { name: "life" })
          ? lifeIds.push(item.id)
          : blogIds.push(item.id);
        byId[item.id] = item;
        allIds.push(item.id);
      });
    return { byId, allIds, blogIds, lifeIds };
  },
  async getPhotos(params) {
    const {
      data: { data }
    } = await axiosInstance.get("photos", params);
    const { byId, allIds } = { byId: {}, allIds: [] };
    data &&
      data.forEach(item => {
        if (item.type === 1) return;
        byId[item.id] = item;
        allIds.push(item.id);
      });
    return { byId, allIds };
  },
  async getAudios(params) {
    const {
      data: { data }
    } = await axiosInstance.get("audios", params);
    const { byId, allIds } = { byId: {}, allIds: [] };
    data &&
      data.forEach(item => {
        byId[item.id] = item;
        allIds.push(item.id);
      });
    return { byId, allIds };
  },
  async getScripts(params) {
    const {
      data: { data }
    } = await axiosInstance.get("scripts", params);
    return data;
  }
};

export default https;
