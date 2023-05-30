import axios from 'axios';
import { json } from 'react-router-dom';

export const baseURL = 'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80';
export const username = "wooyun";

const api = axios.create({
  baseURL: baseURL,
});

//로그인 데이터 post
export const postUsername = async (username, password) => {
  try {
    const response = await api.post(`${baseURL}/user/login`, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//친구 추가
export const postFriadd = async (username, opponent) => {
  const newComment = {
    me: username,
    opponent: opponent,
  };
  try {
    const response = await api.post(`${baseURL}/friend/${username}/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//친구 검색
export const getFriadd = async (username, opponent) => {
  const newComment = {
    me: username,
    opponent: opponent,
  };
  try {
    const response = await api.post(`${baseURL}/friend/${username}/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//친구 삭제 
export const deleteFri = async (username, opponent) => {
  const newComment = {
    me: username,
    opponent: opponent,
  };
  try {
    const response = await api.post(`${baseURL}/friend/${username}/${opponent}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 시작시 친구목록 불러오기 
export const getFriList = async (username) => {
  const newComment = {
    me: username,
  };
  try {
    const response = await api.get(`${baseURL}/friend/my/${username}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};


