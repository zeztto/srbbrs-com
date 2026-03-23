import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "제빵사 이도현 | SRBBRS",
  description:
    "건축을 하던 손이 반죽을 만지기 시작했습니다. srbbrs 제빵사 이도현의 이야기.",
};

const timeline = [
  {
    year: "2006",
    title: "건축을 시작하다",
    desc: "서울대학교 건축학과를 졸업하고, 세계적인 건축사무소에서 공간을 설계하는 일을 시작했습니다.",
  },
  {
    year: "2015",
    title: "파리에서의 전환",
    desc: "출장 중 들른 파리의 작은 불랑주리에서 운명적인 크로와상을 만났습니다. 그날 밤, 사표를 쓰기로 결심했습니다.",
  },
  {
    year: "2016",
    title: "르 꼬르동 블루",
    desc: "파리 르 꼬르동 블루에 입학. 1년간 제빵의 기초부터 다시 시작했습니다. 건축에서 배운 구조의 감각이 빵의 결을 이해하는 데 도움이 되었습니다.",
  },
  {
    year: "2018",
    title: "도쿄, 그리고 서울",
    desc: "도쿄의 미슐랭 베이커리에서 2년간 수련. 동양적 섬세함과 프랑스 전통의 조화를 배웠습니다.",
  },
  {
    year: "2020",
    title: "srbbrs의 탄생",
    desc: "서울 성동구에 작은 공방을 열었습니다. 하루 50개 한정, 오직 크로와상만을 굽기 시작했습니다.",
  },
  {
    year: "현재",
    title: "매일의 새벽",
    desc: "여전히 매일 새벽 4시에 일어나 반죽을 시작합니다. 완벽한 크로와상은 없다고 생각합니다. 그래서 매일이 새롭습니다.",
  },
];

