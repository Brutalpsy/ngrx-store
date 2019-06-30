import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  LoginAction = '[Auth] Login Action',
  LogoutAction = '[Auth] Logout Action',


}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(private payload: { user: User }) { }

}


export type AuthActions = Login;
