import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from ".//RootLayout.module.css";
function RootLayout() {
  return (
    <>
      <MainNavigation />
      {/* defines where children route must be called */}
      <main  className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
