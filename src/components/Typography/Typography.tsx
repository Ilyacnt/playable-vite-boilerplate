import { HTMLMotionProps } from 'framer-motion'
import { TypographyStyled } from './Typography.styled'

type TTypographyProps = HTMLMotionProps<'span'>

export const Typography = ({ children, ...props }: TTypographyProps) => {
    return <TypographyStyled {...props}>{children}</TypographyStyled>
}
