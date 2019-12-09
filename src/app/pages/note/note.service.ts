import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  getNoteData(): Observable<any> {
    return this.http.get(environment.urlPrefix+'/code/node/getAllNoteData');
  }

  constructor(public http:HttpClient) { }


  saveType(params): Observable<any> {
    return this.http.get(environment.urlPrefix+'/code/node/type/save', {params});
  }
}
