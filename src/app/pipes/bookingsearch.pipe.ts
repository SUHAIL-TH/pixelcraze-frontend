import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookingsearch'
})
export class BookingsearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
