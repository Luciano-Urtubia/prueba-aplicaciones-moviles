import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-crud-personajes',
  templateUrl: './crud-personajes.page.html',
  styleUrls: ['./crud-personajes.page.scss'],
})
export class CrudPersonajesPage { 
  mainForm: FormGroup;
  Data: any[] = []

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res)
      {
        this.db.fetchMonitoss().subscribe(item => {
          this.Data = item
        })
      }
    });
    this.mainForm = this.formBuilder.group({
      monito: [''],
      estado_salud: ['']
    })
  }

  storeData(){
    this.db.addMonitoss(
      this.mainForm.value.monito,
      this.mainForm.value.estado_salud
    ).then((res) => {
      this.mainForm.reset();
    });
  }

  deleteMonitoss(id){
    this.db.deleteMonitoss(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Personaje eliminado',
        duration: 3000
      });
      toast.present()
    });
  }

}

