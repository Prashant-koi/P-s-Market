export default async function apifetch(name) {
  const API_KEY = import.meta.env.VITE_STOCKDATA_API_KEY;
  console.log('Fetching data for:', name); // Add this log
  
  try {
    const response = await fetch(`https://api.stockdata.org/v1/data/eod?symbols=${name}Q&api_token=${API_KEY}&page=4`);
    const data = await response.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}