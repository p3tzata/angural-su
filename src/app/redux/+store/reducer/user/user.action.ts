import { createAction,props } from '@ngrx/store';
import { Book } from '../../../../interfaces/book';
import { User } from '../../../../interfaces/user-jsonFreeApi';

export const addUsers = createAction('[USER] add',props<{ userList: User[] }>());
export const selectUser = createAction('[USER] select',props<{ userId: number }>());
export const deleteUser = createAction('[USER] delete',props<{ userId: number }>());
export const addBooks = createAction('[USER] add book',props<{ bookList: Book[] }>());