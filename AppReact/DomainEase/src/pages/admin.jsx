import React, { useEffect, useState } from "react";
import Header from "../layouts/MainHeader";
import CardAdmin from "../components/CardAdmin";
import { getDomains, deleteDomainById } from "../api/managedomains";

const Admin = () => {
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

  const generateMockExpirationDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-background min-h-screen text-white flex flex-col items-center">
      <Header />
      <div className="mt-16 w-full max-w-screen-xl px-4">
        <h1 className="text-6xl font-afacad mb-8 text-center animate-fade-in">
          Admin Panel
        </h1>

        {/* Section des cartes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardAdmin
            title="Total DNS"
            stat={domains.length}
            description="This section shows the total number of DNS you have."
          />
          <CardAdmin
            title="DNS Disabled"
            stat="50"
            description="These DNS entries are currently disabled. You can re-enable them as needed."
          />
          <CardAdmin
            title="Total Users"
            stat="12"
            description="This section shows the total number of users."
          />
        </div>

        <div className="mt-12 w-full">
          <h2 className="text-3xl font-bold text-left mb-4">
            Latest Customers
          </h2>
          <div className="bg-background p-4 rounded-xl shadow-lg h-64 overflow-y-auto">
            <ul className="space-y-4">
              {domains.length > 0 ? (
                domains.slice(0, 5).map((domain) => (
                  <li
                    key={domain.id}
                    className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 overflow-hidden"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-gray-800">
                          {domain.name}
                        </span>
                        <span className="text-sm text-gray-400">
                          Expiration Date: {generateMockExpirationDate()}
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>No domains found.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
