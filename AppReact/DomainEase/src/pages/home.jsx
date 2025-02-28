import React, { useEffect, useState } from "react";
import Header from "../layouts/mainHeader";
import SearchBar from "../components/searchBar";
import ListingCard from "../components/listingCard";
import BtnAddDomain from "../components/btnAddDomain";
import { getDomains } from "../api/managedomains";
import { mockDNS } from "../api/mockDNS";

const Home = () => {
  const [filteredDNS, setFilteredDNS] = useState([]);
  const [query, setQuery] = useState("");
  const [ownedDomains, setOwnedDomains] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDomains = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const data = await getDomains(userId);
        setOwnedDomains(data.map((domain) => domain.name));
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    }
  };

  useEffect(() => {
    fetchDomains();
    setFilteredDNS(mockDNS.slice(0, 12)); // Display the first 12 mock DNS entries
  }, []);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const results = mockDNS.filter((dns) =>
      dns.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredDNS(results.slice(0, page * 12)); // Limit to page * 12 results
  }, [query, page]);

  const checkDomainAvailability = (domainName) => {
    return ownedDomains.includes(domainName) ? "already used" : "available";
  };

  const handleCardClick = (domainName) => {
    setQuery(domainName);
  };

  const handleAddDomain = () => {
    setQuery("");
    setFilteredDNS(mockDNS.slice(0, 12)); // Reset to first 12 entries
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="bg-background min-h-screen text-white">
      <Header />
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-6xl font-afacad mb-8 text-center animate-bounce">
          Choose your domain name
        </h1>
        <div className="w-full max-w-xl mb-12 px-4">
          <div className="flex gap-4">
            <div className="flex-grow">
              <SearchBar
                onSearch={setQuery}
                setQuery={setQuery}
                query={query}
              />
            </div>
            <div className="flex-shrink-0">
              <BtnAddDomain
                query={query}
                className="h-full"
                onAddDomain={handleAddDomain}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-lg px-4">
          <ListingCard
            filteredDNS={filteredDNS}
            checkDomainAvailability={checkDomainAvailability}
            onCardClick={handleCardClick}
          />
        </div>
        {filteredDNS.length < mockDNS.length && (
          <button
            onClick={loadMore}
            className="mt-8 px-4 py-2 bg-accent text-white rounded-md shadow-md transition"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
