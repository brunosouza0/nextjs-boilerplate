import '@storybook/addons'

declare module '@storybook/addons' {
  export interface Parameters {
    viewport?: { defaultViewport: 'mobile1' | 'mobile2' | 'tablet' }
    backgrounds?: { default: 'light' | 'dark' }
  }
}
