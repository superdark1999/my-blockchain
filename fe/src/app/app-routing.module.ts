import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { CreateWalletViewComponent } from './pages/create-wallet-view/create-wallet-view.component';
import { AuthSevice } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    component: CreateWalletViewComponent,
  },
  {
    path: 'home',
    component: BlockchainViewComponent,
    canLoad: [AuthSevice],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
