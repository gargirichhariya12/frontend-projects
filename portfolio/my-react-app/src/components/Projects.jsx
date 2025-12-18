import { useEffect, useRef } from 'react'


export default function Projects() {
    const sliderRef = useRef(null)


    useEffect(() => {
        const slider = sliderRef.current
        const cards = Array.from(slider.children)
        const cardWidth = cards[0].offsetWidth + 32


        const first = cards[0].cloneNode(true)
        const last = cards[cards.length - 1].cloneNode(true)


        slider.appendChild(first)
        slider.insertBefore(last, cards[0])
        slider.scrollLeft = cardWidth


        const onScroll = () => {
            if (slider.scrollLeft <= 0) {
                slider.scrollLeft = cardWidth * cards.length
            }
            if (slider.scrollLeft >= cardWidth * (cards.length + 1)) {
                slider.scrollLeft = cardWidth
            }
        }


        slider.addEventListener('scroll', onScroll)
        return () => slider.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <section id="work" className="py-16">
            <div
                ref={sliderRef}
                className="flex gap-8 overflow-x-auto no-scrollbar px-4"
            >
                {/* Project Cards (same Tailwind classes) */}
            </div>
        </section>
    )
}