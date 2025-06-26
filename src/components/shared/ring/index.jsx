import {
  OuterRing,
  InnerRing,
  Circle,
  PercentText,
  Consensus,
  MainRing,
} from "./styled";
import React from "react";

const VoteRing = ({
  percent,
  visible,
  className,
  style,
  size = 2.375,
  position,
}) => {
  const isValid = typeof percent === "number" && percent > 0;
  const rounded = isValid ? Math.round(percent) : null;

  return (
    <MainRing className={className} style={style}>
      <Consensus $visible={visible} $size={size} $position={position}>
        <OuterRing percent={rounded || 0} $size={size}>
          <InnerRing $size={size}>
            <Circle $size={size}>
              <PercentText $size={size}>
                {rounded ? (
                  <>
                    {rounded}
                    <span>%</span>
                  </>
                ) : (
                  "NR"
                )}
              </PercentText>
            </Circle>
          </InnerRing>
        </OuterRing>
      </Consensus>
    </MainRing>
  );
};

export default VoteRing;
