import type { Metadata } from "next";
import { OnboardingForm } from "@/components/chatbot/onboarding-form";

export const metadata: Metadata = { title: "New Chatbot" };

export default function NewChatbotPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold text-white sm:text-3xl">Create a new chatbot</h1>
      <p className="mt-2 mb-6 text-sm text-slate-400">
        Tell us about your business. In Step 1 this form only checks your input in your browser.
        Nothing is saved or sent anywhere, and your website is not scanned.
      </p>
      <OnboardingForm />
    </div>
  );
}
