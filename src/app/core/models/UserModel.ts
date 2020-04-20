import {BaseModel} from './BaseModel';

export interface UserModel extends BaseModel{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  passwordConfirm:string;
  phone:string;
  street:string;
  number:number;
  postalCode:string;
  country:string;
}
