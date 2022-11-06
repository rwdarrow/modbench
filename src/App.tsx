import { useEffect, useState } from "react";
import { MantineProvider } from "@mantine/core";
import { AppContext } from "./contexts/AppContext";
import { OsType, type } from "@tauri-apps/api/os";

import settingsStore from "./store/settingsStore";

import Main from "./views/Main";
import GameSelect from "./views/GameSelect";

const App = () => {
  // TODO: testing context and settings store...move this into a proper place and clean it up
  const [osType, setOsType] = useState<OsType | undefined>(undefined);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [test, setTest] = useState<number>(345);

  useEffect(() => {
    const fetchOsType = async () => {
      const _type = await type();
      setOsType(_type);
    };

    const fetchSetting = async (setting: string) => {
      const data: any = await settingsStore.get(setting);
      if (data) {
        switch (setting) {
          case "isInitialized":
            setIsInitialized(data);
          case "test":
            setTest(data);
        }
      }
    };

    fetchOsType();
    fetchSetting("isInitialized");
    fetchSetting("test");
  }, []);

  return (
    <AppContext.Provider value={{ osType, isInitialized, test }}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              fontSizes: {
                xs: 10,
                sm: 12,
                md: 14,
                lg: 16,
                xl: 20,
              },
              backgroundColor: theme.colors.dark[7],
              color: theme.colors.dark[0],
              lineHeight: theme.lineHeight,
            },
          }),
        }}
      >
        <Main />
      </MantineProvider>
    </AppContext.Provider>
  );
};

export default App;
