import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'professionalpipe'
})
export class ProfessionalpipePipe implements PipeTransform {

  transform(items:any[],searchText:String): any   {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Implement your custom filtering logic here based on the item properties
      return item.name.toLowerCase().includes(searchText) ||
             item.specialized.toLowerCase().includes(searchText)||
             item.ownername.toLowerCase().includes(searchText) ||
             item.place.toLowerCase().includes(searchText)
    });
  }

}
