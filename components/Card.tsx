import Link from "next/link";

type Props = {
  title: string;
  text?: string;
  cta?: string;
  href?: string;
  className?: string;
  newTab?: boolean;
};

export default function Card({
  title,
  text,
  cta = "Meer info",
  href,
  className = "",
  newTab = false,
}: Props) {
  const body = (
    <div className={`rounded-2xl border border-gray-200 p-6 hover:border-gray-300 transition bg-white h-full ${className}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      {text && <p className="mt-2 text-gray-600 text-sm leading-6">{text}</p>}
      {href && (
        <span className="mt-4 inline-block text-sm font-medium text-blue-700">
          {cta} →
        </span>
      )}
    </div>
  );

  if (href) {
    return newTab ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {body}
      </a>
    ) : (
      <Link href={href}>
        {body}
      </Link>
    );
  }

  return body;
}
