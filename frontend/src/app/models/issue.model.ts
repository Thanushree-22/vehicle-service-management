export interface Issue {
  id?: number;
  vehicle_id: number;
  component_id: number;
  issue_description: string;
  service_type: string;
  labor_cost: number;
  status?: string;
  created_at?: string;
}