import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MonitorCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Countdown } from "@/components/Countdown";
import { FluidShaderBackground } from "@/components/FluidShaderBackground";
import { Logo } from "@/components/Logo";
import { QWatermark } from "@/components/QWatermark";
import { ThemeToggle } from "@/components/ThemeToggle";

const SERVICES = [
  {
    tag: "Launch 01",
    icon: MonitorCheck,
    title: "Real CBT Exam Simulation",
    desc: "Students will practice in a real exam flow with timer, palette navigation, and frictionless autosave.",
  },
  {
    tag: "Launch 02",
    icon: Users,
    title: "Student + Institute Workspace",
    desc: "Separate experiences for students and admins so each role sees the right controls at the right time.",
  },
  {
    tag: "Launch 03",
    icon: FileText,
    title: "Insight-Driven Analytics",
    desc: "Score trends, section-level strengths, and time behavior analytics designed for measurable progress.",
  },
  {
    tag: "Launch 04",
    icon: BarChart3,
    title: "Controlled Institutional Testing",
    desc: "Institutes get structured scheduling, test governance, and confident oversight from one clean dashboard.",
  },
];

const FOUNDERS = [
  {
    name: "Sujal Solanki",
    image: "/sujal.jpg",
    email: "sujalkumarofficial2005@gmail.com",
  },
  {
    name: "Kamlesh Suthar",
    image: "/kamlesh.jpg",
    email: "kamleshsuthar.dev@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FluidShaderBackground />
      <div className="scene-grid pointer-events-none absolute inset-0 opacity-35 dark:opacity-70" aria-hidden />
      <div className="hero-orb hero-orb-left pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full" aria-hidden />
      <div className="hero-orb hero-orb-right pointer-events-none absolute -right-32 top-12 h-96 w-96 rounded-full" aria-hidden />
      <div
        className="hero-orb hero-orb-bottom pointer-events-none absolute -bottom-36 left-1/3 h-112 rounded-full"
        style={{ width: "28rem" }}
        aria-hidden
      />

      <QWatermark />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-310 flex-col px-5 py-5 sm:px-7 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[hsl(var(--border))]/70 pb-5 pt-2 backdrop-blur-sm animate-in fade-in duration-500">
          <div className="flex items-center gap-4">
            <Logo />
          </div>

          <div className="flex items-center gap-3">
            <Badge className="brand-surface gap-2 border border-[hsl(var(--border))] font-mono text-[10px] tracking-[0.22em] text-[hsl(var(--foreground))] shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:text-[hsl(var(--foreground))]">
              <span className="size-2 rounded-full bg-(--brand-yellow) shadow-[0_0_18px_var(--brand-yellow)]" />
              Launching soon
            </Badge>
            <ThemeToggle />
          </div>
        </header>

        <main className="space-y-(--section-gap) py-8 sm:py-10">
          <section className="grid gap-12 justify-items-center">
            <div className="space-y-(--hero-gap) text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="brand-surface inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-4 py-2 text-[11px] shadow-(--shadow-soft)">
                <span className="size-2 rounded-full bg-(--brand-yellow) shadow-[0_0_24px_var(--brand-yellow)]" />
                <span className="font-mono uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
                  Multi-Exam Computer-Based Testing Platform
                </span>
              </div>

              <div className="space-y-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[hsl(var(--muted-foreground))]">
                  // premium launch for students and institutes
                </p>
                <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-6xl lg:text-7xl xl:text-8xl">
                  <span className="block whitespace-nowrap">Built for Serious Exam Practice.</span>
                  <span className="block">Coming Soon.</span>
                </h1>
              </div>

            </div>
          </section>

          <div className="mx-auto w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card className="brand-surface border border-[hsl(var(--border))] shadow-(--shadow-soft)">
              <CardHeader className="space-y-3 p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
                  // Launch timer
                </p>
                <CardTitle className="text-xl text-[hsl(var(--foreground))]">
                  Coming Soon Countdown
                </CardTitle>
                <CardDescription className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                  A clear launch timer placed right after the hero so visitors can see it immediately.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                <Countdown />
              </CardContent>
            </Card>
          </div>

          <section className="space-y-8 animate-in fade-in duration-700">
            <div className="premium-divider" aria-hidden />

            <div id="features" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {SERVICES.map((service) => (
                <Card
                  key={service.tag}
                  className="brand-surface group overflow-hidden border border-[hsl(var(--border))] shadow-(--shadow-soft) transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="space-y-4 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--brand-yellow)/12 text-(--brand-yellow-dark) transition-transform duration-300 group-hover:scale-105">
                        <service.icon size={18} />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--muted-foreground))]">
                        {service.tag}
                      </span>
                    </div>
                    <CardTitle className="text-lg leading-snug tracking-tight text-[hsl(var(--foreground))]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <CardDescription className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="brand-surface border border-[hsl(var(--border))] shadow-(--shadow-soft)">
                <CardHeader className="space-y-3 p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
                    // Current build scope
                  </p>
                  <CardTitle className="text-xl text-[hsl(var(--foreground))]">
                    What Is Ready Right Now
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    We are finalizing the launch baseline with stable exam flow, admin controls,
                    and structured data visibility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 p-5 pt-0 sm:p-6 sm:pt-0">
                  {[
                    "Real-time CBT interface prototype with timed exam behavior.",
                    "Question pattern coverage for MCQ, MSQ, and numerical answers.",
                    "Institution-side creation workflow and batch structuring model.",
                    "Performance analytics framework and dashboard foundations.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="brand-surface-soft flex items-start gap-3 rounded-[20px] border border-[hsl(var(--border))] px-4 py-3"
                    >
                      <ShieldCheck size={15} className="mt-0.5 shrink-0 text-(--brand-yellow-dark)" />
                      <p className="text-sm text-[hsl(var(--muted-foreground))]">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="brand-surface border border-[hsl(var(--border))] shadow-(--shadow-soft)">
                <CardHeader className="space-y-3 p-5 sm:p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[hsl(var(--muted-foreground))]">
                    // Next release wave
                  </p>
                  <CardTitle className="text-xl text-[hsl(var(--foreground))]">
                    What Ships In Early Access
                  </CardTitle>
                  <CardDescription className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">
                    Early users will get full workflow validation before public release,
                    with direct iteration from real usage feedback.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                  {[
                    "Closed beta onboarding for selected institutes and student groups.",
                    "Launch analytics reports with section and attempt-level depth.",
                    "Improved anti-cheating guardrails and scheduling reliability.",
                    "Dedicated onboarding support from the Proctera founding team.",
                  ].map((line) => (
                    <div
                      key={line}
                      className="brand-surface-soft flex items-start gap-3 rounded-[18px] border border-[hsl(var(--border))] px-4 py-3 text-sm text-[hsl(var(--muted-foreground))]"
                    >
                      <ShieldCheck size={16} className="mt-0.5 shrink-0 text-(--brand-yellow-dark)" />
                      <span>{line}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

          </section>
        </main>

        <footer className="pb-2 pt-6 animate-in fade-in duration-700 delay-300">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.32em] text-[hsl(var(--muted-foreground))]">
            // Interested? Reach out directly
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <a
                key={founder.email}
                href={`mailto:${founder.email}`}
                className="brand-surface group flex items-center justify-between gap-4 rounded-[22px] border border-[hsl(var(--border))] px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--muted))]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-base">
                      {founder.name}
                    </p>
                    <p className="truncate font-mono text-[11px] text-[hsl(var(--muted-foreground))] sm:text-[12px]">
                      {founder.email}
                    </p>
                  </div>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] transition-colors duration-300 group-hover:text-[hsl(var(--foreground))]">
                  <ArrowUpRight size={15} />
                </div>
              </a>
            ))}
          </div>
        </footer>

      </div>
    </div>
  );
}