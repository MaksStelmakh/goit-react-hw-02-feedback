import PropTypes from "prop-types";
import { Title } from "./Nitification.styled";

export default function Notification({ message }) {
  return <Title>{message}</Title>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
