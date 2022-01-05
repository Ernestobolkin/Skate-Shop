import axios from "axios";

const mokeApi = axios.create({
  baseURL: "https://61cb633c194ffe0017788d2e.mockapi.io/",
});

export class MoackApi {
  static getProductsData = async () => {
    const { data } = await mokeApi.get("skate");
    return data;
  };

  static deleteItem = async (id) => {
    await mokeApi.delete("shoes/" + id);
  };

  static getItem = async (id) => {
    return await mokeApi.get("shoes/" + id);
  };

  static updateItem = async (id, item) => {
    await mokeApi.put(`shoes/${id}`, item);
  };

  static AddItem = async (item) => {
    await mokeApi.post(`skate`, item);
  };
}
