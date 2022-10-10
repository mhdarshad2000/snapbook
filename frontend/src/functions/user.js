import { Axios } from "../helpers/Axios";

export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await Axios.put(
      "/updateProfilePicture",
      {
        url,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};

export const updatecoverPicture = async (url, token) => {
  try {
    const { data } = Axios.put(
      "/updateCoverPicture",
      {
        url,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};

