import { User } from '../../types';

export interface SignUpData {
	user: Pick<User, 'email' | 'id'>[];
}

export interface SignUpVars {
	email: string;
	password: string;
}
