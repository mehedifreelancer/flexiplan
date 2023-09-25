import useMBCounter from "@/hooks/useMBCounter";

const ValidityInfo = ({ planLabel, selectedValue }) => {
  return (
    <div className="max-w-[60%]">
      <h2 className="text-[22px] font-semibold inline ">{planLabel.label}</h2>

      {<h2 className="text-[12px] text-[#767676] mt-1">{planLabel.type}</h2>}

      <h3
        className={`text-[20px] font-semibold`}
        style={{ color: `${planLabel.activeColor}` }}
      >{`${
        planLabel.unit === "MB" ? useMBCounter(selectedValue) : selectedValue
      } ${planLabel.unit !== "MB" ? planLabel.unit : ""}`}</h3>
      <h3 className="text-[16px] text-[#767676] mt-1 font-semibold">
        {planLabel.subLabel}
      </h3>
    </div>
  );
};

export default ValidityInfo;
