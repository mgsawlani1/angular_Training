import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'camelcase'})
export class CamelCasePipe implements PipeTransform {
    transform(value: any): any {
        
    }
}