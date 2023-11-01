import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
}
