import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MeteoService } from 'src/app/service/meteo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  meteoForm = new FormGroup({
    city: new FormControl(''),
  });

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    let meteo = [];
    let res = this.meteoService.getMeteo(this.meteoForm.value.city).subscribe(
      weather => {
        console.log(weather);
      }
    )
  }
}
