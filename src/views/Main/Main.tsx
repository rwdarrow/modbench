import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import WindowsTitlebar from "../../components/WindowsTitlebar";
import settingsStore from "../../store/settingsStore";

const Main = () => {
  const appContext = useContext(AppContext);
  return (
    <>
      <WindowsTitlebar />
      <div>{JSON.stringify(appContext)}</div>
      <input
        type="button"
        onClick={async () => {
          await settingsStore.set("test", { value: 23 });
        }}
      />
    </>
  );
};

export default Main;
