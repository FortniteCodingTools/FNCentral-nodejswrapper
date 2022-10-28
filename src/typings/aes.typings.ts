export interface DynamicKey {
  name: string
  key: string
  guid: string
  keychain: string
  fileCount: number
  hasHighResTextures: boolean
  size: Size
}

export interface Unloaded {
  name: string
  guid: string
  fileCount: number
  hasHighResTextures: boolean
  size: Size
}
export interface Aes {
  version: string
  mainKey: string
  dynamicKeys: DynamicKey[]
  unloaded: Unloaded[]
}

export interface Size {
  raw: number
  formatted: string
}
