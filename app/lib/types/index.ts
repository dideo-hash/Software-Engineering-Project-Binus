// ===== API Response Types =====

export interface Driver {
  name: string
  phone: string
  vehicle: string
  rating: string
}

export interface LeaderboardEntry {
  name: string
  points: number
  badge: string
}

export interface WasteLocation {
  id: number
  lat: number
  lon: number
  tags?: Record<string, string>
}

export interface UserPoints {
  user: {
    user_id: string
    user_name: string
    fullname: string
    user_point: number
  } | null
  ranking: number | null
  period: string | null
}

export interface PointsActionResponse {
  success: boolean
  points_added: number
  total_points: number
  ranking: number | null
}

export type PointsAction =
  | 'subscription'
  | 'pickup_done'
  | 'marketplace_sell'
  | 'marketplace_buy'
  | 'rating'

export interface Product {
  id: number
  name: string
  price: number
  description: string
}

export interface ReviewPayload {
  user_id: string
  driver_name: string
  rating: number
  comment?: string
  transaction_type?: string
  weight_kg?: number
}

export interface ReviewResponse {
  success: boolean
  message: string
  points_added: number
  points_status: string
}

export interface RatingPayload {
  user_id: string
  rating: number
  comment?: string
}

export interface Subscription {
  id: number
  paket: string
  jadwal: string[]
  isPaused: boolean
  riwayat: { tanggal: string; status: string }[]
}

export interface SubscriptionPayload {
  paket: string
  jadwal: string[]
  isPaused: boolean
}
