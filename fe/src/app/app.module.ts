import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewComponent } from './pages/blockchain-view/blockchain-view.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { CusTomTime } from './pipe/customTime.pipe';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { FormsModule } from '@angular/forms';
import { CreateWalletViewComponent } from './pages/create-wallet-view/create-wallet-view.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewComponent,
    BlockViewComponent,
    CusTomTime,
    TransactionTableComponent,
    CreateWalletViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzMessageModule,
    BrowserAnimationsModule,
  ],
  exports: [CusTomTime],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
