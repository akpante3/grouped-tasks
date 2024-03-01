import ProgressBar from "@ramonak/react-progress-bar";

function AppProgreesBar({ value }: { value: number }) {
  return (
    <div data-testid="progress-bar-element">
      <ProgressBar completed={value} bgColor="#00B797" baseBgColor="#F2FBFA" />
    </div>
  );
}

export default AppProgreesBar;
