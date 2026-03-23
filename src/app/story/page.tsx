import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Brand Story | SRBBRS",
  description:
    "자연, 웰빙, 여유, 휴식. srbbrs가 추구하는 느린 것들의 아름다움.",
};

const values = [
  {
    num: "01",
    title: "자연",
    en: "Nature",
    body: "우리는 자연이 주는 리듬을 따릅니다. 계절이 바뀌면 재료도 바뀌고, 반죽의 온도도, 발효의 시간도 달라집니다. 자연의 흐름 안에서 가장 좋은 순간을 기다리는 것—그것이 srbbrs의 시작입니다.",
  },
  {
    num: "02",
    title: "웰빙",
    en: "Wellness",
    body: "정직한 재료만을 사용합니다. 프랑스 AOP 인증 버터, 국내산 유기농 밀가루, 자연 발효종. 불필요한 첨가물 없이, 재료 본연의 맛이 말하게 합니다. 몸과 마음 모두에게 좋은 빵을 만듭니다.",
  },
  {
    num: "03",
    title: "여유",
    en: "Leisure",
    body: "좋은 크로와상에는 시간이 필요합니다. 서두르지 않는 발효, 천천히 접어 올리는 반죽, 그리고 갓 구워낸 빵을 음미하는 순간. srbbrs는 빠른 세상 속에서 느림의 가치를 지킵니다.",
  },
  {
    num: "04",
    title: "휴식",
    en: "Rest",
    body: "일상에 마침표가 아닌 쉼표를 찍는 공간. 따뜻한 크로와상 한 조각과 커피 한 잔이 만드는 작은 쉼. srbbrs는 당신의 하루 속 가장 고요한 순간이 되고 싶습니다.",
  },
];

