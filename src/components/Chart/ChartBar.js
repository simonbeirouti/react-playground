import {
  EachChartBar,
  InnerChartBar,
  FillChartBar,
  ChartBarLabel,
} from "./ChartStyling";

export default function ChartBar(props) {
  let barFilledHeight = "0%";

  if (props.maxValue > 0) {
    barFilledHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <EachChartBar>
      <InnerChartBar>
        <FillChartBar style={{ height: barFilledHeight }}></FillChartBar>
      </InnerChartBar>
      <ChartBarLabel>{props.label}</ChartBarLabel>
    </EachChartBar>
  );
}
