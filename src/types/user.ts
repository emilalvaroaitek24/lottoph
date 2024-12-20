export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  wallet_balance: number;
  created_at: string;
  role: 'user' | 'seafarer' | 'admin';
}