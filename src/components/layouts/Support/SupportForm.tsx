'use client';

import { useState, FormEvent } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
};

export function SupportForm() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const { name, value } = target;

    setForm(prev => ({
      ...prev,
      [name]:
        target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked
          : value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: connect to backend / API route
    console.log(form);
  }

  return (
    <section className="w-full bg-bg-light py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
          <p className="text-text-secondary">
            Have any issues with StreamVibe? Fill out the form and our support
            team will get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Enter First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Enter Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              label="Phone Number"
              name="phone"
              placeholder="Enter Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Message</Label>
            <textarea
              name="message"
              placeholder="Enter your Message"
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl bg-bg border border-border px-4 py-3 text-sm outline-none focus:border-primary"
              rows={4}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-4 w-4 rounded border-border bg-bg text-primary"
            />
            <label
              htmlFor="agree"
              className="text-sm text-text-secondary"
            >
              I agree with Terms of Use and Privacy Policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
      {children}
    </p>
  );
}

function Input({ label, className, ...props }: InputProps) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className={[
          'mt-2 w-full rounded-xl bg-bg border border-border px-4 py-3 text-sm outline-none focus:border-primary',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      />
    </div>
  );
}
