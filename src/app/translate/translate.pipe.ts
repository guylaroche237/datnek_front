import { Pipe, PipeTransform } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core'; // our translate service
import { TranslateService } from './translate.service';

@Pipe({
    name: 'translate',
})

export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) { }

    transform(value: string, args: any[]): any {
        if (!value) return;
        return this._translate.instant(value);
    }
}