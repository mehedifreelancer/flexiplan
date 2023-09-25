function useLabelHelper(keyName) {
  switch (keyName) {
    case "longevity":
      return {
        label: "Validity",
        unit: "Days",
        type: "",
        subLabel: "",
        activeColor: "#76c779",
      };
    case "data":
      return {
        label: "Internet",
        unit: "MB",
        type: "",
        subLabel: "Regular",
        activeColor: "#76c779",
      };
    case "fourg":
      return {
        label: "4G Internet",
        unit: "MB",
        type: "4G Only",
        subLabel: "4G enabled handset + SIM required",
        activeColor: "#76c779",
      };
    case "voice":
      return {
        label: "Minutes",
        unit: "Min",
        type: "",
        subLabel: "Any Local Number",
        activeColor: "#ee395a",
      };
    case "bioscope":
      return {
        label: "Bioscope",
        unit: "MB",
        type: "",
        subLabel: "Only used to watch Bioscope",
        activeColor: "#c34ab7",
      };
    case "sms":
      return {
        label: "SMS",
        unit: "SMS",
        type: "",
        subLabel: "",
        activeColor: "#4abbc3",
      };
    case "mca":
      return {
        label: "Missed Call Alert",
        unit: "",
        type: "",
        subLabel: "Validity: 30 days",
        activeColor: "",
      };

    default:
      return "Did not matched ";
  }
}

export default useLabelHelper;
