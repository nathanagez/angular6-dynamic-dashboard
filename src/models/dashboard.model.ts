export interface WidgetModel {
    name: string;
    identifier: string;
}

export interface DashboardContentModel {
    cols: number;
    rows: number;
    y: number;
    x: number;
    component?: any;
    name: string;
}

export interface DashboardModel {
    id: number;
    username: string;
    dashboard: Array<DashboardContentModel>;
}

export const WidgetsMock: WidgetModel[] = [
    {
        name: 'Radar Chart',
        identifier: 'radar_chart'
    },
    {
        name: 'Doughnut Chart',
        identifier: 'doughnut_chart'
    },
    {
        name: 'Line Chart',
        identifier: 'line_chart'
    }
]