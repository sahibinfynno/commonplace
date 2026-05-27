import { headers } from "next/headers";

export async function fetchDataFromAPI(route: string) {
  const incomingHeaders = await headers();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${route}`,
    {
      headers: {
        cookie: incomingHeaders.get("cookie") ?? "",
      },
      credentials: "include",
    },
  );

  return response.json();
}
