import { BehaviorSubject, Observable } from 'rxjs';

export class StoreService<T> {
  private _state$: BehaviorSubject<T>;
  state$: Observable<T>;
  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state() {
    return this._state$.getValue();
  }

  protected  setState(nextState:T){
    this._state$.next(nextState)
  }
}
