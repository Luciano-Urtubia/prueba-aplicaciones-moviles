import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/service/db.service';

@Component({
  selector: 'app-monitoss',
  templateUrl: './monitoss.page.html',
  styleUrls: ['./monitoss.page.scss'],
})
export class MonitossPage implements OnInit {


  editForm : FormGroup;
  id : any;

  constructor(
    private db: DbService,
    private router: Router,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.db.getmonitoss(this.id).then(res => {
      this.editForm.setValue({
        monito: res['monito'],
        estado_salud: res['estado_salud']
      })
    })
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      monito: [''],
      estado_salud: ['']
    });
  }

  updateMonitoss() {
    this.db.updateMonitoss(this.id, this.editForm.value).then((res) => {
      console.log(res)
      this.router.navigate(['/crud-personajes']);
    });
  }
}
