import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  titlebar: {
    width: "100vw",
  },
  icon: {
    margin: "0px 8px 0px 8px",
    height: 25,
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titlebarGroup: {
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
  },
  windowControls: {
    width: 150,
    height: 45,
    display: "flex",
  },
  windowControl: {
    width: 50,
    height: 45,
    borderRadius: 0,

    "&:hover": {
      backgroundColor: theme.colors.dark[5],
    },
  },
  menuItem: {
    lineHeight: 1,
    padding: 8,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.dark[0],

    "&:hover": {
      backgroundColor: theme.colors.dark[5],
    },
  },

  menuItemLabel: {
    marginRight: 5,
  },
}));

export default useStyles;
