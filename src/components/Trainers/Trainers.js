/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainerOne.jpg";
import TrainerTwoBg from "../Image/trainerTwo.jpg";
import TrainerThreeBg from "../Image/trainerThree.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
      When you’re new to working out, or even if you’ve been working out for a
      while but never had professional help, it’s important to learn proper
      <br />
      form. Poor form can lead to injuries, and can also make your workouts less
      effective. A fitness professional will be able to show you the right way
      <br />
      to do each exercise so that you can stay safe and get the most out of your
      workout.
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Umesh Chaudhary"
        desc="He is a firefighter with impeccable passion and discipline toward fitness. Umesh is a five-time powerlifting champion and Mr India 2022 in bodybuilding.

"
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name=" Vishal Bhardwaj"
        desc="A fitness expert with a background in law, Vishal is driven by his desire to help others achieve their dream physique just like he has. He offers online and offline coaching to help his clients transform their bodies."
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Yoga Trainer"
        name="Isha Dhankar"
        desc="She is a fitness trainer, certified Yoga Coach, and Strength and Conditioning Coach. With 4+ years of experience in the industry, Isha offers mind-body connection-based fitness regimens."
        img={TrainerThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
