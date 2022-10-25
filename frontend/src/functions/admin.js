import { Axios } from "../helpers/Axios";
export const AllUsers = async (admin) => {
    const { data } = await Axios.get("/admin/getUsers", {
      headers: {
        Authorization: `Bearer ${admin.token}`,
      },
    });
    return data
  };