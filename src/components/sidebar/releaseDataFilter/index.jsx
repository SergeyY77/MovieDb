import {
  ReleaseFilter,
  ReleaseName,
  RealiseSearch,
  DateFilter,
  RealeaseLabel,
  SearchInput,
  SearchSpan,
  CalendarIcon,
  DateType,
  DateInput,
  InputWrapper,
  InputIcon,
} from "./styled";
import calendarIcon from "../../../assets/icons/filter-releases-data.svg";

const ReleaseDateFilter = () => {
  return (
    <ReleaseFilter>
      <ReleaseName>Release Dates</ReleaseName>

      <RealiseSearch>
        <RealeaseLabel>
          <SearchInput type="checkbox" defaultChecked />
          <SearchSpan>Search all releases?</SearchSpan>
        </RealeaseLabel>
      </RealiseSearch>

      <DateFilter>
        <RealeaseLabel>
          <DateType>from</DateType>
          <InputWrapper>
            <DateInput type="text" placeholder="" />
            <InputIcon>
              <CalendarIcon src={calendarIcon} alt="calendar" />
            </InputIcon>
          </InputWrapper>
        </RealeaseLabel>

        <RealeaseLabel>
          <DateType>to</DateType>
          <InputWrapper>
            <DateInput type="text" defaultValue="11/13/2025" />
            <InputIcon>
              <CalendarIcon src={calendarIcon} alt="calendar" />
            </InputIcon>
          </InputWrapper>
        </RealeaseLabel>
      </DateFilter>
    </ReleaseFilter>
  );
};

export default ReleaseDateFilter;
