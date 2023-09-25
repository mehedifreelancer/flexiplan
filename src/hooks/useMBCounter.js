const useMBCounter = (value) => {
  if (value < 1024) {
    return value + " MB";
  } else {
    const gigabytes = value / 1024;
    return gigabytes + " GB";
  }
};

export default useMBCounter;