export default function BakerPage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-svh">
        <div className="grid md:grid-cols-2 min-h-svh">
          <div className="relative aspect-[3/4] md:aspect-auto">
            <Image
              src="/images/baker-portrait.jpg"
              alt="제빵사 이도현"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="bg-cream flex items-center px-8 md:px-16 lg:px-20 py-16 md:py-0">
            <div>
              <p className="text-[11px] tracking-[0.4em] uppercase text-warm-brown animate-hero">
                Master Baker
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso leading-[1.15] mt-4 animate-hero delay-1">
                이도현
              </h1>
              <p className="text-warm-brown text-lg mt-2 animate-hero delay-1">
                Lee Dohyun
              </p>
              <div className="mt-8 space-y-5 text-warm-brown text-[15px] leading-[1.9] max-w-md animate-hero delay-2">
                <p>
                  건축을 하던 손이 반죽을 만지기 시작한 건 서른일곱의 어느
                  늦가을이었습니다.
                </p>
                <p>
                  구조를 세우던 감각으로 크로와상의 72겹을 쌓고, 공간을 설계하던
                  눈으로 빵의 결을 읽습니다.
                </p>
              </div>
              <div className="mt-10 animate-hero delay-3">
                <a
                  href="#journey"
                  className="inline-block border border-espresso/15 rounded-full px-8 py-3 text-xs tracking-[0.2em] uppercase text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
                >
                  이야기 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-espresso py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-[1.5] tracking-tight">
              &ldquo;건축은 사람이 머무는 공간을 만들고,
              <br />
              빵은 사람이 머무는 시간을 만듭니다&rdquo;
            </blockquote>
            <p className="mt-6 text-cream/40 text-sm">— 이도현</p>
          </Reveal>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
              Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
              구조를 아는 손이
              <br />
              만드는 결
            </h2>
            <div className="mt-8 space-y-6 text-warm-brown text-[15px] leading-[1.9]">
              <p>
                10년간 건축을 했습니다. 도면 위에 선을 긋고, 구조를 계산하고,
                공간에 빛이 들어오는 각도를 고민했습니다. 지금은 반죽 위에서
                같은 일을 합니다.
              </p>
              <p>
                버터가 반죽 사이에서 녹아드는 온도, 글루텐이 형성되는 힘의
                방향, 오븐 안에서 수증기가 빠져나가는 타이밍. 크로와상의 72겹은
                하나의 작은 건축입니다.
              </p>
              <p className="text-espresso/60">
                다만 건축과 다른 점이 하나 있습니다. 빵은 완성되는 순간
                사라집니다. 그래서 매일 다시 짓습니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/baker-work.jpg"
                alt="주방에서 작업하는 모습"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-espresso/5" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Daily Routine ── */}
      <section className="bg-cream-dark py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
              Daily Routine
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
              도현의 하루
            </h2>
          </Reveal>

          <div className="mt-16 space-y-0">
            {[
              { time: "04:00", desc: "기상. 찬물로 세수한 후 공방으로 향합니다." },
              { time: "04:30", desc: "전날 냉장 숙성한 반죽을 꺼내 온도를 확인합니다." },
              { time: "05:00", desc: "접기 시작. 3번의 접기와 휴지를 반복합니다." },
              { time: "06:30", desc: "성형. 하나하나 손으로 크로와상 모양을 만듭니다." },
              { time: "07:00", desc: "2차 발효. 이 시간 동안 에스프레소 한 잔의 여유." },
              { time: "08:30", desc: "굽기. 오븐 앞에서 색과 향을 관찰합니다." },
              { time: "09:00", desc: "오픈. 갓 구워낸 크로와상과 함께 하루가 시작됩니다." },
              { time: "15:00", desc: "다음 날을 위한 반죽 준비. 24시간 저온 숙성에 들어갑니다." },
              { time: "17:00", desc: "시즌 메뉴 연구. 계절 재료를 시식하고 레시피를 기록합니다." },
            ].map((item, i) => (
              <Reveal key={item.time} delay={i * 50}>
                <div className="flex gap-6 md:gap-10 py-5 border-b border-espresso/8 group">
                  <span className="font-serif text-lg md:text-xl text-caramel w-16 shrink-0">
                    {item.time}
                  </span>
                  <p className="text-warm-brown text-[15px] leading-relaxed group-hover:text-espresso transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section id="journey" className="py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
              Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
              건축에서 빵으로
            </h2>
          </Reveal>

          <div className="mt-16 md:mt-24">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <div className="grid md:grid-cols-[120px_1fr] gap-4 md:gap-10 pb-12 md:pb-16 relative">
                  <div className="hidden md:block absolute left-[59px] top-8 bottom-0 w-px bg-espresso/8" />
                  <div className="relative">
                    <span className="font-serif text-2xl md:text-3xl text-caramel">
                      {item.year}
                    </span>
                    <span className="hidden md:block absolute left-[47px] top-3 w-2.5 h-2.5 rounded-full bg-caramel z-10" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-espresso">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-warm-brown text-[15px] leading-[1.9] max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personal Note ── */}
      <section className="relative py-32 md:py-44 px-6">
        <Image
          src="/images/story-sunrise.jpg"
          alt="새벽 일출"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.4em] uppercase text-cream/40 mb-6">
              A Note from Dohyun
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-[1.5]">
              매일 같은 시간에 일어나
              <br />
              매일 같은 반죽을 하지만,
              <br />
              같은 크로와상은 하나도 없습니다.
              <br />
              <span className="text-cream/60">그래서 이 일이 좋습니다.</span>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-24 md:py-36 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-serif text-3xl md:text-4xl text-espresso leading-[1.3]">
              도현이 만든 크로와상을
              <br />
              만나보세요.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#menu"
                className="inline-block border border-espresso/15 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
              >
                메뉴 보기
              </Link>
              <Link
                href="/story"
                className="inline-block border border-espresso/15 rounded-full px-10 py-3.5 text-xs tracking-[0.2em] uppercase text-espresso hover:bg-espresso hover:text-cream transition-all duration-500"
              >
                브랜드 스토리
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
