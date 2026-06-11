'use client'

import { useQuery } from '@tanstack/react-query'
import { leaderboardApi } from '../api/endpoints'

export function useLeaderboard() {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: leaderboardApi.getAll,
    staleTime: 30_000, // 30 seconds
  })
}
