'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { pointsApi } from '../api/endpoints'
import type { PointsAction } from '../types'

export function useUserPoints(userId: string | null) {
  return useQuery({
    queryKey: ['points', userId],
    queryFn: () => pointsApi.getUser(userId!),
    enabled: !!userId,
    staleTime: 15_000,
  })
}

export function useAddPoints() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, action }: { userId: string; action: PointsAction }) =>
      pointsApi.addPoints(userId, action),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['points', variables.userId] })
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })
}
