import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map((option) => {
    return (
      <Button
        type="button"
        name="option"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
