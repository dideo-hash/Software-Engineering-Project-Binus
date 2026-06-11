'use client'

import { useQuery } from '@tanstack/react-query'
import { locationsApi } from '../api/endpoints'

export function useLocations(lat: number, lon: number, radius = 2000) {
  return useQuery({
    queryKey: ['locations', lat, lon, radius],
    queryFn: () => locationsApi.getNearby(lat, lon, radius),
    enabled: lat !== 0 && lon !== 0,
    staleTime: 120_000, // 2 minutes
  })
}
