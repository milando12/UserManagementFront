// example of class
export class PostClass {
  constructor(public userId: number,
              public id: number,
              public title: string,
              public body: string) {
  }

  getTitle(){
    return this.title.toUpperCase();
  }
}
export interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
  permissions: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
};


