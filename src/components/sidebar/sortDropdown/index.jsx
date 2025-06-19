import {
  MainSort,
  SortTable,
  SortImage,
  SortResults,
  SortPopularity,
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
  sortOptions,
}) => (
  <MainSort>
    <SortTable onClick={toggleSortResults}>
      <span>Sort</span>
      <SortImage
        src={sortArrow}
        alt="filter-sort"
        $showSortResults={showSortResults}
      />
    </SortTable>

    {showSortResults && (
      <SortResults>
        <h3>Sort Results By</h3>
        <SortPopularity onClick={toggleOpen}>
          <span>{selected}</span>
          <img src={descendingArrow} alt="sort" />
          {isOpen && (
            <DropdownOptions>
              {sortOptions.map((option, index) => (
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
