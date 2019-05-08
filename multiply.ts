// import { Subscriber } from 'rxjs'; 

// class MultiplySubscriber extends Subscriber {
//   constructor(subscriber, number) {
//     super(subscriber);
//     this.number = number;
//   }
//   _next(value) {
//     //console.log(value * 2);
//     this.destination.next(value* this.number)
//   }
// }

// export const multiply = (number) => {
//   return (source) => {
//     return source.lift({
//       call(sub, source) {
//         source.subscribe( new MultiplySubscriber( sub, number ) )
//       }
//     });
//   }
// }

import {map}  from 'rxjs/operators'; 

export const multiply = 
  (number) => {
    return map(
      (value) => {
        return value * number
      }
    );
  }