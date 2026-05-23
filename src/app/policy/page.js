"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-[800px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10 space-y-8 font-inter text-sm text-on-surface-variant leading-relaxed">
        
        <div className="space-y-4 border-b border-black/5 pb-8">
          <h1 className="font-be-vietnam-pro font-black text-4xl text-on-surface leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-outline font-medium">
            Last Updated: May 2026
          </p>
        </div>

        <section className="space-y-4">
          <p>
            At MarketOps, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website <strong>marketops.in</strong> and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-be-vietnam-pro font-black text-xl text-on-surface pt-4">
            1. Information We Collect About You
          </h2>
          <p>
            We collect several types of information from and about users of our Website, including information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline (&quot;personal information&quot;);</li>
            <li>That is about you but individually does not identify you, such as business name or marketplace account niches;</li>
            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-be-vietnam-pro font-black text-xl text-on-surface pt-4">
            2. How We Collect Your Information
          </h2>
          <p>
            We collect this information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Directly from you when you provide it to us (such as scheduling a review calendar or signing up for newsletters).</li>
            <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-be-vietnam-pro font-black text-xl text-on-surface pt-4">
            3. How We Use Your Information
          </h2>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us (like portfolio diagnostic checks).</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
            <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-be-vietnam-pro font-black text-xl text-on-surface pt-4">
            4. Disclosure of Your Information
          </h2>
          <p>
            We may disclose aggregated information about our users without restriction. We do not sell or rent your personal information to third parties. We may disclose personal information that we collect or you provide as described in this privacy policy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To our contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential.</li>
            <li>To fulfill the purpose for which you provide it.</li>
            <li>With your consent.</li>
            <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="font-be-vietnam-pro font-black text-xl text-on-surface pt-4">
            5. Contact Information
          </h2>
          <p>
            To ask questions or comment about this privacy policy and our privacy practices, contact our privacy coordinator at:
          </p>
          <p className="font-semibold text-primary">
            Email: connect@marketops.in
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}
