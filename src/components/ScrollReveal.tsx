import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  isContainer?: boolean; // New prop to determine if we animate the container itself instead of text words
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  isContainer = false
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isText = typeof children === 'string';

  const splitText = useMemo(() => {
    if (!isText) return null;
    const text = children as string;
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isText]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    if (isContainer) {
      // Container mode: Animate the entire container's opacity and blur in a timeline (fade-in, stay, fade-out)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=10%',
          end: 'bottom top+=10%',
          scrub: true,
        }
      });

      // Class toggler for active styling (like folder coloring)
      const stToggler = ScrollTrigger.create({
        trigger: el,
        scroller,
        start: 'top center+=25%',
        end: 'bottom center-=25%',
        toggleClass: 'in-focus'
      });

      const initialBlur = enableBlur ? `blur(${blurStrength}px)` : 'blur(0px)';

      tl.fromTo(el, 
        { opacity: baseOpacity, filter: initialBlur, rotate: baseRotation },
        { opacity: 1, filter: 'blur(0px)', rotate: 0, duration: 0.3, ease: 'power1.out' }
      )
      .to(el, { opacity: 1, filter: 'blur(0px)', duration: 0.4 })
      .to(el, { opacity: baseOpacity, filter: initialBlur, rotate: -baseRotation, duration: 0.3, ease: 'power1.in' });

      return () => {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        stToggler.kill();
      };
    } else {
      // Original Text mode
      const anim1 = gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true
          }
        }
      );

      const wordElements = el.querySelectorAll('.word');

      const anim2 = gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        {
          ease: 'none',
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );

      let anim3: gsap.core.Tween | null = null;
      if (enableBlur) {
        anim3 = gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: 'none',
            filter: 'blur(0px)',
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: 'top bottom-=20%',
              end: wordAnimationEnd,
              scrub: true
            }
          }
        );
      }

      return () => {
        if (anim1.scrollTrigger) anim1.scrollTrigger.kill();
        anim1.kill();
        if (anim2.scrollTrigger) anim2.scrollTrigger.kill();
        anim2.kill();
        if (anim3) {
          if (anim3.scrollTrigger) anim3.scrollTrigger.kill();
          anim3.kill();
        }
      };
    }
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, isContainer]);

  if (isContainer) {
    return (
      <div ref={containerRef} className={containerClassName}>
        {children}
      </div>
    );
  }

  return (
    <h2 ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
