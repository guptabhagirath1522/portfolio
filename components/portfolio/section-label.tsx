export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-2 w-2 rounded-full bg-[#b7d93b]" />
      {children}
    </p>
  )
}
