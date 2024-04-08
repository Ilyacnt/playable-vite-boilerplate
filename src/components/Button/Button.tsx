import { HTMLMotionProps } from 'framer-motion'
import { ButtonStyled } from './Button.styled'
import { EAnimationType } from '../../types'
import { animationVariants } from '../../animations'

type TButtonProps = { animation?: EAnimationType } & HTMLMotionProps<'button'>

export const Button = ({
    animation = EAnimationType.DEFAULT,
    children,
    ...props
}: TButtonProps) => {
    return (
        <ButtonStyled
            whileTap={{ scale: 0.8 }}
            animate={animation}
            variants={animationVariants}
            {...props}
        >
            {children}
        </ButtonStyled>
    )
}
