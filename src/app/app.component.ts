import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// import { Observable } from 'rxjs';
// import * as fromRoot from '../app/components/ui/store/index';
// import {select, Store} from '@ngrx/store';
// import * as fromEmployees from './store';
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
// export class AppComponent implements OnInit {

//   currentPageTitle$: Observable<string>;
//   constructor(private store: Store<fromRoot.State>) {}

//   ngOnInit() {
//     this.currentPageTitle$ = this.store.pipe(
//       select(fromRoot.getCurrentTitle)
//     );
//   }
// }
