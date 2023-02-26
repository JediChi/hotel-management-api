interface ICreateUser {
    name: string,
    email: string,
    password: string,
    roles: 'admin' | 'guest',
  tokens: {
    token: string;
  }[],
generateAuthToken(): Promise<string>,
// findByCredentials(email: string, password: string): Promise<string>
}

export default ICreateUser