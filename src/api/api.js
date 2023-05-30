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

//친구 검색(전체 유저 목록임)
export const getFriSearch = async (opponent) => {
  const newComment = {
    opponent: opponent,
  };
  try {
    const response = await api.get(`${baseURL}/user/search/${opponent}`, newComment);
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
    const response = await api.delete(`${baseURL}/friend/delete/${username}/${opponent}`, newComment);
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

// 친구추가 알람 리스트 
export const getFriendAddList = async (username) => {
  const newComment = {
    me: username,
  };
  try {
    const response = await api.get(`${baseURL}/friend/yet/${username}`, newComment);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//다이어리 등록
export const postDiary = async () => {
  // const newComment = 
  // {
  //   color: backgroundColor,
  //   coordinateX: coordinateX,
  //   coordinateY: coordinateY,
  //   imageType: imageType,
  //   date: date,
  //   title: inputText,
  //   username: username
  // };
  // {
  //   color: backgroundColor,
  //   coordinateX: 0,
  //   coordinateY: 0,
  //   date: "string",
  //   imageType: "string",
  //   title: inputText,
  //   username: "wooyun"
  // }

  // console.log(newComment)
  try {
    const response = await api.post(`${baseURL}/diary`, newComment);
    console.log(response)
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//다이어리 보기
export const getDiary = async (username) => {
  try {
    const response = await axios.get(
      `${baseURL}/diary/${username}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};



//회원 수정
export const patchfixUser = async (userData) => {
  try {
    const response = await axios.patch(
      `${baseURL}/user/${username}`,
      userData
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};