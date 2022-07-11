declare module 'react-scroll-up' {
    import React, { ReactNode } from 'react'

    export interface ScrollTopUpProps {
            showUnder: number
            topPosition?: number
            children: ReactNode,
            easing?: 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' |
            'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' |
            'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' |
            'easeInOutExpo' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' | 'easeOutElastic' |
            'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' |
            'easeInOutBounce',
            duration?: number,
            style?: object,
            onShow?: () => void,
            onHide?: () => void
    }

    export default class ScrollToTop extends React.Component<ScrollToTopProps, any> { }
}