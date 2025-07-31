export async function fetchPropertiesClient() {
    const res = await fetch("/api/properties");
    const data = await res.json();
    return data;
  }
  