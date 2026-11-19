"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useLang } from "./LangContext";
import { Check } from "./Icons";


/** +998 (99) 500-20-20 ko'rinishidagi niqob */
function maskPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("998")) d = d.slice(3);
  d = d.slice(0, 9);
  let out = "+998";
  if (d.length > 0) out += " (" + d.slice(0, 2);
  if (d.length >= 2) out += ")";
  if (d.length > 2) out += " " + d.slice(2, 5);
  if (d.length > 5) out += "-" + d.slice(5, 7);
  if (d.length > 7) out += "-" + d.slice(7, 9);
  return out;
}

const today = () => {
  const n = new Date();
  return new Date(n.getTime() - n.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};

type Errors = Partial<Record<"name" | "phone" | "date", "errName" | "errPhone" | "errDate">>;

export default function Booking() {
  const { t } = useLang();
  const f = t.form;
  const [form, setForm] = useState({ name: "", phone: "+998", date: "", time: "19:00", guests: 4, type: 0, comment: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [code, setCode] = useState("");

  useEffect(() => {
    const h = (e: Event) => setForm((s) => ({ ...s, type: (e as CustomEvent<number>).detail, guests: Math.max(s.guests, 50) }));
    window.addEventListener("booking:type", h);
    return () => window.removeEventListener("booking:type", h);
  }, []);

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Errors = {};
    if (form.name.trim().length < 2) er.name = "errName";
    if (form.phone.replace(/\D/g, "").length !== 12) er.phone = "errPhone";
    if (!form.date) er.date = "errDate";
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    // Namuna: haqiqiy yuborish yo'q. Kelajakda shu yerga Telegram bot / API ulanadi.
    setTimeout(() => {
      setCode("OT-" + Math.floor(100000 + Math.random() * 900000));
      setStatus("done");
    }, 1200);
  };

  const close = () => {
    setStatus("idle");
    setForm({ name: "", phone: "+998", date: "", time: "19:00", guests: 4, type: 0, comment: "" });
  };

  return (
    <section className="section booking" id="booking">
      <div className="container booking-in">
        <div className="booking-copy" data-reveal>
          <span className="eyebrow">{f.eyebrow}</span>
          <h2 className="h2">{f.title}</h2>
          <p>{f.text}</p>
        </div>

        <form className="form" onSubmit={submit} noValidate data-reveal>
          <label className={`field ${errors.name ? "err" : ""}`}>
            <span>{f.name}</span>
            <input value={form.name} onChange={(e) => set("name", e.target.value)} autoComplete="name" placeholder="Aziz Karimov" />
            {errors.name && <em>{f[errors.name]}</em>}
          </label>
          <label className={`field ${errors.phone ? "err" : ""}`}>
            <span>{f.phone}</span>
            <input value={form.phone} onChange={(e) => set("phone", maskPhone(e.target.value))} inputMode="tel" autoComplete="tel" />
            {errors.phone && <em>{f[errors.phone]}</em>}
          </label>
          <div className="row3">
            <label className={`field ${errors.date ? "err" : ""}`}>
              <span>{f.date}</span>
              <input type="date" min={today()} value={form.date} onChange={(e) => set("date", e.target.value)} />
              {errors.date && <em>{f[errors.date]}</em>}
            </label>
            <label className="field">
              <span>{f.time}</span>
              <input type="time" min="08:00" max="22:00" value={form.time} onChange={(e) => set("time", e.target.value)} />
            </label>
            <div className="field">
              <span>{f.guests}</span>
              <div className="stepper">
                <button type="button" onClick={() => set("guests", Math.max(1, form.guests - 1))} aria-label="−">−</button>
                <input
                  value={form.guests}
                  inputMode="numeric"
                  aria-label={f.guests}
                  onChange={(e) => set("guests", Math.min(500, Math.max(1, Number(e.target.value.replace(/\D/g, "")) || 1)))}
                />
                <button type="button" onClick={() => set("guests", Math.min(500, form.guests + 1))} aria-label="+">+</button>
              </div>
            </div>
          </div>
          <div className="field">
            <span>{f.type}</span>
            <div className="pills">
              {f.types.map((x, i) => (
                <button type="button" key={x} className={form.type === i ? "on" : ""} onClick={() => set("type", i)}>
                  {x}
                </button>
              ))}
            </div>
          </div>
          <label className="field">
            <span>{f.comment}</span>
            <textarea rows={3} value={form.comment} onChange={(e) => set("comment", e.target.value)} />
          </label>
          <button className="btn btn-primary btn-block" disabled={status === "sending"}>
            {status === "sending" ? <><i className="spinner" /> {f.sending}</> : f.submit}
          </button>
        </form>
      </div>

      {status === "done" && (
        <div className="modal" role="dialog" aria-modal="true" onClick={close}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <span className="ok-ic"><Check width={34} height={34} /></span>
            <h3>{f.okTitle}</h3>
            <p>{f.okText}</p>
            <b className="code accent-text">{code}</b>
            <button className="btn btn-primary" onClick={close} autoFocus>{f.okClose}</button>
          </div>
        </div>
      )}
    </section>
  );
}
