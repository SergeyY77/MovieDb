import {
  Section,
  Label,
  LabelItem,
  Bar,
  Small,
  Big,
  BottomSmall,
  BottomBig,
  Slider,
  Line,
  LeftPoint,
  RightPoint,
  CenterPoint,
  Numbers,
} from "./styled";

import {
  USER_SCORE_LABELS,
  VOTES_LABELS,
  RUNTIME_LABELS,
  USER_SCORE_MARKERS,
  VOTES_MARKERS,
  RUNTIME_MARKERS,
} from "../constant";

const renderBars = (count, bigIndexes = []) =>
  Array.from({ length: count }, (_, i) =>
    bigIndexes.includes(i) ? <Big key={i} /> : <Small key={i} />
  );

const renderBottomBars = (count, bigIndexes = []) =>
  Array.from({ length: count }, (_, i) =>
    bigIndexes.includes(i) ? <BottomBig key={i} /> : <BottomSmall key={i} />
  );

const renderLabels = (labels) =>
  labels.map((label, idx) => (
    <LabelItem key={idx} $left={`${(100 / (labels.length - 1)) * idx}%`}>
      {label}
    </LabelItem>
  ));

const renderLabels2 = (labels) => {
  const positions = ["0%", "31%", "61%", "92%"];
  return labels.map((label, idx) => (
    <LabelItem key={idx} $left={positions[idx] || "0%"}>
      {label}
    </LabelItem>
  ));
};

const ScoreFilters = () => {
  return (
    <>
      <Section>
        <Label>User Score</Label>
        <>
          <Bar>{renderBars(USER_SCORE_MARKERS, [0, 5, 10])}</Bar>
          <Slider>
            <LeftPoint />
            <Line $percentage={100} />
            <RightPoint />
          </Slider>
          <Bar>{renderBottomBars(USER_SCORE_MARKERS, [0, 5, 10])}</Bar>
        </>
        <Numbers>{renderLabels(USER_SCORE_LABELS)}</Numbers>
      </Section>

      <Section>
        <Label>Minimum User Votes</Label>
        <>
          <Bar>{renderBars(VOTES_MARKERS, [0, 2, 4, 6, 8, 10])}</Bar>
          <Slider>
            <Line $percentage={20} />
            <CenterPoint percentage={20} />
          </Slider>
          <Bar>{renderBottomBars(VOTES_MARKERS, [0, 2, 4, 6, 8, 10])}</Bar>
        </>
        <Numbers>{renderLabels(VOTES_LABELS)}</Numbers>
      </Section>

      <Section>
        <Label>Runtime</Label>
        <>
          <Bar>{renderBars(RUNTIME_MARKERS, [0, 8, 16, 24])}</Bar>
          <Slider>
            <LeftPoint />
            <Line $percentage={100} />
            <RightPoint />
          </Slider>
          <Bar>{renderBottomBars(RUNTIME_MARKERS, [0, 8, 16, 24])}</Bar>
        </>
        <Numbers>{renderLabels2(RUNTIME_LABELS)}</Numbers>
      </Section>
    </>
  );
};

export default ScoreFilters;
