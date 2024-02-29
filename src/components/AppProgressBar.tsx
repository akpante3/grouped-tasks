import ProgressBar from "@ramonak/react-progress-bar";

function AppProgreesBar({value}:{value: number}) {
  return (
    <ProgressBar completed={value} bgColor="#00B797" baseBgColor="#F2FBFA" />
  );
}

export default AppProgreesBar;