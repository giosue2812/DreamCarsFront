export interface UserModel {
    id: number;
    create_at: string;
    update_at?: any;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    number: string;
    postalCode: string;
    city: string;
    country: string;
    groupe: string[];
    user_roles: any[][];
  }
