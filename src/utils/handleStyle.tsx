import * as Color from '../constants/colors'

export const handleColor = (color: string | undefined): string => {
  switch (color) {
    case 'primary':
      return Color.BLUE
    case 'secondary':
      return Color.RED
    default:
      return Color.MAIN
  }
}

export const handleActiveColor = (color: string | undefined): string => {
  switch (color) {
    case 'primary':
      return Color.BLUE_ACTIVE
    case 'secondary':
      return Color.RED_ACTIVE
    default:
      return Color.MAIN_ACTIVE
  }
}

export const handleButtonSize = (size: string | undefined): string => {
  switch (size) {
    case 'sm':
      return '0.5rem 0.6rem'
    case 'md':
      return '1.1rem 1.3rem'
    case 'lg':
      return '1.7rem 2.4rem'
    default:
      return '1rem 1.1rem'
  }
}

export const handleTextColor = (color: string | undefined): string => {
  switch (color) {
    case 'primary':
      return Color.MAIN
    case 'secondary':
      return Color.NAVY
    case 'error':
      return Color.RED
    default:
      return '#000'
  }
}
