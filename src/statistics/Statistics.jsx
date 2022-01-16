import PropTypes from "prop-types";
import { Position, List, Elem, Text, TextSpan } from "./Statistics.styled";

export default function Statistics({ good, netural, bad, total, feedback }) {
  return (
    <Position>
      <List>
        <Elem>
          <Text>
            good:<TextSpan>{good}</TextSpan>
          </Text>
        </Elem>
        <Elem>
          <Text>
            Netural:<TextSpan>{netural}</TextSpan>
          </Text>
        </Elem>
        <Elem>
          <Text>
            Bad:<TextSpan>{bad}</TextSpan>
          </Text>
        </Elem>
        <Elem>
          <Text>
            Total:<TextSpan>{total || 0}</TextSpan>
          </Text>
        </Elem>
        <Elem>
          <Text>
            Positive feedback:<TextSpan>{feedback || 0}%</TextSpan>
          </Text>
        </Elem>
      </List>
    </Position>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  netural: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedback: PropTypes.number.isRequired,
};
