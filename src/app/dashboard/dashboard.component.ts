// GRIDSTER & ANGULAR
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GridsterConfig, GridsterItem, GridsterItemComponentInterface } from "angular-gridster2";
import { DashboardService } from "../services/dashboard.service";
import { DashboardModel } from "../../models/dashboard.model";

// COMPONENTS
import { LineChartComponent } from "../components/line-chart/line-chart.component";
import { RadarChartComponent } from "../components/radar-chart/radar-chart.component";
import { DoughnutChartComponent } from "../components/doughnut-chart/doughnut-chart.component";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
	constructor(private _route: ActivatedRoute, private _ds: DashboardService) {}

	protected options: GridsterConfig;
	protected dashboardId: number;
	protected dashboardCollection: DashboardModel;
	protected componentCollection = [
		{ name: "line_chart", componentInstance: LineChartComponent },
		{ name: "doughnut_chart", componentInstance: DoughnutChartComponent },
		{ name: "radar_chart", componentInstance: RadarChartComponent }
	];

	ngOnInit() {
		// Grid options
		this.options = {
			gridType: "fit",
			enableEmptyCellDrop: true,
			emptyCellDropCallback: this.onDrop,
			pushItems: true,
			swap: true,
			pushDirections: { north: true, east: true, south: true, west: true },
			resizable: { enabled: true },
			itemChangeCallback: this.itemChange.bind(this),
			draggable: {
				enabled: true,
				ignoreContent: true,
				dropOverItems: true,
				dragHandleClass: "drag-handler",
				ignoreContentClass: "no-drag",
			},
			displayGrid: "always",
			minCols: 10,
			minRows: 10
		};

		// We get the id in get current router dashboard/:id
		this._route.params.subscribe(params => {
			// + is used to cast string to int
			this.dashboardId = +params["id"];
			// We make a get request with the dashboard id
			this._ds.getDashboard(this.dashboardId).subscribe(dashboard => {
				// We fill our dashboardCollection with returned Observable
				this.dashboardCollection = dashboard;
				// We parse serialized Json to generate components on the fly
				this.parseJson(this.dashboardCollection);
			});
		});
	}

	// Super TOKENIZER 2.0 POWERED BY NATCHOIN
	parseJson(dashboardCollection: DashboardModel) {
		// We loop on our dashboardCollection
		dashboardCollection.dashboard.forEach(dashboard => {
			// We loop on our componentCollection
			this.componentCollection.forEach(component => {
				// We check if component key in our dashboardCollection
				// is equal to our component name key in our componentCollection
				if (dashboard.component === component.name) {
					// If it is, we replace our serialized key by our component instance
					dashboard.component = component.componentInstance;
				}
			});
		});
	}

	serializeJson(dashboardCollection: DashboardModel) {
		// We loop on our dashboardCollection
		dashboardCollection.dashboard.forEach(dashboard => {
			// We loop on our componentCollection
			this.componentCollection.forEach(component => {
				// We check if component key in our dashboardCollection
				// is equal to our component name key in our componentCollection
				if (dashboard.component === component.componentInstance) {
					// If it is, we replace our serialized key by our component instance
					dashboard.component = component.name;
				}
			});
		});
	}

	itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
		//this.serializeJson(this.dashboardCollection);
		this._ds.updateDashboard(this.dashboardId, this.dashboardCollection);
		console.log(this.dashboardCollection);
		console.info('itemChanged', item);
	}

	onDrop(ev) {
		const componentType = ev.dataTransfer.getData("widgetIdentifier");
		switch (componentType) {
			case "radar_chart":
				return this.dashboardCollection.dashboard.push({
					cols: 5,
					rows: 5,
					x: 0,
					y: 0,
					component: RadarChartComponent,
					name: "Radar Chart"
				});
			case "line_chart":
				return this.dashboardCollection.dashboard.push({
					cols: 5,
					rows: 5,
					x: 0,
					y: 0,
					component: LineChartComponent,
					name: "Line Chart"
				});
			case "doughnut_chart":
				return this.dashboardCollection.dashboard.push({
					cols: 5,
					rows: 5,
					x: 0,
					y: 0,
					component: DoughnutChartComponent,
					name: "Doughnut Chart"
				});
		}
	}

	changedOptions() {
		this.options.api.optionsChanged();
	}

	removeItem(item) {
		this.dashboardCollection.dashboard.splice(
			this.dashboardCollection.dashboard.indexOf(item),
			1
		);
	}
}
