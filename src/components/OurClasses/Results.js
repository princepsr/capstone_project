/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Free Style Group Training"
        info="Our Freestyle Group Training (FGT) is a combination of three-dimensional training movements that will challenge your muscles to move you in the way nature intended. Each of the challenging FGT classes are designed to help you reach your goals, whilst improving your everyday movement ability. This creates a workout that gives maximum results whilst making everyday activities easier to undertake. With FGT each workout is different."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Cardio Training"
        info="Whether you want increased energy or reduced stress, cardio training (otherwise known as cardiovascular or CV training) helps you live a fitter life while strengthening your heart and lungs. From interval workouts to endurance exercises, cardio training can also help to lower blood pressure and cholesterol levels."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Strength Training"
        info="Shape your body and burn fat with strength training. With the right equipment such as free weights or resistance machines and advice from our experts, you can improve your overall health while increasing muscle and bone strength."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="One to One Training"
        info="Tailored specifically around your individual fitness, one-to-one personal training ensures you get the most out of every workout. Our expert personal trainers can offer support, advice and motivation to keep you on the right track."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media (max-width: 900px) {
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 62%;
  }
`;

export default Results;
