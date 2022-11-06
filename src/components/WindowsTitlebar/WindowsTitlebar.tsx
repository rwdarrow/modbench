import { useEffect, useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import { Group, Menu, Center, ActionIcon, Text } from "@mantine/core";
import {
  VscChromeMinimize,
  VscChromeMaximize,
  VscChromeRestore,
  VscChromeClose,
} from "react-icons/vsc";

import useStyles from "./WindowsTitlebar.styles";

interface TitlebarMenuProps {
  children?: React.ReactNode;
}

const TitlebarMenu: React.FC<TitlebarMenuProps> = ({ children }) => {
  return (
    <Menu trigger="hover" exitTransitionDuration={0}>
      {children}
    </Menu>
  );
};

interface TitlebarProps {
  menuItems?: object;
}

const WindowsTitlebar = ({ menuItems }: TitlebarProps) => {
  const { classes } = useStyles();
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    appWindow.isMaximized().then((value) => {
      setIsMaximized(value);
    });
  }, []);

  return (
    <div className={classes.titlebar}>
      <div data-tauri-drag-region className={classes.inner}>
        <div className={classes.titlebarGroup}>
          <Group spacing={0}>
            <img className={classes.icon} src="src-tauri\icons\icon.ico" />
            <TitlebarMenu>
              <Menu.Target>
                <a
                  href={""}
                  className={classes.menuItem}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.menuItemLabel}>
                      <Text fz="md">File</Text>
                    </span>
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item onClick={() => appWindow.close()}>Exit</Menu.Item>
              </Menu.Dropdown>
            </TitlebarMenu>
            <TitlebarMenu>
              <Menu.Target>
                <a
                  href={""}
                  className={classes.menuItem}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.menuItemLabel}>
                      <Text fz="md">View</Text>
                    </span>
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Exit</Menu.Item>
              </Menu.Dropdown>
            </TitlebarMenu>
            <TitlebarMenu>
              <Menu.Target>
                <a
                  href={""}
                  className={classes.menuItem}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.menuItemLabel}>
                      <Text fz="md">Tools</Text>
                    </span>
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Exit</Menu.Item>
              </Menu.Dropdown>
            </TitlebarMenu>
            <TitlebarMenu>
              <Menu.Target>
                <a
                  href={""}
                  className={classes.menuItem}
                  onClick={(event) => event.preventDefault()}
                >
                  <Center>
                    <span className={classes.menuItemLabel}>
                      <Text fz="md">Help</Text>
                    </span>
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>About</Menu.Item>
              </Menu.Dropdown>
            </TitlebarMenu>
          </Group>
        </div>
        <div className={classes.windowControls}>
          <ActionIcon
            className={classes.windowControl}
            onClick={() => appWindow.minimize()}
          >
            <VscChromeMinimize />
          </ActionIcon>
          <ActionIcon
            className={classes.windowControl}
            onClick={() => {
              appWindow.toggleMaximize();
              setIsMaximized(!isMaximized);
            }}
          >
            {isMaximized ? <VscChromeRestore /> : <VscChromeMaximize />}
          </ActionIcon>
          <ActionIcon
            className={classes.windowControl}
            sx={{
              "&:hover": {
                backgroundColor: "red",
              },
            }}
            onClick={() => appWindow.close()}
          >
            <VscChromeClose />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};

export default WindowsTitlebar;
