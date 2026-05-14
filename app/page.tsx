export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Software Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Block meeting interruptions<br />
          <span className="text-[#58a6ff]">during deep work</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Focus Time Protector automatically declines conflicting meeting invites during your focus blocks and replies with suggested alternative slots — so your team stays aligned without breaking your flow.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Protecting Focus — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl mb-1">📅</div>
            <div className="font-medium text-[#c9d1d9]">Google &amp; Outlook</div>
            <div>Connects to your existing calendar in seconds</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl mb-1">🤖</div>
            <div className="font-medium text-[#c9d1d9]">Auto-decline &amp; suggest</div>
            <div>Politely declines and offers alternative slots</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <div className="text-2xl mb-1">🔒</div>
            <div className="font-medium text-[#c9d1d9]">Custom focus blocks</div>
            <div>You define when deep work is non-negotiable</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited focus blocks",
              "Google Calendar + Outlook sync",
              "Auto-decline with custom message",
              "Smart alternative slot suggestions",
              "Webhook-based real-time response",
              "Team dashboard for managers"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the auto-decline work?",
              a: "Once you connect your calendar and set focus blocks, our webhook listener detects incoming invites that overlap. It automatically declines them and sends a polite reply with 2–3 alternative time slots outside your focus hours."
            },
            {
              q: "Does it work with both Google Calendar and Outlook?",
              a: "Yes. We support OAuth-based integration with Google Calendar and Microsoft Outlook. Setup takes under two minutes and requires no IT involvement."
            },
            {
              q: "Can I customize the decline message?",
              a: "Absolutely. You can write your own decline template, choose how many alternative slots to suggest, and set different messages for internal vs. external meeting requests."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-[#c9d1d9] mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Focus Time Protector. All rights reserved.
      </footer>
    </main>
  );
}
