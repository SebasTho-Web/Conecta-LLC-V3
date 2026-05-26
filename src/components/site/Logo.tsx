export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-gradient-purple p-2 text-primary-foreground font-serif font-bold text-xs shadow-soft ${className}`}
    >
      Conecta
    </div>
  );
}
