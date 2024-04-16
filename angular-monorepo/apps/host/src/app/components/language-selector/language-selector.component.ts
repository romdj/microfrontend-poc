// language-selector.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {

  constructor(private translate: TranslateService) { }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}