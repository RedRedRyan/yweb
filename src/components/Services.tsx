"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { Flip } from "gsap/all";

gsap.registerPlugin(Flip);

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  tag: string;
}

interface CardImage {
  src: string;
  className: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Web & Mobile Apps",
    description:
      "Custom software, Modern websites and mobile applications built for performance, scalability",
    tag: "Development",
  },
  {
    id: 2,
    title: "Photography & Video Shoots",
    description:
      "Professional photography, editing, and creative video production for brands and events.",
    tag: "Media",
  },
  
  {
    id: 3,
    title: "3D & Animation",
    description:
      "Films , advertisements and virtual website tours and interactive 3D experiences for real estate and e-commerce.",
    tag: "Animation",
  },
  {
    id: 4,
    title: "Game Design",
    description:
      "Immersive game design and development services, creating engaging and interactive gaming experiences across platforms.",
    tag: "Design",
  },
  {
    id: 5,
    title: "Research",
    description:
      "Innovative software and mathematics research projects focused on solving real-world challenges.",
    tag: "Research",
  },
];

const INITIAL_CARDS: CardImage[] = [
  {
    src: "/images/service5.png",
    className: "item item-5",
  },
  {
    src: "/images/service4.png",
    className: "item item-4",
  },
  {
    src: "/images/service3.png",
    className: "item item-3",
  },
  {
    src: "/images/service2.png",
    className: "item item-2",
  },
  {
    src: "/images/service1.png",
    className: "item item-1",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeServiceRef = useRef<number>(0);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const rotateLabel = useCallback(() => {
    const next = (activeServiceRef.current + 1) % SERVICES.length;
    activeServiceRef.current = next;
    labelRefs.current.forEach((el, i) => {
      if (!el) return;
      el.classList.toggle("active", i === next);
      el.classList.toggle("inactive", i !== next);
    });
  }, []);

  const moveCard = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const lastItem = slider.querySelector<HTMLImageElement>(".item:last-child");
    if (!lastItem) return;

    lastItem.style.display = "none";

    const newItem = document.createElement("img");
    newItem.className = lastItem.className;
    newItem.src = lastItem.src;
    newItem.alt = lastItem.alt;
    slider.insertBefore(newItem, slider.firstChild);
  }, []);

  const handleClick = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const state = Flip.getState(".item");

    moveCard();
    rotateLabel();

    Flip.from(state, {
      targets: ".item",
      ease: "sine.inOut",
      absolute: true,
      onEnter: (elements: Element[]) =>
        gsap.from(elements, {
          duration: 0.35,
          yPercent: 20,
          opacity: 0,
          ease: "expo.out",
        }),
      onLeave: (element: Element[]) =>
        gsap.to(element, {
          duration: 0.3,
          yPercent: 5,
          xPercent: -5,
          transformOrigin: "bottom left",
          opacity: 0,
          ease: "expo.out",
          onComplete() {
            slider.removeChild(element[0]);
          },
        }),
    });
  }, [moveCard, rotateLabel]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.innerHTML = "";
    INITIAL_CARDS.forEach(({ src, className }) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = className;
      img.alt = "";
      slider.appendChild(img);
    });

    labelRefs.current[0]?.classList.add("active");
    labelRefs.current.slice(1).forEach((el) => el?.classList.add("inactive"));
  }, []);

  return (
    <section id="services">
       
      <div className="services-inner">

        {/* ── LEFT: card stack ─────────────────────────── */}
        <div className="services-left" onClick={handleClick}>
          <div className="slider-wrapper">
            <div className="slider" ref={sliderRef} />
            <div className="slider-hint">
              <span>tap to flip</span>
            </div>
          </div>
          <div className="absolute bottom-40"><p>*prices are in KES</p></div>
        </div>

        {/* ── RIGHT: text content ──────────────────────── */}
        <div className="services-text">
          <p className="services-eyebrow"> . </p>

          <h2 className="services-header">
            What We Do
          </h2>

          <ul className="services-list">
            {SERVICES.map((service, i) => (
              <li key={service.id} className="service-item">
                <span
                  ref={(el) => { labelRefs.current[i] = el; }}
                  className="service-tag"
                >
                  {service.tag}
                </span>
                <div className="service-body">
                  <strong>{service.title}</strong>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <a className="services-cta-hint" href="#contact">Book us →</a>
        </div>

      </div>
    </section>
  );
}