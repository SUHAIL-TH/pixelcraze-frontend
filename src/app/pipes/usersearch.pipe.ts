import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersearch'
})
export class UsersearchPipe implements PipeTransform {

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
             item.email.toLowerCase().includes(searchText);
    });
  }

}
