/**
 * Interface groupe which define the each object groupe model this interfance extends Base model
 */

  export interface Data {
    id_groupe: number;
    groupe: string;
    create_at: string;
    update_at?: any;
    delete_at?: any;
  }

  export interface GroupeModel {
    code: number;
    status: string;
    data: Data[];
  }

