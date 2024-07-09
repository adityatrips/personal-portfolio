import useMetadata from "../hooks/useMetadata";

const MinimalistsWeatherPrivacyPolicy = () => {
	useMetadata({
		title: "Privacy Policy | minimalist's Weather",
		author: "Aditya Tripathi",
		description:
			"Privacy Policy for minimalist's weather, a learning management app for Amity University students.",
		keywords: ["privacy policy", "minimalist's weather", "min"],
		url: "https://adityatripathi.vercel.app/minimalists-weather-privacy-policy",
	});

	return (
		<div className="max-w-4xl mx-auto p-4">
			<h1 className="text-3xl font-bold text-center mb-4">
				Privacy Policy for Minimalist's Weather
			</h1>
			<p className="mb-2">
				<strong>Effective Date:</strong> 26<sup>th</sup> June 2024
			</p>
			<h2 className="text-2xl font-bold mt-6 mb-2">
				Welcome to Minimalist's Weather!
			</h2>
			<p className="mb-4">
				Minimalist Weather ("Minimalist Weather," "we," "us," or "our")
				is committed to protecting your privacy. This Privacy Policy
				explains how we collect, use, disclose, and store your
				information when you use our mobile application, Minimalist
				Weather (the "App").
			</p>
			<h3 className="text-xl font-semibold mt-6 mb-2">
				1. Information We Collect
			</h3>
			<ul className="list-disc pl-6 mb-4">
				<li>
					<strong>Location Data</strong>: To provide you with the most
					relevant weather information, Minimalist Weather collects
					your location data with your permission. This may be your
					device's GPS coordinates or your city/town name.
				</li>
				<li>
					<strong>Theme Selection</strong>: When you choose a theme
					from our available options, we may store your preference
					anonymously to personalize your future experience.
				</li>
			</ul>
			<h3 className="text-xl font-semibold mt-6 mb-2">
				2. How We Use Your Information
			</h3>
			<ul className="list-disc pl-6 mb-4">
				<li>
					To provide you with accurate and up-to-date weather
					information based on your location.
				</li>
				<li>
					To personalize your experience with the App by remembering
					your theme preference.
				</li>
				<li>To improve the app and develop new features.</li>
			</ul>
			<h3 className="text-xl font-semibold mt-6 mb-2">
				3. Sharing of Your Information
			</h3>
			<ul className="list-disc pl-6 mb-4">
				<li>
					We <span className="font-bold">do not</span> sell your
					personal information to third parties.
				</li>
			</ul>
			<h3 className="text-xl font-semibold mt-6 mb-2">
				4. Data Security
			</h3>
			<p className="mb-4">
				We take reasonable steps to protect the information you provide
				to us from loss, misuse, unauthorized access, disclosure,
				alteration, or destruction. However, no internet transmission or
				electronic storage is ever completely secure. We cannot
				guarantee the security of your information.
			</p>
			<h3 className="text-xl font-semibold mt-6 mb-2">5. User Rights</h3>
			<p className="mb-4">
				You have the right to access, update, or delete your personal
				information. To exercise these rights, please contact us at
				adityatripathi.at04@gmail.com
			</p>
			<h3 className="text-xl font-semibold mt-6 mb-2">5. Your Choices</h3>
			<p className="mb-4">
				We take reasonable steps to protect the information you provide
				to us from loss, misuse, unauthorized access, disclosure,
				alteration, or destruction. However, no internet transmission or
				electronic storage is ever completely secure. We cannot
				guarantee the security of your information.
			</p>

			<h3 className="text-xl font-semibold mt-6 mb-2">5. User Rights</h3>
			<ul className="list-disc pl-6 mb-4">
				<li>
					<strong>Location Services</strong>: You can control your
					location settings through your device's settings menu.
					Disabling location services will prevent the App from
					providing you with location-based weather information.
				</li>
				<li>
					<strong>Theme Selection</strong>: You can change your theme
					preference at any time within the App.
				</li>
			</ul>

			<h3 className="text-xl font-semibold mt-6 mb-2">
				6. Children's Privacy
			</h3>
			<p className="mb-4">
				Our App is not directed to children under the age of 13. We do
				not knowingly collect personal information from children under
				13. If you are a parent or guardian and you believe your child
				has provided us with personal information, please contact us. We
				will take steps to remove such information from our records.
			</p>
		</div>
	);
};

export default MinimalistsWeatherPrivacyPolicy;
