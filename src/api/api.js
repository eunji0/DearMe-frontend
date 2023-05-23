import axios from 'axios';

export const baseURL = 'http://prod-dearme-api.ap-northeast-2.elasticbeanstalk.com:80';
export const username = "은지";

const api = axios.create({
  baseURL: baseURL,
});

//다이어리 데이터 가져오기
export const getDiaryByUsername = async (username) => {
  try {
    const encodedUsername = encodeURIComponent(username);
    const response = await api.get(`/diary/${encodedUsername}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
