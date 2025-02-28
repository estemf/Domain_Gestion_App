export const searchDNS = async (query) => {
  const response = await fetch(
    `https://api.domainsdb.info/v1/domains/search?domain=${query}`
  );
  if (!response.ok) {
    throw new Error("Failed to search DNS");
  }
  const data = await response.json();
  return data.domains.map((domain) => ({
    id: domain.domain,
    name: domain.domain,
    available: domain.isDead ? "available" : "already used",
  }));
};
