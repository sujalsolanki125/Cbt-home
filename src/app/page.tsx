import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Countdown } from "@/components/Countdown";
import { QWatermark } from "@/components/QWatermark";
import {
  Mail,
  Linkedin,
  ArrowUpRight,
  MonitorCheck,
  Users,
  FileText,
  BarChart3,
} from "lucide-react";

const SERVICES = [
  {
    tag: "Service 01",
    icon: MonitorCheck,
    title: "White-Label Testing Engine",
    desc: "Fully branded CBT platform — your logo, your domain, your experience. GATE 2026-style UI powered by Proctera infrastructure.",
  },
  {
    tag: "Service 02",
    icon: Users,
    title: "Student Management",
    desc: "Institutes → Batches → Students hierarchy with role-based access, performance history, and configurable attempt limits.",
  },
  {
    tag: "Service 03",
    icon: FileText,
    title: "Test Management",
    desc: "Create and schedule MCQ, MSQ, and NAT exams with LaTeX math rendering, server-side scoring, and deterministic results.",
  },
  {
    tag: "Service 04",
    icon: BarChart3,
    title: "Live Monitoring & Reports",
    desc: "Real-time exam surveillance, server-side timers with zero client trust, and detailed batch-level statistics.",
  },
];

const FOUNDERS = [
  {
    initials: "SS",
    name: "Sujal Solanki",
    image: "/sujal.jpg",
    email: "sujalkumarofficial2005@gmail.com",
    // linkedin: "https://www.linkedin.com/in/sujalkumar-solanki/",
  },
  {
    initials: "KS",
    name: "Kamlesh Suthar",
    image: "/kamlesh.jpg",
    email: "kamleshsuthar.dev@gmail.com",
    // linkedin: "https://www.linkedin.com/in/kamlesh-suthar/",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col ruled-bg">
      {/* ── Border frame ── */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[hsl(var(--foreground))] dark:bg-[var(--brand-yellow)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[hsl(var(--foreground))] dark:bg-[var(--brand-yellow)]" />
        <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[hsl(var(--foreground))] dark:bg-[var(--brand-yellow)]" />
        <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-[hsl(var(--foreground))] dark:bg-[var(--brand-yellow)]" />
      </div>

      {/* ── Yellow left stripe ── */}
      <div className="fixed left-0 top-0 bottom-0 w-[5px] bg-[var(--brand-yellow)] z-10" />

      {/* ── Bubble watermark ── */}
      <div
        className="fixed right-[3vw] top-1/2 -translate-y-1/2 grid gap-[9px] opacity-[0.07] pointer-events-none z-[1]"
        style={{ gridTemplateColumns: "repeat(4, 24px)" }}
        aria-hidden
      >
        {Array.from({ length: 56 }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-[hsl(var(--foreground))] ${
              i % 3 === 0 ? "bg-[hsl(var(--foreground))]" : ""
            }`}
          />
        ))}
      </div>

      {/* ── Q number watermark ── */}
      <QWatermark />

      {/* ── Page ── */}
      <div className="relative z-10 flex flex-col flex-1 min-h-screen px-[clamp(20px,5vw,60px)] pl-[clamp(24px,6vw,72px)] py-[clamp(20px,4vw,40px)]">

        {/* HEADER */}
        <header className="flex items-center justify-between flex-wrap gap-3 pb-[clamp(14px,2.5vw,22px)] border-b-2 border-[hsl(var(--border))] animate-in fade-in duration-500">
          <div className="flex flex-col gap-0.5">
            <Logo />
            <span className="font-mono text-[clamp(0.48rem,0.9vw,0.6rem)] tracking-[0.28em] uppercase text-[hsl(var(--muted-foreground))]">
              B2B Testing Infrastructure
            </span>
          </div>

          <div className="flex items-center gap-[clamp(10px,2vw,24px)] flex-wrap">
            <span className="font-mono text-[clamp(0.5rem,0.85vw,0.6rem)] tracking-[0.22em] uppercase text-[hsl(var(--muted-foreground))] hidden sm:block">
              v1.0.0-alpha
            </span>
            {/* <span className="font-mono text-[clamp(0.5rem,0.85vw,0.6rem)] tracking-[0.22em] uppercase text-[hsl(var(--muted-foreground))] hidden sm:block">
              GATE 2026 Style
            </span> */}
            <Badge variant="default" className="gap-1.5 font-mono text-[10px] tracking-widest rounded-none">
              <span className="size-1.5 rounded-full bg-[var(--brand-black)] animate-pulse" />
              Building
            </Badge>
            <ThemeToggle />
          </div>
        </header>

        {/* BODY */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[clamp(24px,4vw,52px)] items-center py-[clamp(16px,3vh,32px)]">

          {/* ── LEFT ── */}
          <div className="flex flex-col">
            {/* Section label */}
            {/* <p className="font-mono text-[clamp(0.5rem,0.85vw,0.6rem)] tracking-[0.32em] uppercase text-[var(--brand-yellow-dark)] mb-[clamp(12px,2.5vh,20px)] animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
              // Q.01 &nbsp;·&nbsp; Section: Launch &nbsp;·&nbsp; Marks: ∞
            </p> */}

            {/* Headline */}
            <div className="overflow-hidden">
              <h1 className="font-mono font-semibold text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.93] tracking-tighter text-[hsl(var(--foreground))] animate-in slide-in-from-bottom-8 duration-700 delay-200">
                Exam
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="font-mono font-semibold text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.93] tracking-tighter text-[hsl(var(--foreground))] animate-in slide-in-from-bottom-8 duration-700 delay-300">
                Platform
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1
                className="font-mono font-semibold text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.93] tracking-tighter animate-in slide-in-from-bottom-8 duration-700 delay-500"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2.5px hsl(var(--foreground))",
                }}
              >
                Rebuilt.
              </h1>
            </div>

            {/* Description */}
            <p className="mt-[clamp(16px,2.5vh,26px)] font-sans text-[clamp(0.75rem,1.1vw,0.92rem)] font-light leading-relaxed text-[hsl(var(--muted-foreground))] max-w-[420px] border-l-[3px] border-[var(--brand-yellow)] pl-[clamp(12px,1.5vw,18px)] animate-in fade-in duration-700 delay-700">
              White-label testing infrastructure for coaching institutes &amp; EdTech companies —
              GATE-style exams, student management, and live monitoring under your own brand.
            </p>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-[clamp(16px,2.5vh,26px)] animate-in fade-in duration-700 delay-[800ms]">
              {SERVICES.map((svc) => (
                <Card
                  key={svc.tag}
                  className="group hover:bg-[hsl(var(--foreground))] hover:border-[hsl(var(--foreground))] transition-colors duration-200 cursor-default"
                >
                  <CardHeader className="pb-2 p-4">
                    <p className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--brand-yellow-dark)] group-hover:text-[var(--brand-yellow)] mb-1">
                      {svc.tag}
                    </p>
                    <CardTitle className="flex items-center gap-2 group-hover:text-[var(--brand-bg)]">
                      <svc.icon size={14} className="shrink-0 text-[var(--brand-yellow-dark)] group-hover:text-[var(--brand-yellow)]" />
                      {svc.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="group-hover:text-[hsl(var(--muted))]">
                      {svc.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-[clamp(16px,2.5vh,26px)] animate-in fade-in duration-700 delay-[900ms]">
              <p className="font-mono text-[clamp(0.48rem,0.8vw,0.55rem)] tracking-[0.28em] uppercase text-[hsl(var(--muted-foreground))] mb-3">
                // Interested? Reach out directly
              </p>
              <div className="flex flex-wrap gap-3">
                {FOUNDERS.map((f) => (
                  <a
                    key={f.email}
                    href={`mailto:${f.email}`}
                    className="group flex items-center gap-3 border-2 border-[hsl(var(--border))] px-4 py-2.5 hover:bg-[var(--brand-yellow)] hover:border-[var(--brand-yellow)] transition-colors duration-200 no-underline"
                  >
                    <Image
                      src={f.image}
                      alt={f.name}
                      width={28}
                      height={28}
                      className="size-7 rounded-full object-cover border-2 border-[hsl(var(--border))] group-hover:border-[var(--brand-black)] shrink-0"
                    />
                    <div>
                      <p className="font-mono font-semibold text-[11px] tracking-wide text-[hsl(var(--foreground))] group-hover:text-[var(--brand-black)]">
                        {f.name}
                      </p>
                      <p className="font-sans text-[10px] text-[hsl(var(--muted-foreground))] group-hover:text-[var(--brand-black)] truncate max-w-[180px]">
                        {f.email}
                      </p>
                    </div>
                    <Mail size={13} className="text-[hsl(var(--muted-foreground))] group-hover:text-[var(--brand-black)] ml-auto shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex h-full flex-col items-start gap-5 animate-in fade-in duration-700 delay-500 ">
            <Countdown />
            {/* Countdown */}
          

            {/* Founders */}
            {/* <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-2">
                // Founders
              </p>
              <div className="flex flex-col gap-2">
                {FOUNDERS.map((f) => (
                  <Card key={f.name} className="p-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={f.image}
                        alt={f.name}
                        width={32}
                        height={32}
                        className="size-8 rounded-full object-cover border-2 border-[hsl(var(--border))] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-mono font-semibold text-[11px] tracking-wide text-[hsl(var(--foreground))]">
                          {f.name}
                        </p>
                        <div className="flex gap-3 mt-1">
                          <a
                            href={`mailto:${f.email}`}
                            className="flex items-center gap-1 font-mono text-[9px] tracking-widest uppercase text-[hsl(var(--muted-foreground))] hover:text-[var(--brand-yellow-dark)] transition-colors"
                          >
                            <Mail size={9} />
                            Email
                          </a>
                          <a
                            href={f.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 font-mono text-[9px] tracking-widest uppercase text-[hsl(var(--muted-foreground))] hover:text-[var(--brand-yellow-dark)] transition-colors"
                          >
                            <Linkedin size={9} />
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div> */}

            {/* Pills */}
            {/* <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-2">
                // Features
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "GATE 2026 UI",
                  "Multi-Tenant",
                  "LaTeX · MSQ · NAT",
                  "Server-Side Timer",
                  "Live Monitoring",
                  "Role-Based Access",
                ].map((tag, i) => (
                  <Badge
                    key={tag}
                    variant={i < 2 ? "default" : "outline"}
                    className="font-mono text-[9px] tracking-widest rounded-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div> */}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="animate-in fade-in duration-500 delay-1000">
          <Separator className="mb-[clamp(12px,2vw,18px)]" />
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div className="flex gap-[clamp(12px,2vw,24px)] flex-wrap">
              {[
                { label: "GitHub", href: "#" },
                { label: "Docs", href: "#" },
                { label: "Contact", href: `mailto:${FOUNDERS[0].email}` },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-1 font-mono text-[clamp(0.48rem,0.78vw,0.56rem)] tracking-[0.22em] uppercase text-[hsl(var(--muted-foreground))] hover:text-[var(--brand-yellow-dark)] transition-colors"
                >
                  {l.label}
                  <ArrowUpRight size={10} />
                </a>
              ))}
            </div>
            <div className="font-mono text-[clamp(0.42rem,0.62vw,0.5rem)] tracking-[0.16em] uppercase text-[hsl(var(--muted-foreground))] text-right leading-relaxed">
              B2B White-Label · Institutes → Batches → Students
              <br />
              <span className="opacity-60">© 2025 Proctera. All rights reserved.</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
