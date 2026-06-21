import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-semibold">
              Vineo
            </h3>

            <p className="mt-4 text-text-secondary">
              The modern operating system for agencies.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Product
            </h4>

            <div className="space-y-3 text-text-secondary">
              <Link href="/">Features</Link>
              <br />
              <Link href="/">Pricing</Link>
              <br />
              <Link href="/">Integrations</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Company
            </h4>

            <div className="space-y-3 text-text-secondary">
              <Link href="/">About</Link>
              <br />
              <Link href="/">Blog</Link>
              <br />
              <Link href="/">Careers</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">
              Legal
            </h4>

            <div className="space-y-3 text-text-secondary">
              <Link href="/">Privacy</Link>
              <br />
              <Link href="/">Terms</Link>
              <br />
              <Link href="/">Security</Link>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">

          <p className="text-text-secondary text-sm">
            © 2026 Vineo. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-text-secondary">
            <Link href="/">Twitter</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">GitHub</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}