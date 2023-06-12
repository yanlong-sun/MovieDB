import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useState } from "react";
import TotopButton from "../other/ToTopButton";

function Layout(props) {
  const lightTheme = {
    "--background-color": "#fbfbfb",
    "--primary": "#FB4B4E",
    "--second": "#fc6f71",
    "--text-color": "#2A2B2E",
    "--text-color-second": "#3f4043",
    "--menu-option-hover": "#f2f2f2",
    "--navbar-bg": "rgba(251, 251, 251, 0.9)",
    // no need change as theme changes
    "--btn-hover": "#e2e2e2",
    "--btn-delete": "#ff4d4d",
    "--btn-delete-hover": "#ff9999",
    "--star-orange": "#ffb733",
    "--star-orange-darker": "#ffa500",
  };

  const darkTheme = {
    "--background-color": "#161618",
    "--primary": "#FB4B4E",
    "--second": "#fc6f71",
    "--text-color": "#fbfbfb",
    "--text-color-second": "#7d7d7d",
    "--menu-option-hover": "#7d7d7d",
    "--navbar-bg": "rgba(22, 22, 24, 0.9)",
    // no need change as theme changes
    "--btn-hover": "#e2e2e2",
    "--btn-delete": "#ff4d4d",
    "--btn-delete-hover": "#ff9999",
    "--star-orange": "#ffb733",
    "--star-orange-darker": "#ffa500",
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handler = {
    isDark: isDarkMode,
    setDark: setIsDarkMode,
  };
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div style={theme} className={classes.body}>
      <div className={classes.layoutContainer}>
        <MainNavigation handler={handler} className={classes.mainNav} />
        <main className={classes.main}>{props.children}</main>
        <TotopButton />
      </div>
    </div>
  );
}
export default Layout;
