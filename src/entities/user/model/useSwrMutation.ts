// src/hooks/useApiMutation.tsx
import useSWRMutation from "swr/mutation";

// Универсальный API-хук
export const useApiMutation = <T>(url: string) => {
  const fetcher = async (url: string, { arg }: { arg: T }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arg),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
    return response.json();
  };

  return useSWRMutation<T>(url, fetcher);
};
