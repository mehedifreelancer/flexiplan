import useLabelHelper from "@/hooks/useLabelHelper";
import Bubble from "./Bubble";
import Switch from "./Switch";
import ValidityInfo from "./ValidityInfo";

const ValidityBox = ({
  bubbleData,
  selectedData,
  clickedOnButton,
  dataEligibility,
}) => {
  const label = useLabelHelper(bubbleData.key);

  return (
    <div className="flex align-center  mt-[24px] border-0 border-b-[1px] pb-5 w-full">
      <div className="w-[45%]">
        <ValidityInfo
          planLabel={label}
          selectedValue={selectedData[bubbleData.key]}
        />
      </div>
      <div
        className={`flex flex-wrap gap-2 mt-[6px] text-right w-[55%] ${
          bubbleData.key === "mca" ? "justify-end" : ""
        }`}
      >
        {bubbleData.key !== "mca" ? (
          <>
            {bubbleData.data.map((item, index) => (
              <Bubble
                eachEligibility={
                  dataEligibility[bubbleData.key] !== undefined &&
                  dataEligibility[bubbleData.key][index]
                }
                clickedOnButton={clickedOnButton}
                key={index}
                name={bubbleData.key}
                activeColor={label.activeColor}
                activeItem={selectedData[bubbleData.key]}
                data={item}
                unit={label.unit}
              />
            ))}
          </>
        ) : (
          <Switch />
        )}
      </div>
    </div>
  );
};

export default ValidityBox;
