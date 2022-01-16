import React from "react";
import Statistics from "../statistics/Statistics";
import Notification from "../notification/Notification";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Section from "../section/Section";
import { MainSection } from "./Feedback.styled";

export default class Feedback extends React.Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
  };

  handleIncrement = (event) => {
    this.setState((prevState) => {
      return {
        [event]: prevState[event] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, netural, bad } = this.state;
    return good + netural + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const feedback = this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const { good, netural, bad } = this.state;
    return (
      <MainSection>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              netural={netural}
              bad={bad}
              total={total}
              feedback={feedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </MainSection>
    );
  }
}
