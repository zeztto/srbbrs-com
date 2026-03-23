import Image from "next/image";
import Link from "next/link";
import { Navbar, Reveal } from "@/components/motion";

const menuItems = [
  {
    name: "클래식 크로와상",
    en: "Classic Croissant",
    desc: "72겹의 순수한 버터 레이어. 프랑스 AOP 버터만을 사용한 정통 크로와상.",
    price: "₩4,500",
    featured: true,
    img: "/images/classic.jpg",
    num: "01",
  },
  {
    name: "아몬드 크로와상",
    en: "Almond Croissant",
    desc: "프랑지파네 크림과 슬라이스 아몬드.",
    price: "₩5,500",
    featured: false,
    img: "/images/almond.jpg",
    num: "02",
  },
  {
    name: "팡 오 쇼콜라",
    en: "Pain au Chocolat",
    desc: "벨기에산 다크 초콜릿 두 줄기.",
    price: "₩5,000",
    featured: false,
    img: "/images/chocolat.jpg",
    num: "03",
  },
  {
    name: "크로플",
    en: "Croffle",
    desc: "바삭하게 프레스한 크로와상 와플.",
    price: "₩6,000",
    featured: false,
    img: "/images/croffle.jpg",
    num: "04",
  },
  {
    name: "시즌 스페셜",
    en: "Season Special",
    desc: "계절의 재료로 만드는 한정 크로와상.",
    price: "₩7,000~",
    featured: false,
    img: "/images/seasonal.jpg",
    num: "05",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-svh flex items-center justify-center px-6">
        <Image
          src="/images/hero.jpg"
          alt="SRBBRS Bakery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-espresso/50" />
        <div className="relative text-center max-w-4xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.15] tracking-tight text-cream animate-hero">
            매일 아침,
            <br />
            버터의 결을 굽다
          </h1>
          <p className="mt-8 text-sm md:text-base tracking-[0.3em] uppercase text-cream/70 animate-hero delay-1">
            Artisan Croissant Bakery
          </p>
          <div className="mt-14 animate-hero delay-2">
            <a
              href="#menu"
              className="inline-block border border-cream/30 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-cream hover:bg-cream hover:text-espresso transition-all duration-500"
            >
              메뉴 보기
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-hero delay-3">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-cream/30" />
          <p className="mt-3 text-[10px] tracking-[0.3em] uppercase text-cream/40">
            Scroll
          </p>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="bg-espresso py-4 overflow-hidden select-none">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-cream/50 text-[11px] tracking-[0.4em] uppercase mx-6"
            >
              Freshly Baked&nbsp;&nbsp;◆&nbsp;&nbsp;Hand
              Crafted&nbsp;&nbsp;◆&nbsp;&nbsp;Since
              2024&nbsp;&nbsp;◆&nbsp;&nbsp;72
              Layers&nbsp;&nbsp;◆&nbsp;&nbsp;AOP
              Butter&nbsp;&nbsp;◆&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Menu ── */}
      <section
        id="menu"
        className="py-24 md:py-36 px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-warm-brown mb-3">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
            Signature
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item, i) => (
            <Reveal
              key={item.en}
              delay={i * 80}
              className={item.featured ? "md:col-span-2" : ""}
            >
              {item.featured ? (
                <div className="rounded-2xl overflow-hidden h-full flex flex-col md:flex-row bg-[#E8D5B7] group cursor-default transition-transform duration-500 hover:scale-[0.98]">
                  <div className="relative md:w-1/2 aspect-square md:aspect-auto min-h-[280px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-between flex-1 relative overflow-hidden">
                    <span className="absolute -bottom-6 -right-2 font-serif text-[120px] leading-none text-espresso/[0.04] select-none pointer-events-none">
                      {item.num}
                    </span>
                    <div className="relative">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-espresso/35">
                        {item.en}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl text-espresso mt-2">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-sm text-espresso/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <p className="relative mt-6 text-[15px] tracking-wide text-espresso/75">
                      {item.price}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden h-full bg-cream-dark group cursor-default transition-transform duration-500 hover:scale-[0.98]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 relative overflow-hidden">
                    <span className="absolute -bottom-4 -right-1 font-serif text-[80px] leading-none text-espresso/[0.04] select-none pointer-events-none">
                      {item.num}
                    </span>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-espresso/35">
                      {item.en}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-espresso mt-1.5">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-espresso/55 leading-relaxed">
                      {item.desc}
                    </p>
                    <p className="mt-4 text-[15px] tracking-wide text-espresso/75">
                      {item.price}
                    </p>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 md:py-36 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-cream/35 mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              새벽 4시,
              <br />
              반죽이
              <br />
              시작됩니다
            </h2>
            <div className="mt-10 space-y-6 text-cream/65 text-[15px] leading-relaxed">
              <p>
                srbbrs는 매일 새벽, 정성스럽게 반죽을 접습니다. 프랑스 AOP 인증
                버터와 국내산 유기농 밀가루만을 사용하여 72겹의 결을
                만들어냅니다.
              </p>
              <p>
                기다림의 시간이 만드는 깊은 풍미. 오랜 발효와 숙성을 거친
                반죽만이 가질 수 있는 바삭함과 부드러움의 완벽한 균형.
              </p>
              <p className="text-cream/45">
                그것이 우리가 크로와상을 대하는 방식입니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="반죽을 만드는 과정"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-espresso/10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="relative py-32 md:py-44 px-6">
        <Image
          src="/images/story-nature.jpg"
          alt="자연 풍경"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-cream/40 mb-4">
              Brand Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.3]">
              느린 것들의
              <br />
              아름다움
            </h2>
            <p className="mt-8 text-cream/60 text-[15px] leading-[1.9] max-w-xl mx-auto">
              자연, 웰빙, 여유, 휴식. 빠른 세상 속에서 srbbrs가 지키고 싶은
              네 가지 가치와 크로와상에 담긴 이야기.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              href="/story"
              className="inline-block mt-12 border border-cream/30 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-cream hover:bg-cream hover:text-espresso transition-all duration-500"
            >
              스토리 보기
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Accent Marquee ── */}
      <div className="bg-caramel py-3 overflow-hidden select-none">
        <div
          className="animate-marquee flex whitespace-nowrap"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-warm-white/80 text-[11px] tracking-[0.4em] uppercase mx-6"
            >
              크로와상&nbsp;&nbsp;◆&nbsp;&nbsp;아몬드&nbsp;&nbsp;◆&nbsp;&nbsp;팡
              오
              쇼콜라&nbsp;&nbsp;◆&nbsp;&nbsp;크로플&nbsp;&nbsp;◆&nbsp;&nbsp;시즌
              스페셜&nbsp;&nbsp;◆&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Visit ── */}
      <section
        id="visit"
        className="py-24 md:py-36 px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <Reveal>
          <p className="text-[11px] tracking-[0.4em] uppercase text-warm-brown mb-3">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
            찾아오기
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-12 md:gap-8">
          <Reveal delay={100}>
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-warm-brown mb-4">
              Address
            </h3>
            <p className="text-lg text-espresso leading-relaxed">
              서울특별시 성동구
              <br />
              서울숲길 17, 1층
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-warm-brown mb-4">
              Hours
            </h3>
            <p className="text-lg text-espresso">매일 08:00 — 21:00</p>
            <p className="mt-1 text-sm text-warm-brown">매주 월요일 휴무</p>
          </Reveal>
          <Reveal delay={300}>
            <h3 className="text-[11px] tracking-[0.3em] uppercase text-warm-brown mb-4">
              Contact
            </h3>
            <p className="text-lg text-espresso">@srbbrs_official</p>
            <p className="mt-1 text-sm text-warm-brown">02-1234-5678</p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 md:mt-24 relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/images/cafe.jpg"
              alt="SRBBRS 카페 인테리어"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-espresso/10" />
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-espresso/8 py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg tracking-[0.25em] text-espresso">
            SRBBRS
          </span>
          <p className="text-[11px] text-warm-brown/60 tracking-wide">
            © 2024 SRBBRS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
