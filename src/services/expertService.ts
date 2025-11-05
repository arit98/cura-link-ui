export async function fetchExperts(): Promise<any[]> {
    const baseUrl = "https://curalink-backend-6uvv.onrender.com/api/v1";
    const res = await fetch(`${baseUrl}/experts`);
    if (!res.ok) {
      throw new Error(`Failed to fetch trials: HTTP ${res.status}`);
    }
    const data = await res.json();
    return data;
  }
  
  