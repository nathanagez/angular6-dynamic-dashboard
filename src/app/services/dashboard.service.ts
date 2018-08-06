import { WidgetModel, DashboardModel } from '../../models/dashboard.model';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
	providedIn: "root"
})
export class DashboardService {
	constructor(private _http: HttpClient) {}

	// Return Array of WidgetModel
	getWidgets(): Observable<Array<WidgetModel>> {
		return this._http.get<Array<WidgetModel>>(`http://localhost:3000/widgets`);
	}

	// Return Array of DashboardModel
	getDashboards(): Observable<Array<DashboardModel>> {
		return this._http.get<Array<DashboardModel>>('http://localhost:3000/dashboards');
	}

	// Return an object
	getDashboard(id: number): Observable<DashboardModel> {
		return this._http.get<DashboardModel>(`http://localhost:3000/dashboards/${id}`);
	}

	// Update json
	updateDashboard(id: number, params): Observable<DashboardModel> {
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json'
			})
		};
		return this._http.put<DashboardModel>(`http://localhost:3000/dashboards/${id}`, params, httpOptions);
	}
}
