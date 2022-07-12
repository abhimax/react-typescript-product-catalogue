import { DefaultTheme } from "styled-components"

declare module "styled-components" {
        export interface DefaultTheme {
                background: {
                        primary: string
                        secondary: string
                        blue: string
                        lightBlue: string
                },
                color: {
                        primary: string
                        secondary: string
                        blue: string
                        white: string
                        darkGray: string
                },
                input: {
                        primary: string
                },
                button: {
                        primary: string
                },
                border: {
                        primary: string
                },
        }
}