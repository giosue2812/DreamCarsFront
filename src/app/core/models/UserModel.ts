import {BaseModel} from './BaseModel';

/**
 * Thie interface define object user ans extend from Base model
 */
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
  city:string;
  country:string;
  groupe:[];
  user_roles:[];
}
