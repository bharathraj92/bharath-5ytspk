import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Employee, employee } from './employee';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with sorting
 */
@Component({
  selector: 'test',
  styleUrls: ['test.css'],
  templateUrl: 'test.html'
})
export class TableSortingExample implements OnInit {
  displayedColumns = ['employeeName', 'employeeCode', 'Exp', 'edit', 'delete'];
  //employee:Employee[]= employee;
  dataSource = new MatTableDataSource(employee);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  name;
  code;
  exp;
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    //this.dataSource = this.employee;
    //this.dataSource.paginator = this.paginator;
  }

  onNavigate(employeeCode) {
    console.log(`employee code ${employeeCode}`);
  }

  filterEmployee(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.serviceAPI.getDataByFilter(value).subscribe(response => {
      this.dataSource = response['employee'];
    });
  }
  delete(id) {
    const data = this.dataSource.data;
    data.splice(id, 1);

    this.dataSource.data = data;
  }
  addEmp(name, code, exp) {
    const data = this.dataSource.data;
    data.push({
      id: 1,
      employeeName: name,
      employeeCode: code,
      Exp: exp
    });
    this.dataSource.data = data;
  }
  edit(element) {
    this.delete(element);
    this.name = element.employeeName;
    this.code = element.employeeCode;
    this.exp = element.Exp;
  }
}
