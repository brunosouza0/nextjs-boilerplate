import '@storybook/addons'

type Types =
  | 'array'
  | 'boolean'
  | 'number'
  | 'range'
  | 'object'
  | 'radio'
  | 'inline-radio'
  | 'check'
  | 'inline-check'
  | 'select'
  | 'multi-select'
  | 'text'
  | 'color'
  | 'date'
  | false

declare module '@storybook/addons' {
  export interface Parameters {
    viewport?: {
      defaultViewport: 'mobile1' | 'mobile2' | 'tablet'
      [key: sting]: any
    }
    backgrounds?: {
      default: 'light' | 'dark'
      [key: sting]: any
    }
  }

  export interface ArgType {
    control?: {
      type: Types
      options?: Array<any>
      min?: number
      max?: number
      step?: number
      separator?: string
    }
    action?: string
  }
}
