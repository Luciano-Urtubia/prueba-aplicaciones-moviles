import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Monitoss } from './monitoss';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private storage: SQLiteObject;
  monitossList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlporter: SQLitePorter) { 
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'monitoss.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
        });
      });
    }

    dbState() {
      return this.isDbReady.asObservable();
    }
    fetchMonitoss(): Observable<Monitoss[]> {
      return this.monitossList.asObservable();
    }

    getFakeData() {
      this.httpClient.get(
        'assets/script.sql',{responseType: 'text'}
      ).subscribe(data => {
        this.sqlporter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getMonitoss();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

    getMonitoss(){
      return this.storage.executeSql('SELECT * FROM monitoss',[]).then(res => {
        let items: Monitoss[] = [];
        if(res.rows.length > 0)
        {
          for(var i=0; i < res.rows.length; i++)
          {
            items.push({
              id: res.rows.item(i).id,
              monito: res.rows.item(i).monito,
              estado_salud: res.rows.item(i).estado_salud
            });
          }
        }
        this.monitossList.next(items);
      });
    }
    addMonitoss(monito, estado_salud){
      let data =[monito, estado_salud];
      return this.storage.executeSql('INSERT INTO monitoss (MONITO, ESTADO_SALUD) VALUES (?,?)',data)
      .then(res => {
        this.getMonitoss();
      });
    }

    //obtener un vehiculo
    getmonitoss(id): Promise<Monitoss> {
      return this.storage.executeSql('SELECT * FROM monitoss WHERE ID = ?',[id])
      .then(res => {
        return {
          id: res.rows.item(0).id,
          monito: res.rows.item(0).monito,
          estado_salud: res.rows.item(0).estado_salud
        }
      });
    }

    updateMonitoss(id, monitoss:Monitoss){
      let data = [monitoss.monito, monitoss.estado_salud];
      return this.storage.executeSql(`UPDATE monitoss SET monito = ?, estado_salud = ? WHERE id = ${id}`,data)
      .then(_ => {
        this.getMonitoss();
      });
    }

    //eliminar
    deleteMonitoss(id) {
      return this.storage.executeSql('DELETE FROM monitoss WHERE id=?',[id])
      .then(_ => {
        this.getMonitoss()
      });
    }
}
