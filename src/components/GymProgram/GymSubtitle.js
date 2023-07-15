/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const GymSubtitle = () => (
  <p css={styles}>
    In 2022, the first Fitness Edge club opened in Lucknow the Capital Of Uttar
    Pradesh. Over the next year and a half, Fitness Edge was present in over
    <br />
    6 cities, including Delhi making it a leader in the fitness industry. In
    2023, Fitness Edge India was acquired by cure.fit, India's
    <br />
    largest chain of fitness centres that offers energetic group workouts and
    multiple workout formats to choose from.
  </p>
);

const styles = css`
  background-color: beige;
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  @media (max-width: 700px) {
    padding: 0 40px;
    br {
      display: none;
    }
  }
`;

export default GymSubtitle;
