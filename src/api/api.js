import axios from 'axios';

export const baseURL = 'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80';
export const username = "df";

const api = axios.create({
  baseURL: baseURL,
});

//다이어리 데이터 가져오기
export const postUsername = async (username) => {
  try {
    const encodedUsername = encodeURIComponent(username);
    const response = await api.post(`/Login/${encodedUsername}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};