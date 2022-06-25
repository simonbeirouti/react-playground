import {
  Filter,
  FilterControl,
  FilterLabel,
  FilterSelect,
} from "./ExpenseStyling";

export default function ExpenseFilter(props) {
  const yearChangeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <Filter>
      <FilterControl>
        <FilterLabel>Filter by year</FilterLabel>
        <FilterSelect value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </FilterSelect>
      </FilterControl>
    </Filter>
  );
}
