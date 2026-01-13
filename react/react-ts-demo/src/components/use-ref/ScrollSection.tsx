import React, { useRef } from 'react'

const ScrollSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const scrollToSection = ()=>{
        sectionRef.current?.scrollIntoView({
            behavior : "smooth"
        })
    }
  return (
    <div>
        <button onClick={scrollToSection} >Goto Section</button>
        <div style={{height:"800px"}}></div>
        <div ref={sectionRef}>
            <h2>Target Section</h2>
            <button>Back to top</button>
        </div>
    </div>
  )
}

export default ScrollSection