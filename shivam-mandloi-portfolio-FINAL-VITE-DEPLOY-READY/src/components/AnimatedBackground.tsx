export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-botanical-dots">
      <div className="orb-a absolute -left-24 -top-20 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(5,150,105,0.13),transparent_68%)]" />
      <div className="orb-b absolute -right-24 top-[22%] h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(15,52,40,0.09),transparent_70%)]" />
      <div className="orb-a absolute bottom-0 left-[28%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_70%)]" />
      <div className="hidden md:block absolute right-[8%] top-28 h-24 w-24 rotate-12 rounded-3xl border border-emerald-700/20 bg-emerald-500/[0.04]" />
      <div className="hidden md:block absolute left-[6%] top-[430px] h-16 w-16 rounded-full border border-forest/20" />
      <div className="hidden lg:block absolute right-[18%] top-[560px] h-10 w-10 -rotate-12 rounded-xl border border-emerald-600/25 bg-ivory/70" />
    </div>
  );
}
