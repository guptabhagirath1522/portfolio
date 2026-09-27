export function Loader({ progress }: { progress: number }) {
  return (
    <div className="curtain-loader fixed inset-0 z-[100] flex flex-col justify-between bg-[#152019] p-6 text-white sm:p-10">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em]">
        <span>BG / Portfolio</span>
        <span>Loading experience</span>
      </div>
      <div>
        <div className="mb-4 flex items-end justify-between">
          <span className="text-[clamp(5rem,18vw,12rem)] font-semibold leading-none tracking-[-0.1em] text-[#d7f45e]">
            {progress}
          </span>
          <span className="pb-3 text-sm text-white/50">%</span>
        </div>
        <div className="h-px w-full bg-white/20">
          <div
            className="h-full bg-[#d7f45e] transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-5 text-sm text-white/50">Pulling back the curtain.</p>
      </div>
    </div>
  )
}
