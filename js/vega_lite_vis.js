// Vega-Lite chart specifications. This follows the studio style: define a variable
// for each .vg.json file, then embed it into its matching HTML div.

var vg_1 = "charts/line_students_over_time.vg.json";
vegaEmbed("#line_students_over_time", vg_1, { actions: false }).then(function(result) {
  // Access result.view here if needed.
}).catch(console.error);

var vg_2 = "charts/lollipop_top_countries.vg.json";
vegaEmbed("#lollipop_top_countries", vg_2, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_3 = "charts/waffle_top5_share.vg.json";
vegaEmbed("#waffle_top5_share", vg_3, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_4 = "charts/bump_country_ranking.vg.json";
vegaEmbed("#bump_country_ranking", vg_4, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_5 = "charts/australia_map_state.vg.json";
vegaEmbed("#australia_map_state", vg_5, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_6 = "charts/dotplot_state_per_capita.vg.json";
vegaEmbed("#dotplot_state_per_capita", vg_6, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_7 = "charts/small_multiples_state_trends.vg.json";
vegaEmbed("#small_multiples_state_trends", vg_7, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_8 = "charts/stacked_area_sector.vg.json";
vegaEmbed("#stacked_area_sector", vg_8, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_9 = "charts/heatmap_country_sector.vg.json";
vegaEmbed("#heatmap_country_sector", vg_9, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_10 = "charts/diverging_state_change.vg.json";
vegaEmbed("#diverging_state_change", vg_10, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_11 = "charts/slope_state_share.vg.json";
vegaEmbed("#slope_state_share", vg_11, { actions: false }).then(function(result) {
}).catch(console.error);
