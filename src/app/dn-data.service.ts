import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DnDataService {

  constructor(private http: Http) { }

  getSpellData() {
    return this.http.get('assets/dnd_spells/spells.json')
      .map((res: Response) => res.json().jsonSpellData);
  }

}
