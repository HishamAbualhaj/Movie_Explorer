'use client';

import { useState, FormEvent } from 'react';
import InputForm from './InputForm';
import LabelForm from './LabelForm';

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
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
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
    // we put the logic of the submit button in here
    console.log(form);
  }

  return (
    <section id='support-form' className="w-full py-12 md:py-16 max-w-6xl mx-auto px-4">
        <div className="rounded-3xl  bg-bg-light p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Contact Us
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl">
            Have any issues with StreamVibe? Fill out the form and our support
            team will get back to you as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputForm
                label="First Name"
                name="firstName"
                placeholder="Enter First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <InputForm
                label="Last Name"
                name="lastName"
                placeholder="Enter Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputForm
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
              />
              <InputForm
                label="Phone Number"
                name="phone"
                placeholder="Enter Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <LabelForm>Message</LabelForm>
              <textarea
                name="message"
                placeholder="Enter your Message"
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl bg-bg-dark border border-border px-4 py-3 text-sm outline-none focus:border-primary"
                rows={5}
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-border bg-bg-dark text-primary"
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
                className="w-full md:w-auto rounded-xl bg-primary px-8 py-3 text-sm font-medium text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
    </section>
  );
}