export default function StoryPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-svh flex items-end pb-20 md:pb-28 px-6 lg:px-8">
        <Image
          src="/images/story-hero.jpg"
          alt="Golden field"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="text-[11px] tracking-[0.4em] uppercase text-cream/50 mb-4 animate-hero">
            Brand Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] text-cream animate-hero delay-1">
            느린 것들의
            <br />
            아름다움
          </h1>
          <p className="mt-6 max-w-lg text-cream/60 text-[15px] leading-relaxed animate-hero delay-2">
            자연의 시간 속에서 태어나는 한 조각의 크로와상.
            <br />
            srbbrs가 추구하는 삶의 결에 대하여.
          </p>
        </div>
      </section>

      {/* ── Opening Statement ── */}
      <section className="py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-warm-brown mb-6">
              Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.3]">
              우리는 믿습니다.
              <br />
              좋은 것은 천천히 만들어진다고.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-10 text-warm-brown text-[15px] md:text-base leading-[1.9] max-w-2xl mx-auto">
              빠르게 흘러가는 하루 속에서, 잠시 멈춰 서는 시간이 있습니다.
              갓 구워낸 크로와상의 따스한 온기, 버터가 녹아드는 향기,
              바삭한 첫 한 입의 소리. 그 작은 순간들이 모여
              우리의 하루를 더 풍요롭게 만든다고 srbbrs는 믿습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Nature Section ── */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/story-wheat.jpg"
              alt="밀밭"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-cream-dark flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
                01 — Nature
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
                자연의 시간을
                <br />
                따릅니다
              </h2>
              <p className="mt-8 text-warm-brown text-[15px] leading-[1.9] max-w-md">
                계절이 바뀌면 재료도 바뀌고, 반죽의 온도도, 발효의 시간도
                달라집니다. 우리는 자연이 정해주는 리듬 안에서 가장 좋은 순간을
                기다립니다. 봄의 딸기, 여름의 복숭아, 가을의 밤, 겨울의 유자—
                계절이 선물하는 재료로 만든 크로와상은 그 자체로 자연의
                이야기입니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Wellness Section ── */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="bg-cream flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0 order-2 md:order-1">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
                02 — Wellness
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
                정직한 재료,
                <br />
                정직한 빵
              </h2>
              <p className="mt-8 text-warm-brown text-[15px] leading-[1.9] max-w-md">
                프랑스 AOP 인증 버터, 국내산 유기농 밀가루, 오랜 시간 키워온
                자연 발효종. srbbrs의 모든 크로와상은 이 세 가지로 시작됩니다.
                불필요한 첨가물을 넣지 않습니다. 마가린을 쓰지 않습니다.
                재료 본연의 맛이 스스로 말하도록, 우리는 한 걸음 뒤에
                서 있습니다.
              </p>
            </Reveal>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto order-1 md:order-2">
            <Image
              src="/images/story-bread.jpg"
              alt="장인의 빵"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Quote Divider ── */}
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
            <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl text-cream leading-[1.4] tracking-tight">
              &ldquo;좋은 빵은
              <br />
              좋은 시간으로부터
              <br />
              태어납니다&rdquo;
            </blockquote>
            <p className="mt-8 text-cream/50 text-sm tracking-[0.2em] uppercase">
              — srbbrs
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Leisure Section ── */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/story-sunrise.jpg"
              alt="일출"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-cream-dark flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
                03 — Leisure
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
                서두르지 않는
                <br />
                시간의 가치
              </h2>
              <p className="mt-8 text-warm-brown text-[15px] leading-[1.9] max-w-md">
                좋은 크로와상에는 시간이 필요합니다. 새벽에 시작한 반죽은 길고
                느린 발효를 거치며 풍미를 쌓아갑니다. 72겹의 결을 만들기 위해
                접고, 쉬고, 다시 접는 과정을 반복합니다. 그리고 마침내 오븐에서
                나온 크로와상을 천천히 음미하는 순간—그것이 srbbrs가 지키고 싶은
                여유입니다.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Rest Section ── */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[70vh]">
          <div className="bg-cream flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0 order-2 md:order-1">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
                04 — Rest
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
                일상 속
                <br />
                작은 쉼표
              </h2>
              <p className="mt-8 text-warm-brown text-[15px] leading-[1.9] max-w-md">
                srbbrs는 단순한 베이커리가 아닙니다. 바쁜 하루 속에서 잠시
                멈추어 서는 공간, 일상에 마침표가 아닌 쉼표를 찍는 곳입니다.
                따뜻한 크로와상 한 조각과 커피 한 잔이 만드는 고요한 시간.
                그 순간만큼은 온전히 나를 위한 시간이 됩니다.
              </p>
            </Reveal>
          </div>
          <div className="relative aspect-[4/3] md:aspect-auto order-1 md:order-2">
            <Image
              src="/images/story-coffee.jpg"
              alt="커피 한 잔의 여유"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Values Grid ── */}
      <section className="py-24 md:py-36 px-6 lg:px-8 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-cream/35 mb-3">
              Our Values
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              네 가지 가치
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-px bg-cream/10">
            {values.map((v, i) => (
              <Reveal key={v.en} delay={i * 100}>
                <div className="bg-espresso p-8 md:p-12 lg:p-16 min-h-[280px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="font-serif text-4xl md:text-5xl text-cream/10">
                        {v.num}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl text-cream">
                          {v.title}
                        </h3>
                        <p className="text-[11px] tracking-[0.2em] uppercase text-cream/30 mt-1">
                          {v.en}
                        </p>
                      </div>
                    </div>
                    <p className="text-cream/55 text-[15px] leading-[1.9] max-w-md">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.3]">
              느림의 결로 빚은
              <br />
              한 조각의 크로와상이
              <br />
              당신의 하루를 채우길.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#menu"
                className="inline-block border border-espresso/15 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
              >
                메뉴 보기
              </Link>
              <Link
                href="/#visit"
                className="inline-block border border-espresso/15 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
              >
                매장 방문
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-espresso/8 py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.25em] text-espresso"
          >
            SRBBRS
          </Link>
          <p className="text-[11px] text-warm-brown/60 tracking-wide">
            © 2024 SRBBRS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
