const useCheckeligibility = async (day_limit) => {
  await fetch("/json/eligibility-map.json")
    .then((response) => response.json())
    .then((data) => {
      const test = data[day_limit];
      return test;
    })
    .catch((error) => {
      console.error("Error fetching JSON data:", error);
    });
};

export default useCheckeligibility;
