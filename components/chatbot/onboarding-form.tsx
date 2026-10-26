"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, borderFor, inputClass } from "@/components/ui/field";
import {
  BUSINESS_TYPES,
  LANGUAGES,
  cleanText,
  validateOnboarding,
} from "@/lib/validation";
import type { OnboardingErrors, OnboardingValues } from "@/lib/validation";
import { ROUTES } from "@/lib/site";

const EMPTY: OnboardingValues = {
  businessName: "",
  businessType: "",
  websiteUrl: "",
  language: "",
};

export function OnboardingForm() {
  const [values, setValues] = useState<OnboardingValues>(EMPTY);
  const [errors, setErrors] = useState<OnboardingErrors>({});
  const [accepted, setAccepted] = useState<{ values: OnboardingValues; url: string } | null>(null);

  function update(key: keyof OnboardingValues, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateOnboarding(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length === 0 && result.normalizedUrl) {
      setAccepted({
        values: { ...values, businessName: cleanText(values.businessName) },
        url: result.normalizedUrl,
      });
    } else {
      const first = (["businessName", "businessType", "websiteUrl", "language"] as const).find(
        (k) => result.errors[k],
      );
      if (first) document.getElementById(first)?.focus();
    }
  }

  if (accepted) {
    return (
      <Card className="border-cyan-400/30">
        <div role="status" className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-300" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-semibold text-white">Details look valid</h2>
            <p className="mt-1 text-sm text-slate-300">
              Your details passed the checks in this browser. Nothing was saved, nothing was sent to
              a server, and your website was not scanned. Chatbot creation arrives in a future step.
            </p>
          </div>
        </div>
        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div><dt className="text-slate-400">Business name</dt><dd className="text-white">{accepted.values.businessName}</dd></div>
          <div><dt className="text-slate-400">Business type</dt><dd className="text-white">{accepted.values.businessType}</dd></div>
          <div><dt className="text-slate-400">Website</dt><dd className="break-all text-white">{accepted.url}</dd></div>
          <div><dt className="text-slate-400">Primary language</dt><dd className="text-white">{accepted.values.language}</dd></div>
        </dl>
        <p className="mt-5 text-sm text-slate-400">
          Next step in the plan: sign-in and database (Step 2), then chatbot creation (Step 4).
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => setAccepted(null)}>Edit details</Button>
          <ButtonLink href={ROUTES.dashboard} variant="ghost">Back to dashboard preview</ButtonLink>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={onSubmit} noValidate className="space-y-2">
        <Field id="businessName" label="Business name" error={errors.businessName}>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            maxLength={120}
            value={values.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby="businessName-desc"
            placeholder="For example, Sunrise Cafe"
            className={`${inputClass} ${borderFor(errors.businessName)}`}
          />
        </Field>

        <Field id="businessType" label="Business type" error={errors.businessType}>
          <select
            id="businessType"
            name="businessType"
            value={values.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby="businessType-desc"
            className={`${inputClass} ${borderFor(errors.businessType)}`}
          >
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>

        <Field
          id="websiteUrl"
          label="Website URL"
          error={errors.websiteUrl}
          hint="Your public website, for example https://www.example.com. It will not be scanned yet."
        >
          <input
            id="websiteUrl"
            name="websiteUrl"
            type="text"
            inputMode="url"
            autoComplete="url"
            value={values.websiteUrl}
            onChange={(e) => update("websiteUrl", e.target.value)}
            aria-invalid={Boolean(errors.websiteUrl)}
            aria-describedby="websiteUrl-desc"
            placeholder="https://www.example.com"
            className={`${inputClass} ${borderFor(errors.websiteUrl)}`}
          />
        </Field>

        <Field id="language" label="Primary language" error={errors.language}>
          <select
            id="language"
            name="language"
            value={values.language}
            onChange={(e) => update("language", e.target.value)}
            aria-invalid={Boolean(errors.language)}
            aria-describedby="language-desc"
            className={`${inputClass} ${borderFor(errors.language)}`}
          >
            <option value="">Select a language</option>
            {LANGUAGES.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </Field>

        <div className="pt-2">
          <Button type="submit" size="lg" className="w-full sm:w-auto">Continue</Button>
        </div>
      </form>
    </Card>
  );
}
