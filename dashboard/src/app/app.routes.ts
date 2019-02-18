import {HomeComponent} from "./pages/home/home.component";
import { ReportComponent } from './pages/report/report.component';

export const appRoutes=[
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
];