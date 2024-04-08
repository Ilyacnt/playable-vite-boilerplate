import { Variant } from 'framer-motion'
import { EAnimationType } from '../types'

export const animationVariants: Record<EAnimationType, Variant> = {
    [EAnimationType.DEFAULT]: {},
    [EAnimationType.PULSE]: { scale: [0.9, 1, 0.9], transition: { repeat: Infinity, duration: 3 } },
    [EAnimationType.APPEARANCE]: { opacity: [0, 1], transition: { duration: 1 } },
}
