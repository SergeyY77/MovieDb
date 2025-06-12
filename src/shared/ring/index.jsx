import { OuterRing, InnerRing, Circle, PercentText, Consensus } from "./styled";
import React from "react";

const VoteRing = ({ percent, visible, className, style }) => {
  const isValid = typeof percent === "number" && percent > 0;
  const rounded = isValid ? Math.round(percent) : null;

  return (
    <div className={className} style={style}>
      <Consensus visible={visible}>
        <OuterRing percent={rounded || 0}>
          <InnerRing>
            <Circle>
              <PercentText>
                {rounded !== null ? (
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
    </div>
  );
};

export default VoteRing;
