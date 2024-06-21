export default function TermsPage() {
  const termsArray = [
    {
      heading: "Acceptance of Terms",
      paragraph:
        "By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Site.",
    },
    {
      heading: "Use of the Site",
      paragraph:
        "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:",
      bullets: [
        "Violate any applicable laws or regulations.",
        "Infringe on the rights of others.",
        "Attempt to gain unauthorized access to the Site or any accounts, computer systems, or networks connected to the Site",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraph:
        "The Site and its original content, features, and functionality are owned by Clutch Property Management and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      heading: "Disclaimer of Warranties",
      paragraph:
        "The Site is provided on an 'as is' and 'as available' basis, without any warranties of any kind, express or implied. We do not warrant that the Site will be error-free or uninterrupted, or that any defects will be corrected.",
    },
    {
      heading: "Limitation of Liability",
      paragraph:
        "In no event shall Clutch Property Management be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of the Site.",
    },
    {
      heading: "Indemnification",
      paragraph:
        "You agree to indemnify and hold harmless Clutch Property Management and its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Site or violation of these Terms.",
    },
    {
      heading: "Changes to Terms",
      paragraph:
        "We may revise these Terms from time to time. The revised Terms will be effective immediately upon posting on the Site. By continuing to use the Site after any such revisions, you agree to be bound by the revised Terms.",
    },
    {
      heading: "Contact Us",
      paragraph:
        "If you have any questions about these Terms, please contact us at propertymanager@clutchindustries.com.",
    },
  ];

  return (
    <main>
      <section className="flex flex-col gap-5 pt-[var(--header-height)] border-b border-secondaryBlue p-5 mt-5">
        <h3 className="text-3xl md:text-4xl font-medium">Terms of Service</h3>
        <p className="text-sm md:text-base">
          These Terms of Service ('Terms') govern your use of the Clutch ('we',
          'us', or 'our') website clutchpropertymanagement.com (the 'Site') and
          any services provided through the Site.
        </p>
        {termsArray.map((item, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h5 className="font-medium text-lg md:text-xl">{item.heading}</h5>
            <p className="text-sm md:text-base">{item.paragraph}</p>

            {item.bullets && (
              <ul className="ml-8">
                {item.bullets.map((bulletPoint, index) => (
                  <li className="list-disc text-sm md:text-base" key={index}>
                    <p>{bulletPoint}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
