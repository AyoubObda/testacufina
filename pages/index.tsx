import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import BookingModal from "../components/BookingModal";
import { buildMailto, isValidEmail } from "../utils";

const LUCY_URL_DEFAULT =
  "https://idp.getlucy.ai/realms/LUCY/protocol/openid-connect/au...penid&nonce=38cdd549-d0ab-4e3a-a5df-267218a3e5ba&tenantId=lucy";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const canSend = isValidEmail(email) && name.trim().length > 1;
  const mailtoHref = useMemo(() => {
    return buildMailto("Nieuwe contactaanvraag via website", [
      `Naam: ${name}`,
      `E-mail: ${email}`,
      `Tel: ${tel}`,
    ]);
  }, [name, email, tel]);

  const handleBook = () => setOpen(true);

  return (
    <div className="font-sans text-gray-900 bg-white" id="home">
      <Header lucyUrl={process.env.NEXT_PUBLIC_LUCY_URL || LUCY_URL_DEFAULT} />

      {/* Hero */}
      <section className="px-8 pt-16 pb-12 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Groeien met zekerheid
            </h1>
            <p className="mt-4 text-gray-600 md:text-xl">
              Fiscaal en financieel advies voor KMO’s en zelfstandigen. Transparant, proactief en resultaatgericht.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
              >
                Contact opnemen
              </a>
              <button
                onClick={handleBook}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black transition shadow-sm"
              >
                Afspraak boeken
              </button>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/hero-illustration.svg"
              alt="ACUFIN – advies en optimalisatie"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section id="diensten" className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0B1E3A]">
            Diensten
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Boekhouding & Jaarrekening"
              text="Volledige ontzorging + realtime rapporten."
              cta="Meer info"
              href="#contact"
            />
            <Card
              title="Fiscale optimalisatie"
              text="BTW, VenB & IPP zonder verrassingen."
              cta="Meer info"
              href="#contact"
            />
            <Card
              title="CFO-as-a-Service"
              text="Sturing op cash, marge en groei."
              cta="Meer info"
              href="#contact"
            />
            <Card
              title="Starters & vennootschap"
              text="Van idee naar bv met de juiste structuur."
              cta="Meer info"
              href="#contact"
            />
            <Card
              title="BTW & internationale handel"
              text="OSS/IOSS, intrastat en ketentransacties."
              cta="Meer info"
              href="#contact"
            />
            <Card
              title="Herstructurering & asset protection"
              text="Slimme holdings en risicoscheiding."
              cta="Meer info"
              href="#contact"
            />
          </div>
        </div>
      </section>

      {/* Cases & Getuigenissen */}
      <section id="cases" className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0B1E3A]">
            Cases & Getuigenissen
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card
              title="Bouw-KMO: +27% cash in 4 maanden"
              text="Facturatie & voorraad vereenvoudigd, beter werkkapitaal."
              cta="Lees meer"
              href="#contact"
            />
            <Card
              title="E-commerce: BTW-OSS zonder kopzorgen"
              text="Correcte BTW per land en minder admin."
              cta="Lees meer"
              href="#contact"
            />
            <Card
              title="Consultancy: winst +12% via prijsbeleid"
              text="Van uurtje-factuurtje naar waarde-pricing."
              cta="Lees meer"
              href="#contact"
            />
            <Card
              title="Dashboarding die wél gebruikt wordt"
              text="KPI’s die sturen i.p.v. verlammen."
              cta="Lees meer"
              href="#contact"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-gray-50 py-16 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/teamfoto.png"
              alt="ACUFIN team"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Team</h2>
            <p className="text-gray-600 leading-7">
              Wij zijn een compact, ervaren team met focus op KMO’s en zelfstandigen. Transparant, pragmatisch en met oog voor resultaat.
            </p>
            <ul className="mt-6 grid gap-2 text-gray-800">
              <li>• Fiscale experts</li>
              <li>• Digital-first boekhouders</li>
              <li>• CFO-as-a-Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 border-t">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[#0B1E3A]">
            Contact & Afspraak
          </h2>

          <form
            onSubmit={(e) => {
              if (!canSend) e.preventDefault();
            }}
            className="grid gap-4"
            action={mailtoHref}
            method="GET"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Naam</label>
                <input
                  type="text"
                  className="w-full rounded-xl border px-3 py-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jouw naam"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">E-mail</label>
                <input
                  type="email"
                  className="w-full rounded-xl border px-3 py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="naam@bedrijf.be"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Telefoon (optioneel)
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border px-3 py-2"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="+32 …"
              />
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm disabled:opacity-50"
              >
                Verstuur e-mail
              </button>

              <button
                type="button"
                onClick={handleBook}
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-gray-900 text-white hover:bg-black transition shadow-sm"
              >
                Boek afspraak
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
