import { DateTime } from 'luxon'

export interface BaseModel {
  id: number
  created_at: DateTime
  updated_at: DateTime
  deleted_at?: DateTime
}

export interface Pagination<T> {
  data: T[]
  meta: {
    total: number
    per_page: number
    current_page: number
    last_page: number
    first_page: number
    first_page_url: string
    last_page_url: string
    next_page_url: string | null
    previous_page_url: string | null
  }
} 