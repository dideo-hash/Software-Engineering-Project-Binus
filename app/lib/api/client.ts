const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown
  params?: Record<string, string>
}

class ApiError extends Error {
  status: number
  data: unknown

  constructor(message: string, status: number, data?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { body, params, headers: customHeaders, ...rest } = options

  let url = `${BASE_URL}${endpoint}`

  if (params) {
    const searchParams = new URLSearchParams(params)
    url += `?${searchParams.toString()}`
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...customHeaders,
  }

  const config: RequestInit = {
    ...rest,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new ApiError(
      errorData?.error || `Request failed with status ${response.status}`,
      response.status,
      errorData
    )
  }

  return response.json()
}

export const api = {
  get: <T>(endpoint: string, params?: Record<string, string>) =>
    request<T>(endpoint, { method: 'GET', params }),

  post: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'POST', body }),

  put: <T>(endpoint: string, body?: unknown) =>
    request<T>(endpoint, { method: 'PUT', body }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: 'DELETE' }),
}

export { ApiError }
