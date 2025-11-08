import React from "react";

type BookingProps = { open: boolean; onClose: () => void };
const BookingModal: React.FC<BookingProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl relative">
        <button aria-label="Sluiten" onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#0B1E3A]">Plan een gratis intake</h3>
          <p className="text-gray-600 mb-6">Kies uw voorkeursmoment of laat uw gegevens achter—wij bevestigen zo snel mogelijk.</p>
          <div className="mb-6 rounded-xl border border-dashed border-gray-300 p-4 text-center">
            <p className="font-medium mb-1">Bekijk hier de agenda</p>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">https://calendly.com/acufin/intake-30m</code>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
            <input placeholder="Naam" required className="rounded-full px-4 py-3 border" />
            <input type="email" placeholder="E-mail" required className="rounded-full px-4 py-3 border" />
            <input placeholder="Telefoon" className="rounded-full px-4 py-3 border" />
            <input type="date" className="rounded-full px-4 py-3 border" />
            <input type="time" className="rounded-full px-4 py-3 border" />
            <select className="rounded-full px-4 py-3 border">
              <option>Videocall</option>
              <option>Kantoor Antwerpen</option>
            </select>
            <div className="md:col-span-2">
              <textarea placeholder="Uw vragen of context (optioneel)" rows={4} className="rounded-2xl p-4 border w-full" />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              <button type="button" onClick={onClose} className="rounded-full px-5 py-3 border">Annuleren</button>
              <button className="bg-[#0B1E3A] text-white rounded-full px-6 py-3 font-semibold">Bevestig aanvraag</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default BookingModal;
