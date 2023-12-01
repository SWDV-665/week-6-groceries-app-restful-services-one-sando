import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class GroceryServiceService {

  // use behavior subject, initializes with value
  private dataChangeSubject = new BehaviorSubject<boolean>(false);
  public dataChanged$ = this.dataChangeSubject.asObservable();

  private apiUrl = "http://localhost:8080/api/groceries"
  public items: any = []

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Object[]>(this.apiUrl);
  }

  addItem(item: any) {
    console.log(this.apiUrl)
    this.http.post<[]>(this.apiUrl, item).subscribe(items => {
      this.items = items;
      this.dataChangeSubject.next(true);
    });
  }

  editItem(item: any, id: any) {
    console.log(`${this.apiUrl}/${id}`)
    this.http.put<[]>(`${this.apiUrl}/${id}`, item).subscribe(items => {
      this.items = items;
      this.dataChangeSubject.next(true);
    });
  }

  deleteItem(item: any) {
    console.log(item)
    this.http.delete<[]>(`${this.apiUrl}/${item._id}`).subscribe(items => {
      console.log(items)
      this.items = items;
      this.dataChangeSubject.next(true);
    });
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
  }
}
