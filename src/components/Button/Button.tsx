import { HTMLMotionProps } from 'framer-motion'
import { ButtonStyled } from './Button.styled'

type TButtonProps = HTMLMotionProps<'button'>

export const Button = ({ children, ...props }: TButtonProps) => {
    return <ButtonStyled {...props}>{children}</ButtonStyled>
}
