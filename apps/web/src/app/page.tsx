import { fetchDataFromAPI } from "@/lib/api";
import { cn } from "@my-better-t-app/ui/lib/utils";

const TITLE_TEXT = `Hey there! 👋`;

async function getHealthStatus() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/health`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Failed to fetch health status:", error);

    return {
      success: false,
      data: null,
      error: "Server unavailable",
    };
  }
}

export default async function Home() {
  const result = await getHealthStatus();
  const secureData = await fetchDataFromAPI("/api/secure-data");

  console.log({ secureData });

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <pre className="my-10 overflow-x-auto font-mono text-sm">
        {TITLE_TEXT}
      </pre>

      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>

          {result.success ? (
            <p>{result.data.status}</p>
          ) : (
            <p className="text-red-500">{result.error}</p>
          )}
        </section>

        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">Protected API Status</h2>
          <span
            className={cn(
              !secureData.success ? "text-red-500" : "text-green-500",
            )}
          >
            {secureData.success
              ? "You are logged in."
              : "You are not logged in."}
          </span>
        </section>
      </div>
    </div>
  );
}
