
const factApi = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const result = await response.text();
    const wholeData = JSON.parse(result);
    return wholeData.fact;
  };

export {factApi}