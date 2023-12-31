import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingsearch'
})
export class BookingsearchPipe implements PipeTransform {

  transform(item:any[],searchText:string): any {
     if (!item) {
      return [];
    }
    if (!searchText) {
      return item;
    }
     searchText = searchText.toLowerCase();
     return item.filter(item => {
      return item.name.toLowerCase().includes(searchText) ||
             item.housename.toLowerCase().includes(searchText) ||
             item.event.toLowerCase().includes(searchText) ||
             item.place.toLowerCase().includes(searchText);
    });

  }

}
