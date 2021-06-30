import React, { useState, useEffect } from 'react'
import { Transition, StyledBottomNav, ButtonsBox } from "./styles"
import { Button } from "components/common"

export const BottomNav = ({ phoneNumber, phoneCode }) => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top)
        setShow(document.body.getBoundingClientRect().top > scrollPos && (window.innerHeight + window.scrollY + 300) <= document.body.offsetHeight)
    }
    useEffect(() => {
            window.addEventListener(`scroll`, handleScroll)
            
            
            return () => window.removeEventListener(`scroll`, handleScroll)
    })

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.onscroll = function(ev) {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-300) {

                    setScrollPos(0)
                }
            };
        }
      }, [])
        return (
            <Transition>
                <StyledBottomNav className={show ? "active" : "hidden"}>
                    <ButtonsBox>
                        <a href={`tel:${phoneCode}${phoneNumber}`}>
                        <Button >
                            Zadzwoń
                        </Button>
                        </a>
                        <a href={`sms://${phoneCode}${phoneNumber}`}>
                        <Button secondary>
                            Napisz
                        </Button>
                        </a>
                    </ButtonsBox>
                </StyledBottomNav>
            </Transition>
        );

}