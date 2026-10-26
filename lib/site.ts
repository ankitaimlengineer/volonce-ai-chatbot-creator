export const PRODUCT_NAME = "VOLONCE AI Chatbot Creator";
export const COMPANY_NAME = "VOLONIS TECHNOLOGIES";
export const COMPANY_URL = "https://www.volonis.in";
export const TAGLINE = "Create Your AI. Connect Your Website. Grow Your Business.";
export const DESCRIPTION = "An AI chatbot builder for every business.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/dashboard", label: "Dashboard Preview" },
] as const;

export const ROUTES = {
  home: "/",
  features: "/features",
  dashboard: "/dashboard",
  newChatbot: "/dashboard/chatbots/new",
} as const;

export const ROADMAP = [
  "Project foundation and UI",
  "Authentication and database foundation",
  "Dashboard improvements and account structure",
  "Chatbot creation and configuration",
  "Safe public website URL scanner",
  "Business knowledge base and review workflow",
  "AI chat engine with grounded answers",
  "Embeddable website chatbot widget",
  "Conversation history and leads",
  "Widget customization",
  "Subscription plan foundation",
  "Payment integration and server-side access control",
  "Security hardening and testing",
  "Deployment",
  "Integration with the VOLONIS website product section",
] as const;
