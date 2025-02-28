import React, { useEffect, useState } from "react";
import Header from "../layouts/MainHeader";
import DomaineCard from "../components/domaineCard";
import { getDomains } from "../api/managedomains";

const DomainManagement = () => {
  const [domains, setDomains] = useState([]);

  const fetchDomains = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const data = await getDomains(userId);
        setDomains(data);
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  const handleRefresh = () => {
    fetchDomains();
  };

  return (
    <div className="bg-background min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-6xl font-afacad mb-8 text-center">
          Your domain name
        </h1>
        <div className="space-y-4">
          {domains.length > 0 ? (
            domains.map((domain) => (
              <DomaineCard
                key={domain.id}
                domainId={domain.id}
                title={domain.name}
                refreshDomains={handleRefresh}
              />
            ))
          ) : (
            <p>No domains found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainManagement;
