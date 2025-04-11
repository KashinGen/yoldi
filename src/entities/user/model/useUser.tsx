import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, { credentials: "include" }).then((res) => res.json());

export function useUser() {
  const { data, error, mutate } = useSWR("/api/user", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}