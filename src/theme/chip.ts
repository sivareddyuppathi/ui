import type { ModuleOptions } from '../module'

export default (options: Required<ModuleOptions>) => ({
  slots: {
    root: 'relative inline-flex items-center justify-center shrink-0',
    base: 'rounded-full ring ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap'
  },
  variants: {
    color: {
      ...Object.fromEntries(options.colors.map((color: string) => [color, `bg-${color}-500 dark:bg-${color}-400`])),
      gray: 'bg-gray-500 dark:bg-gray-400',
      white: 'bg-white dark:bg-gray-900',
      black: 'bg-gray-900 dark:bg-white'
    },
    size: {
      '3xs': 'h-[4px] min-w-[4px] text-[4px]',
      '2xs': 'h-[5px] min-w-[5px] text-[5px]',
      'xs': 'h-[6px] min-w-[6px] text-[6px]',
      'sm': 'h-[7px] min-w-[7px] text-[7px]',
      'md': 'h-[8px] min-w-[8px] text-[8px]',
      'lg': 'h-[9px] min-w-[9px] text-[9px]',
      'xl': 'h-[10px] min-w-[10px] text-[10px]',
      '2xl': 'h-[11px] min-w-[11px] text-[11px]',
      '3xl': 'h-[12px] min-w-[12px] text-[12px]'
    },
    position: {
      'top-right': 'top-0 right-0',
      'bottom-right': 'bottom-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-left': 'bottom-0 left-0'
    },
    inset: {
      false: ''
    },
    standalone: {
      false: 'absolute'
    }
  },
  compoundVariants: [{
    position: 'top-right',
    inset: false,
    class: '-translate-y-1/2 translate-x-1/2 transform'
  }, {
    position: 'bottom-right',
    inset: false,
    class: 'translate-y-1/2 translate-x-1/2 transform'
  }, {
    position: 'top-left',
    inset: false,
    class: '-translate-y-1/2 -translate-x-1/2 transform'
  }, {
    position: 'bottom-left',
    inset: false,
    class: 'translate-y-1/2 -translate-x-1/2 transform'
  }],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    position: 'top-right'
  }
})