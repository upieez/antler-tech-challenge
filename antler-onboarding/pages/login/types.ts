import { User } from '../../types';

export interface LoginData {
	user: Pick<User, 'email' | 'id'>[];
}

export interface LoginVars {
	email: string;
	password: string;
}
