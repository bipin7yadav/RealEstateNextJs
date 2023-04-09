import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '19d49732b3mshe53fe639fa87257p13fee9jsn998971964a98',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
  });
    
  return data;
}