import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
}
