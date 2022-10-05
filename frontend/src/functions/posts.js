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
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data)
    return "ok";
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};
