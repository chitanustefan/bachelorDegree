import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  selected = 'ro';

  constructor(private router: Router,private translate: TranslateService){
    translate.setDefaultLang(this.selected);
  }

  ngOnInit(): void {
  }

  @Output() sidenavClose = new EventEmitter();

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }


  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
