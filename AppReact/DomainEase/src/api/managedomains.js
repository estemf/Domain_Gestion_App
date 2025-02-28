import axios from "axios";

export const createDomain = async (domain) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Creating domain with payload:", domain);
    const response = await axios.post(
      "http://localhost:3000/api/domains",
      domain,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Create domain response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating domain:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const checkIfDomainExists = async (name) => {
  try {
    const token = localStorage.getItem("token");
    console.log("Checking domain:", name);
    const response = await axios.get(
      `http://localhost:3000/api/domains/name/${name}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Check domain response:", response.data);
    return response.data.exists;
  } catch (error) {
    console.error(
      "Error checking domain:",
      error.response ? error.response.data : error.message
    ); // Log detailed error
    throw error;
  }
};

export const getDomains = async (userId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:3000/api/domains/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting domains:", error);
    throw error;
  }
};

export const deleteDomainById = async (domainId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `http://localhost:3000/api/domains/${domainId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting domains:", error);
    throw error;
  }
};
