// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data

chart.data = [
 {
   "City": "Norcross",
   "Date": "2019/04/11 03:00",
   "Actual": 65.45,
   "Forecast": 65.81,
   "Difference": -0.36
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 04:00",
   "Actual": 62.79,
   "Forecast": 64.1,
   "Difference": -1.31
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 05:00",
   "Actual": 60.54,
   "Forecast": 63.04,
   "Difference": -2.5
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 06:00",
   "Actual": 60.48,
   "Forecast": 62.8,
   "Difference": -2.32
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 07:00",
   "Actual": 60.08,
   "Forecast": 62.19,
   "Difference": -2.11
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 08:00",
   "Actual": 60.08,
   "Forecast": 61.62,
   "Difference": -1.54
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 09:00",
   "Actual": 60.88,
   "Forecast": 60.08,
   "Difference": 0.8
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 10:00",
   "Actual": 60.65,
   "Forecast": 58.9,
   "Difference": 1.75
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 11:00",
   "Actual": 60.1,
   "Forecast": 57.95,
   "Difference": 2.15
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 12:00",
   "Actual": 60.14,
   "Forecast": 58.52,
   "Difference": 1.62
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 13:00",
   "Actual": 63.5,
   "Forecast": 61.8,
   "Difference": 1.7
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 14:00",
   "Actual": 67.9,
   "Forecast": 65.99,
   "Difference": 1.91
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 15:00",
   "Actual": 71.61,
   "Forecast": 69.61,
   "Difference": 2
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 16:00",
   "Actual": 74.56,
   "Forecast": 72.66,
   "Difference": 1.9
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 17:00",
   "Actual": 77.36,
   "Forecast": 74.81,
   "Difference": 2.55
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 18:00",
   "Actual": 79.4,
   "Forecast": 77.28,
   "Difference": 2.12
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 19:00",
   "Actual": 80.87,
   "Forecast": 78.98,
   "Difference": 1.89
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 20:00",
   "Actual": 81.14,
   "Forecast": 80.4,
   "Difference": 0.74
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 21:00",
   "Actual": 81.6,
   "Forecast": 80.4,
   "Difference": 1.2
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 22:00",
   "Actual": 81.11,
   "Forecast": 79.63,
   "Difference": 1.48
 },
 {
   "City": "Norcross",
   "Date": "2019/04/11 23:00",
   "Actual": 79.93,
   "Forecast": 76.92,
   "Difference": 3.01
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 00:00",
   "Actual": 78.1,
   "Forecast": 74.43,
   "Difference": 3.67
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 01:00",
   "Actual": 75.28,
   "Forecast": 72.41,
   "Difference": 2.87
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 02:00",
   "Actual": 73.35,
   "Forecast": 71.22,
   "Difference": 2.13
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 03:00",
   "Actual": 72.19,
   "Forecast": 72.7,
   "Difference": -0.51
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 04:00",
   "Actual": 71.15,
   "Forecast": 70.61,
   "Difference": 0.54
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 05:00",
   "Actual": 70.2,
   "Forecast": 68.47,
   "Difference": 1.73
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 06:00",
   "Actual": 68.88,
   "Forecast": 66.95,
   "Difference": 1.93
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 07:00",
   "Actual": 68.71,
   "Forecast": 66.43,
   "Difference": 2.28
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 08:00",
   "Actual": 68.36,
   "Forecast": 65.94,
   "Difference": 2.42
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 09:00",
   "Actual": 69.38,
   "Forecast": 65.3,
   "Difference": 4.08
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 10:00",
   "Actual": 68.89,
   "Forecast": 64.83,
   "Difference": 4.06
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 11:00",
   "Actual": 68.39,
   "Forecast": 64.58,
   "Difference": 3.81
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 12:00",
   "Actual": 67.34,
   "Forecast": 64.95,
   "Difference": 2.39
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 13:00",
   "Actual": 67.53,
   "Forecast": 65.78,
   "Difference": 1.75
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 14:00",
   "Actual": 68.85,
   "Forecast": 67.36,
   "Difference": 1.49
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 15:00",
   "Actual": 70.53,
   "Forecast": 69.44,
   "Difference": 1.09
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 16:00",
   "Actual": 72.59,
   "Forecast": 71.61,
   "Difference": 0.98
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 17:00",
   "Actual": 75.01,
   "Forecast": 74.13,
   "Difference": 0.88
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 18:00",
   "Actual": 76.9,
   "Forecast": 76.02,
   "Difference": 0.88
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 19:00",
   "Actual": 78.23,
   "Forecast": 77.47,
   "Difference": 0.76
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 20:00",
   "Actual": 78.68,
   "Forecast": 78.78,
   "Difference": -0.1
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 21:00",
   "Actual": 78.31,
   "Forecast": 79.68,
   "Difference": -1.37
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 22:00",
   "Actual": 77.74,
   "Forecast": 79.63,
   "Difference": -1.89
 },
 {
   "City": "Norcross",
   "Date": "2019/04/12 23:00",
   "Actual": 76.72,
   "Forecast": 78.22,
   "Difference": -1.5
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 00:00",
   "Actual": 74.03,
   "Forecast": 75.55,
   "Difference": -1.52
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 01:00",
   "Actual": 68.99,
   "Forecast": 72.89,
   "Difference": -3.9
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 02:00",
   "Actual": 66.35,
   "Forecast": 70.3,
   "Difference": -3.95
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 03:00",
   "Actual": 64.53,
   "Forecast": 68.62,
   "Difference": -4.09
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 04:00",
   "Actual": 62.93,
   "Forecast": 66.7,
   "Difference": -3.77
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 05:00",
   "Actual": 61.78,
   "Forecast": 65.97,
   "Difference": -4.19
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 06:00",
   "Actual": 60.87,
   "Forecast": 65.49,
   "Difference": -4.62
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 07:00",
   "Actual": 59.57,
   "Forecast": 64.26,
   "Difference": -4.69
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 08:00",
   "Actual": 58.91,
   "Forecast": 63.5,
   "Difference": -4.59
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 09:00",
   "Actual": 58.42,
   "Forecast": 62.53,
   "Difference": -4.11
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 10:00",
   "Actual": 59.43,
   "Forecast": 61.81,
   "Difference": -2.38
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 11:00",
   "Actual": 59.81,
   "Forecast": 61.31,
   "Difference": -1.5
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 12:00",
   "Actual": 61.07,
   "Forecast": 61.63,
   "Difference": -0.56
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 13:00",
   "Actual": 64.25,
   "Forecast": 63.64,
   "Difference": 0.61
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 14:00",
   "Actual": 67.17,
   "Forecast": 66.79,
   "Difference": 0.38
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 15:00",
   "Actual": 69.47,
   "Forecast": 70.1,
   "Difference": -0.63
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 16:00",
   "Actual": 71.64,
   "Forecast": 73.22,
   "Difference": -1.58
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 17:00",
   "Actual": 73.5,
   "Forecast": 75.82,
   "Difference": -2.32
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 18:00",
   "Actual": 75.66,
   "Forecast": 78.38,
   "Difference": -2.72
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 19:00",
   "Actual": 77.99,
   "Forecast": 80.03,
   "Difference": -2.04
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 20:00",
   "Actual": 79.12,
   "Forecast": 81.32,
   "Difference": -2.2
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 21:00",
   "Actual": 81.13,
   "Forecast": 81.66,
   "Difference": -0.53
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 22:00",
   "Actual": 81.78,
   "Forecast": 81.45,
   "Difference": 0.33
 },
 {
   "City": "Norcross",
   "Date": "2019/04/13 23:00",
   "Actual": 81.17,
   "Forecast": 79.55,
   "Difference": 1.62
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 00:00",
   "Actual": 78.72,
   "Forecast": 77.31,
   "Difference": 1.41
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 01:00",
   "Actual": 75.91,
   "Forecast": 75.65,
   "Difference": 0.26
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 02:00",
   "Actual": 74.66,
   "Forecast": 74.12,
   "Difference": 0.54
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 03:00",
   "Actual": 73.55,
   "Forecast": 73.08,
   "Difference": 0.47
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 04:00",
   "Actual": 54.3,
   "Forecast": 53.83,
   "Difference": 0.47
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 05:00",
   "Actual": 52.77,
   "Forecast": 51.42,
   "Difference": 1.35
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 06:00",
   "Actual": 51.79,
   "Forecast": 49.66,
   "Difference": 2.13
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 07:00",
   "Actual": 50.91,
   "Forecast": 48.26,
   "Difference": 2.65
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 08:00",
   "Actual": 49.76,
   "Forecast": 47.15,
   "Difference": 2.61
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 09:00",
   "Actual": 48.55,
   "Forecast": 45.79,
   "Difference": 2.76
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 10:00",
   "Actual": 46.8,
   "Forecast": 44.41,
   "Difference": 2.39
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 11:00",
   "Actual": 45.46,
   "Forecast": 43.14,
   "Difference": 2.32
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 12:00",
   "Actual": 45.41,
   "Forecast": 42.95,
   "Difference": 2.46
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 13:00",
   "Actual": 46.89,
   "Forecast": 44.78,
   "Difference": 2.11
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 14:00",
   "Actual": 49.02,
   "Forecast": 48,
   "Difference": 1.02
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 15:00",
   "Actual": 52.39,
   "Forecast": 51.1,
   "Difference": 1.29
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 16:00",
   "Actual": 54.96,
   "Forecast": 54.26,
   "Difference": 0.7
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 17:00",
   "Actual": 57.04,
   "Forecast": 57.49,
   "Difference": -0.45
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 18:00",
   "Actual": 59.83,
   "Forecast": 60.24,
   "Difference": -0.41
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 19:00",
   "Actual": 62.34,
   "Forecast": 63.24,
   "Difference": -0.9
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 20:00",
   "Actual": 63.79,
   "Forecast": 65.67,
   "Difference": -1.88
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 21:00",
   "Actual": 65.11,
   "Forecast": 67.34,
   "Difference": -2.23
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 22:00",
   "Actual": 65.57,
   "Forecast": 67.1,
   "Difference": -1.53
 },
 {
   "City": "Norcross",
   "Date": "2019/04/14 23:00",
   "Actual": 64.69,
   "Forecast": 65.35,
   "Difference": -0.66
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 00:00",
   "Actual": 62.32,
   "Forecast": 62.62,
   "Difference": -0.3
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 01:00",
   "Actual": 57.75,
   "Forecast": 59.87,
   "Difference": -2.12
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 02:00",
   "Actual": 54.61,
   "Forecast": 56.59,
   "Difference": -1.98
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 03:00",
   "Actual": 52.12,
   "Forecast": 54.57,
   "Difference": -2.45
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 04:00",
   "Actual": 48.94,
   "Forecast": 52.46,
   "Difference": -3.52
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 05:00",
   "Actual": 46.98,
   "Forecast": 50.93,
   "Difference": -3.95
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 06:00",
   "Actual": 45.3,
   "Forecast": 49.76,
   "Difference": -4.46
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 07:00",
   "Actual": 44.1,
   "Forecast": 48.62,
   "Difference": -4.52
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 08:00",
   "Actual": 42.97,
   "Forecast": 47.68,
   "Difference": -4.71
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 09:00",
   "Actual": 43.05,
   "Forecast": 46.5,
   "Difference": -3.45
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 10:00",
   "Actual": 42.68,
   "Forecast": 45.17,
   "Difference": -2.49
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 11:00",
   "Actual": 42.12,
   "Forecast": 43.8,
   "Difference": -1.68
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 12:00",
   "Actual": 44.41,
   "Forecast": 44.9,
   "Difference": -0.49
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 13:00",
   "Actual": 52.46,
   "Forecast": 49.44,
   "Difference": 3.02
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 14:00",
   "Actual": 57.4,
   "Forecast": 56.02,
   "Difference": 1.38
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 15:00",
   "Actual": 61.23,
   "Forecast": 62.07,
   "Difference": -0.84
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 16:00",
   "Actual": 64.64,
   "Forecast": 65.87,
   "Difference": -1.23
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 17:00",
   "Actual": 67.29,
   "Forecast": 69.27,
   "Difference": -1.98
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 18:00",
   "Actual": 69.93,
   "Forecast": 71.98,
   "Difference": -2.05
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 19:00",
   "Actual": 72.4,
   "Forecast": 74.89,
   "Difference": -2.49
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 20:00",
   "Actual": 74.36,
   "Forecast": 76.92,
   "Difference": -2.56
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 21:00",
   "Actual": 75.76,
   "Forecast": 78.08,
   "Difference": -2.32
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 22:00",
   "Actual": 74.94,
   "Forecast": 77.51,
   "Difference": -2.57
 },
 {
   "City": "Norcross",
   "Date": "2019/04/15 23:00",
   "Actual": 75.2,
   "Forecast": 75.52,
   "Difference": -0.32
 }];
 
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";


var legend = new am4charts.Legend();
legend.isMeasured = true;
legend.y = am4core.percent(100);
legend.verticalCenter = "bottom";
legend.parent = chart.chartContainer;
legend.data = [{
"name": "Difference of Actual Weather",
"fill": chart.colors.getIndex(0)
}];                           

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.startLocation = 0.5;
dateAxis.endLocation = 0.5;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Difference";
series.dataFields.dateX = "Date";
series.strokeWidth = 3;
series.tooltipText = "{valueY.value}";
series.fillOpacity = 0.1;

// Create a range to change stroke for values below 0
var range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = -1000;
range.contents.stroke = chart.colors.getIndex(4);
range.contents.fill = range.contents.stroke;
range.contents.strokeOpacity = 0.7;
range.contents.fillOpacity = 0.1;

// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.scrollbarX = new am4core.Scrollbar();