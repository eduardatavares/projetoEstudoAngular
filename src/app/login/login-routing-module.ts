import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login.component';


const routes: Routes = [
  

    {
        path: '',
        component: LoginComponent
    },
  
 
];
export const RoutingModule = RouterModule.forRoot(routes);