import { arrow } from "../assets";

const Arrow = ({ location }) => (
  <img
    src={arrow}
    alt="Arrow icon"
    className="icon arrow"
    onClick={() => (window.location.href = location)}
  />
);

export default Arrow;
