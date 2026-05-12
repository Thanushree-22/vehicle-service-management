export interface Vehicle {
  id?: number;
  vehicle_number: string;
  owner_name: string;
  brand: string;
  model: string;
  year: number;
  created_at?: string;
}