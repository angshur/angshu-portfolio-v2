import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 920,
        margin: "0 auto",
        padding: "88px 20px",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
      }}
    >
      <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>
        AI Product Leadership • Data Platforms • Agent Systems
      </p>

      <h1
        style={{
          marginTop: 18,
          fontSize: 52,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: 0,
        }}
      >
        AI-Native Product Leader building data platforms, agent systems, and durable product infrastructure
      </h1>

      <p style={{ marginTop: 18, fontSize: 18, color: "#334155", lineHeight: 1.7, maxWidth: 780 }}>
        I design and ship AI-powered systems that improve adoption, increase retention, and unlock expansion in complex
        marketing environments.
      </p>

      <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
        <Link href="/products">View Product Portfolio →</Link>
        <Link href="/innovation">Explore Innovation Lab →</Link>
        <Link href="/writing">Read Writing →</Link>
        <Link href="/about">About →</Link>
      </div>

      <hr style={{ margin: "44px 0", border: 0, borderTop: "1px solid #e2e8f0" }} />

      <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 18 }}>
          <p style={{ margin: 0, fontWeight: 650 }}>Platform Systems</p>
          <p style={{ marginTop: 8, marginBottom: 0, color: "#475569", lineHeight: 1.6, fontSize: 14 }}>
            Composable data pipelines, transformation logic, and governed analytics layers used by marketing orgs at scale.
          </p>
        </div>

        <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 18 }}>
          <p style={{ margin: 0, fontWeight: 650 }}>AI Systems</p>
          <p style={{ marginTop: 8, marginBottom: 0, color: "#475569", lineHeight: 1.6, fontSize: 14 }}>
            Agent systems built for safe execution and measurable reliability — from insight to deterministic action.
          </p>
        </div>

        <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, padding: 18 }}>
          <p style={{ margin: 0, fontWeight: 650 }}>Product Operating Models</p>
          <p style={{ marginTop: 8, marginBottom: 0, color: "#475569", lineHeight: 1.6, fontSize: 14 }}>
            Frameworks that increase clarity, alignment, and decision quality in complex platform + AI work.
          </p>
        </div>
      </section>
    </main>
  );
}

