import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  padding: '$2 $4',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$1 $2',
      },
      big: {
        fontSize: 24,
        padding: '$3 $4',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})
