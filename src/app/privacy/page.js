export default function PrivacyPage() {
  const privacyArray = [
    {
      heading: "Introduction",
      paragraph:
        'When you visit our website clutchpropertymanagement.com (the "Website"), and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.',
    },
    {
      heading: "Information We Collect",
      paragraph:
        "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:",
      bullets: [
        "Personal Information Provided by You: We collect names; phone numbers; email addresses; and other similar information.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraph:
        "We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below:",
      bullets: [
        "To facilitate communication with you.",
        "To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time.",
        "To send administrative information to you. We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.",
        "To deliver targeted advertising to you. We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.",
        "For other business purposes. We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, services, marketing, and your experience.",
      ],
    },
    {
      heading: "Sharing Your Information",
      paragraph:
        "We may process or share data based on the following legal basis:",
      bullets: [
        "Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.",
        "Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.",
        "Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).",
        "Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.",
        "Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.",
        "Third-Party Advertisers: We may use third-party advertising companies to serve ads when you visit the Website. These companies may use information about your visits to our Website and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.",
        "Business Partners: We may share your information with our business partners to offer you certain products, services, or promotions.",
        "Google Analytics: We use Google Analytics to monitor and analyze web traffic and keep track of user behavior. Google may use the data collected to contextualize and personalize the ads of its own advertising network. Google's privacy policy can be accessed here: Google Privacy Policy.",
        "Email Marketing: We may use your personal information to send you newsletters and other marketing communications. You can opt-out of these at any time by following the unsubscribe instructions included in each email or by contacting us directly.",
        "Facebook Ads: We use Facebook Ads to deliver targeted advertisements to users. Facebook may use cookies, web beacons, and other storage technologies to collect or receive information from our website and elsewhere on the internet and use that information to provide measurement services and target ads. You can opt-out of the collection and use of information for ad targeting by visiting www.aboutads.info/choices.",
      ],
    },
    {
      heading: "Data Retention",
      paragraph:
        "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).",
    },
    {
      heading: "Data Security",
      paragraph:
        "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.",
    },
    {
      heading: "Your Privacy Rights",
      paragraph:
        "In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws. If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. Please note however that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.",
    },
    {
      heading: "Contact Us",
      paragraph:
        "If you have questions or comments about this policy, you may contact us by email at propertymanager@clutchindustries.com, or by post to Clutch Industries, 360 Belmont St NE, Salem, OR 97301.",
    },
  ];

  return (
    <main>
      <section className="flex flex-col gap-5 pt-[var(--header-height)] border-b border-secondaryBlue p-5 mt-5">
        <h3 className="text-3xl md:text-4xl font-medium">Privacy Policy</h3>
        <p className="text-sm md:text-base">Effective: July 22, 2024</p>
        {privacyArray.map((item, index) => (
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
