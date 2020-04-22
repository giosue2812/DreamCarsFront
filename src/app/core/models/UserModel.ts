import {BaseModel} from './BaseModel';

export interface UserModel extends BaseModel{
  id:number;
  first_name:string;
  last_name:string;
  email:string;
  password:string;
  passwordConfirm:string;
  phone:string;
  street:string;
  number:number;
  postal_code:string;
  city:string;
  country:string;
  groupe:[];
  user_roles:[];
}
