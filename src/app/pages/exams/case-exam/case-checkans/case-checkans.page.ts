import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-checkans',
  templateUrl: './case-checkans.page.html',
  styleUrls: ['./case-checkans.page.scss'],
})
export class CaseCheckansPage implements OnInit {
  data: Array<String>;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('data');
    this.data = this.dataService.getData(id);
  }

}
