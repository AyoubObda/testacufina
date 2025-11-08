import { ReactNode } from "react";

export default function PageHero({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <section className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-gray-600 md:text-xl">{subtitle}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-3 justify-center">{actions}</div>}
      </div>
    </section>
  );
}
