export type Mappings = Mapping[]

export interface Mapping {
  url: string
  fileName: string
  hash: string
  length: number
  uploaded: string
  meta: Meta
}

export interface Meta {
  version: string
  compressionMethod: "Oodle" | "None"
  platform : "Android" | "Windows"
}
