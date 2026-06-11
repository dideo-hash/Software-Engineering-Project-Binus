import { api } from './client'
import type {
  Driver,
  LeaderboardEntry,
  WasteLocation,
  UserPoints,
  PointsAction,
  PointsActionResponse,
  Product,
  ReviewPayload,
  ReviewResponse,
  RatingPayload,
  Subscription,
  SubscriptionPayload,
} from '../types'

// ===== Drivers =====
export const driversApi = {
  getRandom: () => api.get<Driver>('/api/drivers'),
}

// ===== Leaderboard =====
export const leaderboardApi = {
  getAll: () => api.get<LeaderboardEntry[]>('/api/leaderboard'),
}

// ===== Locations =====
export const locationsApi = {
  getNearby: (lat: number, lon: number, radius = 2000) =>
    api.get<WasteLocation[]>('/api/locations', {
      lat: lat.toString(),
      lon: lon.toString(),
      radius: radius.toString(),
    }),
}

// ===== Points =====
export const pointsApi = {
  getUser: (userId: string) =>
    api.get<UserPoints>('/api/points', { user_id: userId }),

  addPoints: (userId: string, action: PointsAction) =>
    api.post<PointsActionResponse>('/api/points', { user_id: userId, action }),
}

// ===== Products =====
export const productsApi = {
  getAll: () => api.get<Product[]>('/api/products'),
}

// ===== Reviews =====
export const reviewsApi = {
  create: (payload: ReviewPayload) =>
    api.post<ReviewResponse>('/api/reviews', payload),
}

// ===== Ratings =====
export const ratingsApi = {
  create: (payload: RatingPayload) =>
    api.post<{ success: boolean; message: string; data: unknown }>('/api/ratings', payload),
}

// ===== Subscription =====
export const subscriptionApi = {
  getAll: () => api.get<Subscription[]>('/api/subscription'),

  create: (payload: SubscriptionPayload) =>
    api.post<Subscription>('/api/subscription', payload),
}
