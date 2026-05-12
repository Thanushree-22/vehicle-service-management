export interface Component {
  id?: number;
  name: string;
  component_type: string;
  new_price: number;
  repair_price: number;
  stock_quantity: number;
  is_repairable: boolean;
  created_at?: string;
}