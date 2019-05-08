import { from, Subscriber, Observable } from 'rxjs'; 
import { multiply } from "./multiply"

console.clear();
const observable$ = from([1,2,3,4,5]);

const sub = {
  next: value => {
    console.log(value);
  },
  complete: () => {
    console.log('done');
  },
  error: error => {
    console.log(error);
  }
}

  // source => {
  //   const $o = new Observable();
  //   $o.source = source;
  //   $o.operator = {
  //     call(subscriber, source) {
  //       source.subscribe( new Sub2( sub ) )
  //     }
  //   }
  //   return $o
  // }


observable$.pipe(
  multiply(3)
).subscribe(sub);

observable$.pipe(
  multiply(7)
).subscribe(sub);

// const o$ = new Observable();
// o$.source = observable$;
// o$.operator = {
//   call(sub, source) {
//     source.subscribe(  new Sub2( sub )  )
//   }
// }

// o$.subscribe(sub);