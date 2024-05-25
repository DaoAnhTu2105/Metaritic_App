import PropTypes from "prop-types";
import { Header } from "../Header";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <div style={{ height: "10vh" }}>
        <Header />
      </div>

      <div style={{ height: "90vh" }}>{children}</div>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
