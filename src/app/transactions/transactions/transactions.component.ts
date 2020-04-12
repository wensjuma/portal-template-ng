import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  rowData: any;
  columnDefs: any
  constructor() { 
    this.rowData = [
      { code: 'Tr-9033', date: '12/02/2019 12:45', amount: 35000 },
      { code: 'Tr-5094', date: '13/02/2019 10:20', amount: 32000 },
      { code: 'Tr-3093', date: '14/02/2019 06:22', amount: 72000 }
  ];

  

    this.columnDefs = [
      {headerName: 'Transactions code', field: 'code', sortable: true, filter: true},
      {headerName: 'Date', field: 'date', sortable: true, filter: true},
      {headerName: 'Amount', field: 'amount', sortable: true, filter: true}
  ];
  }
  

  ngOnInit() {
  }

}
