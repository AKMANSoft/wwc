// @ts-nocheck
import React, { useEffect, useState } from "react"
import Faq from "../../Components/faq"
import Roadmap from "../../Components/roadmap"
import Whitepaper from "../../Components/whitepaper"

const BlocksWithLinesCont = () => {
	const [scrollPos, setScrollPos] = useState(0)

	useEffect(() => {
        let scrollHandler = () => {
            setScrollPos(window.scrollY)
        }
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
	return (
		<>
			<Whitepaper scrollPos={scrollPos} />
			<Roadmap scrollPos={scrollPos} />
			<Faq scrollPos={scrollPos} />
		</>
	)
}

export default React.memo(BlocksWithLinesCont)