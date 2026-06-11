'use client'

import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/endpoints'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: productsApi.getAll,
    staleTime: 60_000,
  })
}
