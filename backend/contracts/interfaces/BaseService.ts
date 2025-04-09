export interface BaseService {
  initialize(): Promise<void>
  healthCheck(): Promise<boolean>
  shutdown(): Promise<void>
}

export interface ServiceConfig {
  enabled: boolean
  debug?: boolean
  retryAttempts?: number
  timeout?: number
} 