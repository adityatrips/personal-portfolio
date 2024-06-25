import useMetadata from "../hooks/useMetadata";

const EzAmizonePrivacyPolicy = () => {
  useMetadata({
    title: "Privacy Policy | EzAmizone",
    author: "Aditya Tripathi",
    description:
      "Privacy Policy for EzAmizone, a learning management app for Amity University students.",
    keywords: [
      "privacy policy",
      "ezamizone",
      "amity university",
      "learning management",
      "google play",
      "amizone",
      "student app",
    ],
    url: "https://adityatripathi.vercel.app/ezamizone-privacy-policy",
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        Privacy Policy for EzAmizone
      </h1>
      <p className="mb-2">
        <strong>Effective Date:</strong> 26<sup>th</sup> June 2024
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Welcome to EzAmizone!</h2>
      <p className="mb-4">
        We are committed to protecting your privacy and ensuring you have a
        positive experience on our app. This Privacy Policy outlines our
        practices regarding the collection, use, and disclosure of your
        information through EzAmizone, which is designed to enhance the learning
        management experience at Amity University.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Personal Information</strong>: We collect personal information
          you provide when you use EzAmizone, such as your name, Amity
          University student ID, email address, and exam results.
        </li>
        <li>
          <strong>Usage Data</strong>: We automatically collect information on
          how you interact with our app, including access times, device
          information, and viewed pages.
        </li>
        <li>
          <strong>Feedback</strong>: When you provide feedback or contact us
          directly, we collect any information you choose to share, which can
          include personal data.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          To Provide Services: Your information helps us manage your account,
          provide personalized support, and communicate important updates and
          changes.
        </li>
        <li>
          To Improve and Develop New Features: We analyze usage to improve our
          current features and plan new functionalities.
        </li>
        <li>
          Communication: We may use your information to respond to you when you
          contact us, to send updates about the app, and to inform you of any
          changes to our policies.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing of Your Information
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>
          We do not sell your personal information to third parties. We may
          share your information with:
          <ul className="list-disc pl-6">
            <li>
              Service Providers: Third-party companies who perform services on
              our behalf, such as hosting, data analysis, and technical support.
            </li>
            <li>
              Legal Requirements: If required by law, we may disclose your
              information to comply with legal processes or to protect our
              rights.
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h3>
      <p className="mb-4">
        We implement appropriate security measures to protect against
        unauthorized access to or unauthorized alteration, disclosure, or
        destruction of data. We restrict access to personal information to
        EzAmizone employees, contractors, and agents who need to know that
        information in order to process it for us and who are subject to strict
        contractual confidentiality obligations.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">5. User Rights</h3>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information. To exercise these rights, please contact us at
        adityatripathi.at04@gmail.com
      </p>
    </div>
  );
};

export default EzAmizonePrivacyPolicy;
