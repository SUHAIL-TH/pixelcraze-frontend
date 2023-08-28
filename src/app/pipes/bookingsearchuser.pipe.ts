import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingsearchuser'
})
export class BookingsearchuserPipe implements PipeTransform {

  transform(item:any[],searchText:string):any {
    if (!item) {
      return [];
    }
    if (!searchText) {
      return item;
    }
     searchText = searchText.toLowerCase();
     return item.filter(item => {
      return item.name.toLowerCase().includes(searchText) ||
             item.professional.name.toLowerCase().includes(searchText) ||
             item.event.toLowerCase().includes(searchText) ||
             item.professional.ownername.toLowerCase().includes(searchText);
    });
  }

}
