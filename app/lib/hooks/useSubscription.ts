'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { subscriptionApi } from '../api/endpoints'
import type { SubscriptionPayload } from '../types'

export function useSubscriptions() {
  return useQuery({
    queryKey: ['subscriptions'],
    queryFn: subscriptionApi.getAll,
    staleTime: 60_000,
  })
}

export function useCreateSubscription() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: SubscriptionPayload) => subscriptionApi.create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['subscriptions'] })
    },
  })
}
