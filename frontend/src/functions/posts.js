import { Axios } from "../helpers/Axios";

export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = Axios.post(
      "/createPost",
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: `Bearer ${token}`,
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
