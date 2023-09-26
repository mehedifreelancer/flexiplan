import useMBCounter from "@/hooks/useMBCounter";

const Bubble = ({
  name,
  data,
  activeColor,
  activeItem,
  unit,
  clickedOnButton,
  eachEligibility,
}) => {
  // console.log(eachEligibility === undefined ? "Not" : "yes");
  return (
    <div>
      <button
        onClick={(event) => clickedOnButton(event, name, data)}
        style={{ backgroundColor: `${activeItem === data ? activeColor : ""}` }}
        className={`h-[56px] w-[56px] rounded-[50%]  p-0 text-white border ${
          eachEligibility == undefined && name !== "longevity" ? "disabled" : ""
        }`}
      >
        <span
          className={`${
            activeItem === data ? "text-white" : "text-black"
          } text-[11px]`}
        >
          {unit === "MB" ? useMBCounter(data) : data}
        </span>
      </button>
    </div>
  );
};

export default Bubble;
