import {
  ReleaseFilter,
  RealiseSearch,
  DateFilter,
  InputWrapper,
  InputIcon,
} from "./styled";
import calendarIcon from "../../../assets/icons/filter-releases-data.svg";

const ReleaseDateFilter = () => {
  return (
    <ReleaseFilter>
      <h3>Release Dates</h3>

      <RealiseSearch>
        <label>
          <input type="checkbox" defaultChecked />
          <span>Search all releases?</span>
        </label>
      </RealiseSearch>

      <DateFilter>
        <label>
          <p>from</p>
          <InputWrapper>
            <input type="text" placeholder="" />
            <InputIcon>
              <img src={calendarIcon} alt="calendar" />
            </InputIcon>
          </InputWrapper>
        </label>

        <label>
          <p>to</p>
          <InputWrapper>
            <input type="text" defaultValue="11/13/2025" />
            <InputIcon>
              <img src={calendarIcon} alt="calendar" />
            </InputIcon>
          </InputWrapper>
        </label>
      </DateFilter>
    </ReleaseFilter>
  );
};

export default ReleaseDateFilter;
