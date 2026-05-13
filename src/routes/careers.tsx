import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  X,
  Sparkles,
  Users,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Axentra Nexus — Join Our Team" },
      {
        name: "description",
        content:
          "Explore open roles at Axentra Nexus. Join a fast-growing BPO and business solutions team scaling enterprises with precision and intelligence.",
      },
    ],
  }),
  component: CareersPage,
});

type Opening = {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

function CareersPage() {
  const [activeRole, setActiveRole] = useState<Opening | null>(null);

  const handleFakeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TEMP CLIENT-SIDE ONLY (replace later with API endpoint)
    alert("Application submitted successfully (demo mode)");
    setActiveRole(null);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[oklch(0.16_0.02_260)] text-background">
        <div className="container-max px-4 py-24">
          <h1 className="text-5xl font-bold">
            Build your career with Axentra Nexus
          </h1>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-max grid gap-6 lg:grid-cols-2">
          {openings.map((role) => (
            <div key={role.id} className="border rounded-xl p-6">
              <h3 className="text-xl font-bold">{role.title}</h3>

              <button
                onClick={() => setActiveRole(role)}
                className="mt-4 rounded bg-black text-white px-4 py-2"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </section>

      {activeRole && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            <button onClick={() => setActiveRole(null)}>Close</button>

            <form onSubmit={handleFakeSubmit} className="space-y-3">
              <input placeholder="Name" className="border p-2 w-full" />
              <input placeholder="Email" className="border p-2 w-full" />

              <button className="bg-black text-white px-4 py-2 w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/* keep your openings array below (unchanged) */
const openings: Opening[] = [
  {
    id: "csr-email-chat",
    title: "Customer Support Representative",
    type: "Full-time",
    location: "Bengaluru, India",
    experience: "0–2 years",
    summary: "Customer support role",
    responsibilities: ["Handle queries", "Resolve tickets", "Support users"],
    requirements: ["Good English", "Typing skills", "Customer focus"],
  },
];
