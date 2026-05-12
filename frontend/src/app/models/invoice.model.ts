export interface Invoice {
  id?: number;
  vehicle_id: number;
  subtotal: number;
  tax: number;
  total_amount: number;
  payment_status: string;
  created_at?: string;
}