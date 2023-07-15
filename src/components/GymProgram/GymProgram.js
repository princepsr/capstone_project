/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="You’ll begin the program with a full-body training split, meaning you’ll train all major bodyparts in each workout (as opposed to “splitting up” your training). Train three days this first week, performing just one exercise per bodypart in each session."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="The first step to increasing your overall strength is getting strong one side at a time. This approach might seem unproductive, since working more muscle (not less) tends to produce the most marked results in strength and mass."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="It’s more than an adage, it’s a fact: If you want to get stronger, you have to train heavy. Specifically, weight loads that produce muscle failure at or less than seven reps are ideal for producing strength. But that doesn’t mean high-rep sets have no place in your routine."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Yoga and strength training both have their benefits and strong points. One isn’t necessarily better than the other, but when put together, they’re perfect counterparts. Yoga makes you a better lifter, and lifting improves your practice of yoga."
      />
      <GymProgramCard
        title="Advanced Training Course"
        desc="Most workout programs have you train a muscle once a week, to ensure it recovers and adapts to the training. Advanced training suggests you train a muscle twice a week, since muscles need 48 hours to recover."
      />
      <GymProgramCard
        title="Body Building Course"
        desc="This course examines the fundamental concepts of bodybuilding, which is the use of progressive resistance exercise for aesthetic muscle hypertrophy. We explore muscle anatomy and composition to explain the science of exercise."
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
