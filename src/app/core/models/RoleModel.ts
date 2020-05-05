import {BaseModel} from './BaseModel';

/**
 * This interface define role object. This interface extend BaseModel
 */
export interface RoleModel extends BaseModel{
  id_role:number;
  role:string;
}
