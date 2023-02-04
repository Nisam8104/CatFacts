const factApi = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const result = await response.text();
  const wholeData = JSON.parse(result);
  return wholeData.fact;
};
const breedsApi = async page => {
  const response = await fetch(`https://catfact.ninja/breeds?page=${page}`);
  const result = await response.text();
  const wholeData = JSON.parse(result);
  return wholeData.data;
};

export {factApi, breedsApi};
