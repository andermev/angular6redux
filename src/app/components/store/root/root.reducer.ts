import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export interface RouterState {
  routerReducer: fromRouter.RouterReducerState<RouterStateURL>;
}

export const appReducer = {
  routerReducer: fromRouter.routerReducer,
};

export interface RouterStateURL {
  url: string;
  queryParams: Params;
  params: Params;
}

export const getRouterState = createFeatureSelector<RouterState>('routerReducer');

export class CustomSerialier implements fromRouter.RouterStateSerializer<RouterStateURL> {
  serialize(routerState: RouterStateSnapshot): RouterStateURL {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
