import { API_URL } from "@/shared/const";
import { apiRoutes } from "@/shared/lib/api";

export const fetchAccounts = async () => {
    const response = await fetch(API_URL + apiRoutes.user.list);
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch accounts");
    }
  
    const data = await response.json();
    console.log(data)
    return data; // Возвращаем только массив аккаунтов
};