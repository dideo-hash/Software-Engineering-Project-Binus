'use client'

import { useMutation } from '@tanstack/react-query'
import { reviewsApi, ratingsApi } from '../api/endpoints'
import type { ReviewPayload, RatingPayload } from '../types'

export function useCreateReview() {
  return useMutation({
    mutationFn: (payload: ReviewPayload) => reviewsApi.create(payload),
  })
}

export function useCreateRating() {
  return useMutation({
    mutationFn: (payload: RatingPayload) => ratingsApi.create(payload),
  })
}
