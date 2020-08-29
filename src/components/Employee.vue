<template>
  <line-chart
    :width="500"
    :height="300"
    :labels= "['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct','Nov', 'Dec']"
    :datasets="$options.datasets"
  ></line-chart>
</template>

<script>
import LineChart from './LineChart';

var datasets = [
  {
    label: 'Test Coverage',
    data: this.$store.state.chartData.testCoverage
  }
];

export default {
  name: 'Employee',
  datasets,
  components: {
    LineChart,
  }
}
</script>