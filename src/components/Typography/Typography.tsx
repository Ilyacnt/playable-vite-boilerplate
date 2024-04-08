import { HTMLMotionProps } from 'framer-motion'
import { TypographyStyled } from './Typography.styled'
import { EAnimationType } from '../../types'
import { animationVariants } from '../../animations'

type TTypographyProps = { animation?: EAnimationType } & HTMLMotionProps<'span'>

export const Typography = ({
    animation = EAnimationType.DEFAULT,
    children,
    ...props
}: TTypographyProps) => {
    return (
        <TypographyStyled animate={animation} variants={animationVariants} {...props}>
            {children}
        </TypographyStyled>
    )
}
