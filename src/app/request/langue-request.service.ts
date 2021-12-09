import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../model/language';

@Injectable({
  providedIn: 'root'
})
export class LangueRequestService {
  
  private host:String="http://localhost:8080";

  constructor(private http: HttpClient) { }

  
  public saveLanguage(language:Language) :Observable<Language>{
    return this.http.post<Language>(this.host+"/api/user/save",language);
  }

  public updateLanguage(language:Language) :Observable<Language>{
    return this.http.put<Language>(this.host+"/api/user/update",language);
  }

  public findAllsLanguages() :Observable<Language[]>{
    return this.http.get<Language[]>(this.host+"/api/user/alls");
  }

  public deleteLanguage(id:number):Observable<void> {
    
    return this.http.delete<void>(this.host+"/api/user/delete/"+id);
  }
}
