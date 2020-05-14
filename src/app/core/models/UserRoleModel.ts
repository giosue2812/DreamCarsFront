  export interface Data {
    id: number;
    user: number;
    role: number;
    start_at: string;
    end_date?: any;
  }

  export interface UserRoleModel {
    code: number;
    status: string;
    data: Data;
  }
