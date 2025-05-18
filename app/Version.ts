export interface Platform {
  signature: string
  url: string
}

export interface Version {
  version: string
  notes: string
  type: UpdateType
  changes: string[]
  pub_date: string // ISO 8601 format (ex: "2024-05-17T12:00:00Z")
  platforms: {
    [key: string]: Platform // Ex: "windows", "mac", etc.
  }
}

export enum UpdateType {
  ALPHA = "Alpha",
  BETA = "Beta",
  STABLE = "Stable",
  PATCH = "Patch"
}