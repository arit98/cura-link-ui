export async function fetchAllPublications(): Promise<any[]> {
  const baseUrl = "https://curalink-backend-6uvv.onrender.com/api/v1";
  const res = await fetch(`${baseUrl}/publications/`);
  if (!res.ok) {
    throw new Error(`Failed to fetch publications: HTTP ${res.status}`);
  }
  const data = await res.json();
  return data;
}


