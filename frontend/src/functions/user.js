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

export const addFriend = async (id, token) => {
  try {
    const { data } = await Axios.put(
      `addFriend/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const cancelRequests = async (id, token) => {
  try {
    const { data } = Axios.put(
      `cancelRequests/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const acceptRequset = async (id, token) => {
  try {
    const { data } = Axios.put(
      `acceptRequset/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const unFriend = async (id, token) => {
  try {
    const { data } = Axios.put(
      `unFriend/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const deleteRequest = async (id, token) => {
  try {
    const { data } = Axios.put(
      `deleteRequest/${id}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};