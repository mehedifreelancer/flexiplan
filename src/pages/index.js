import Title from "@/components/Title";
import ValidityBox from "@/components/ValidityBox";
import { createContext, useEffect, useState } from "react";
export const GlobalData = createContext({});

export default function Home() {
  const [allData, setAllData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [eligibility, setEligibility] = useState();
  const [dayLimit, setDayLimit] = useState(3);
  // console.log(dayNo);

  const globalData = {
    selectedData,
    setSelectedData,
  };
  useEffect(() => {
    fetch("/json/bubble-map.json")
      .then((response) => response.json()) // Convert response to JSON {voice:[], bubble:[]}
      .then((data) => {
        var result = Object.keys(data).map(function (key) {
          return { key, data: data[key] };
        });
        setAllData(result);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });

    fetch("/json/selected-bubbles.json")
      .then((response) => response.json())
      .then((data) => {
        setSelectedData(data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/json/eligibility-map.json")
      .then((response) => response.json())
      .then((data) => {
        setEligibility(data[`day_${dayLimit}`]);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [dayLimit]);

  // -------------------------------------------

  const clickedOnButton = (event, name, data) => {
    event.preventDefault();
    setSelectedData((prevSelectedData) => ({
      ...prevSelectedData,
      [name]: data,
    }));
    if (name === "longevity") {
      //
    }
  };

  // console.log(eligibility);
  return (
    <GlobalData.Provider value={globalData}>
      <main className="container">
        <form className="grid grid-cols-12 gap-4 ">
          <div className=" col-span-9 mx-auto w-full p-2 ">
            <Title />
            {allData.map((item, index) => (
              <ValidityBox
                clickedOnButton={clickedOnButton}
                selectedData={selectedData}
                bubbleData={item}
                id={index}
                dataEligibility={
                  item.key === "mca" || item.key === "longevity"
                    ? {}
                    : eligibility
                }
              />
            ))}
          </div>

          <div className=" col-span-3 mx-auto w-full"></div>
        </form>
      </main>
    </GlobalData.Provider>
  );
}
