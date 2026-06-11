'use client'

import { useQuery } from '@tanstack/react-query'
import { driversApi } from '../api/endpoints'

export function useDriver() {
  return useQuery({
    queryKey: ['driver'],
    queryFn: driversApi.getRandom,
    staleTime: 0, // Always fetch fresh driver
  })
}
