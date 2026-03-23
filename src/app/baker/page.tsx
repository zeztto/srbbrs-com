import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "제빵사 이도현 | SRBBRS",
  description:
    "건축을 하던 손이 반죽을 만지기 시작했습니다. srbbrs 제빵사 이도현의 이야기.",
};

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
                  파리에서 크로와상의 결에 매료되어, 르 꼬르동 블루를 거쳐 서울로
                  돌아왔습니다. 구조를 세우던 감각으로 72겹을 쌓습니다.
                </p>
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

      {/* ── Hands / Philosophy ── */}
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
                버터가 반죽 사이에서 녹아드는 온도, 글루텐이 형성되는 힘의 방향,
                오븐 안에서 수증기가 빠져나가는 타이밍. 크로와상의 72겹은
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
                src="/images/baker-hands.jpg"
                alt="반죽을 만드는 손"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dough / Process ── */}
      <section className="relative">
        <div className="grid md:grid-cols-2 min-h-[60vh]">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/baker-dough.jpg"
              alt="밀가루와 반죽"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-cream-dark flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <Reveal>
              <p className="text-[11px] tracking-[0.4em] uppercase text-caramel mb-3">
                Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-[1.2]">
                새벽의 루틴
              </h2>
              <div className="mt-10 space-y-0">
                {[
                  { time: "04:00", desc: "기상. 공방으로 향합니다." },
                  { time: "04:30", desc: "숙성 반죽의 온도를 확인합니다." },
                  { time: "05:00", desc: "접기와 휴지를 반복합니다." },
                  { time: "06:30", desc: "하나하나 손으로 성형합니다." },
                  { time: "08:30", desc: "오븐 앞에서 색과 향을 관찰합니다." },
                  { time: "09:00", desc: "갓 구워낸 크로와상으로 오픈." },
                ].map((item) => (
                  <div
                    key={item.time}
                    className="flex gap-6 py-3.5 border-b border-espresso/6"
                  >
                    <span className="font-serif text-base text-caramel w-14 shrink-0">
                      {item.time}
                    </span>
                    <p className="text-warm-brown text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Personal Note ── */}
      <section className="relative py-32 md:py-44 px-6">
        <Image
          src="/images/story-sunrise.jpg"
          alt="새벽"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal>
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

      {/* ── CTA ── */}
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
