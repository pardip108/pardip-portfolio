"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured yet (missing NEXT_PUBLIC_WEB3FORMS_KEY). Please email me directly."
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your message. Please try again."
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message. Please try again."
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-space-md"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="font-label-code text-label-code text-on-surface font-medium"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSubmitting}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/50 text-on-surface placeholder:text-secondary font-body-sm focus:outline-none focus:border-on-surface transition-all disabled:opacity-60"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="font-label-code text-label-code text-on-surface font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSubmitting}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ada@example.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/50 text-on-surface placeholder:text-secondary font-body-sm focus:outline-none focus:border-on-surface transition-all disabled:opacity-60"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="font-label-code text-label-code text-on-surface font-medium"
        >
          Topic / Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          disabled={isSubmitting}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Project Inquiry / Tech Discussion"
          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/50 text-on-surface placeholder:text-secondary font-body-sm focus:outline-none focus:border-on-surface transition-all disabled:opacity-60"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="font-label-code text-label-code text-on-surface font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your idea, timeline, or just say hi..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/50 text-on-surface placeholder:text-secondary font-body-sm focus:outline-none focus:border-on-surface transition-all resize-none disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto self-start flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm font-medium hover:opacity-90 transition-all shadow-sm disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-[1.125rem] h-[1.125rem] animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-[1.125rem] h-[1.125rem]" />
          </>
        )}
      </button>

      {status === "success" && (
        <div
          role="status"
          className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-body-sm text-body-sm flex items-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            Thank you! Your message has been sent successfully. I&apos;ll get
            back to you shortly.
          </span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="p-3.5 rounded-lg bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
