import {
  MainSort,
  SortTable,
  SortImage,
  SortSpan,
  SortResults,
  SortName,
  SortPopularity,
  SortSelected,
  SortArrow,
  DropdownOptions,
  Option,
} from "./styled";
import sortArrow from "../../../assets/icons/main-sort-arrow.svg";
import descendingArrow from "../../../assets/icons/main-descending-arrow.svg";

const SortDropdown = ({
  selected,
  isOpen,
  showSortResults,
  toggleSortResults,
  toggleOpen,
  handleSelect,
  handleKeyDown,
  optionRefs,
  SORT_OPTIONS,
}) => (
  <MainSort>
    <SortTable onClick={toggleSortResults}>
      <SortSpan>Sort</SortSpan>
      <SortImage
        src={sortArrow}
        alt="filter-sort"
        $showSortResults={showSortResults}
      />
    </SortTable>

    {showSortResults && (
      <SortResults>
        <SortName>Sort Results By</SortName>
        <SortPopularity onClick={toggleOpen}>
          <SortSelected>{selected}</SortSelected>
          <SortArrow src={descendingArrow} alt="sort" />
          {isOpen && (
            <DropdownOptions>
              {SORT_OPTIONS.map((option, index) => (
                <Option
                  key={option}
                  ref={(el) => (optionRefs.current[index] = el)}
                  onClick={() => handleSelect(option)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                >
                  {option}
                </Option>
              ))}
            </DropdownOptions>
          )}
        </SortPopularity>
      </SortResults>
    )}
  </MainSort>
);

export default SortDropdown;
