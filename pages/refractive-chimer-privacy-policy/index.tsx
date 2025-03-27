import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Head>
        <title>Privacy Policy - Refractive Mindful chimer</title>
        <meta
          name="description"
          content="Privacy policy for Refractive Mindful chimer"
        />
      </Head>

      <main>
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>

        <div className="prose">
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Data Collection</h2>
            <p>
              Refractive Mindful chimer does not collect, store, or process any
              personal data from its users. The application operates entirely on
              your local device and does not transmit any information to
              external servers.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Local Storage</h2>
            <p>
              Any data or content you create within the application is stored
              locally on your device. We do not have access to this information,
              and it remains entirely under your control.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a href="mailto:mahes1287@gmail.com">mahes1287@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
