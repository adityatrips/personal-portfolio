import useMetadata from '../hooks/useMetadata';

const MenMatterTooPrivacyPolicy = () => {
	useMetadata({
		title: 'Privacy Policy | Men Matter Too',
		author: 'Aditya Tripathi',
		description:
			"Privacy Policy for Men Matter Too, an Android application dedicated to supporting men's mental health and well-being.",
		keywords: [
			'privacy policy',
			'men matter too',
			'mental health',
			'android app',
			'privacy',
			'data security',
		],
		url: 'https://adityatripathi.vercel.app/men-matter-too-privacy-policy',
	});

	return (
		<div className='max-w-4xl mx-auto p-4'>
			<h1 className='text-3xl font-bold text-center mb-4'>
				Privacy Policy for Men Matter Too
			</h1>
			<p className='mb-2'>
				<strong>Effective Date:</strong> August 6, 2024
			</p>

			<h2 className='text-2xl font-bold mt-6 mb-2'>
				Welcome to Men Matter Too!
			</h2>
			<p className='mb-4'>
				At Men Matter Too (“we,” “us,” or “our”), we are committed to protecting
				your privacy. This Privacy Policy outlines how we collect, use,
				disclose, and safeguard your information when you use our Android
				application, Men Matter Too (the “App”). By using the App, you agree to
				the collection and use of information in accordance with this policy. If
				you do not agree with the terms of this privacy policy, please do not
				access the App.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				1. Information We Collect
			</h3>
			<ul className='list-disc pl-6 mb-4'>
				<li>
					<strong>Personal Information</strong>: When you create an account or
					interact with our App, we may collect the following types of personal
					information:
					<ul className='list-disc pl-6'>
						<li>
							<strong>Name</strong>: We collect your name to personalize your
							experience within the App and facilitate communication with you.
						</li>
						<li>
							<strong>Email Address</strong>: Your email address is required for
							account registration and management. We use it to send you
							important account-related information.
						</li>
						<li>
							<strong>Google’s Profile Picture</strong>: If you choose to sign
							in using Google Single Sign-On (SSO), we may collect your Google
							profile picture to enhance your user experience.
						</li>
					</ul>
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				2. Purpose of Data Collection
			</h3>
			<ul className='list-disc pl-6 mb-4'>
				<li>
					<strong>Creation of Accounts</strong>: To allow you to create and
					manage your user account.
				</li>
				<li>
					<strong>Basic App Usage</strong>: To provide you with access to and
					functionality of the App.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>3. Data Sharing</h3>
			<p className='mb-4'>
				We value your privacy and do not share your personal data with any third
				parties. Your information is solely used to enhance your experience
				within the App.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>4. User Rights</h3>
			<p className='mb-4'>
				You have the following rights regarding your personal data:
			</p>
			<ul className='list-disc pl-6 mb-4'>
				<li>
					<strong>Deletion</strong>: You can delete your account and associated
					data at any time.
				</li>
				<li>
					<strong>Editing</strong>: You can edit your personal information
					through the app settings.
				</li>
				<li>
					<strong>Downloading</strong>: You can request to download your
					personal data stored with us.
				</li>
			</ul>

			<h3 className='text-xl font-semibold mt-6 mb-2'>5. Data Security</h3>
			<p className='mb-4'>
				We implement strict security measures to protect your personal
				information. All data is stored in compliance with Firebase security
				rules, which include secure data storage, data encryption, and access
				controls.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>6. Children’s Privacy</h3>
			<p className='mb-4'>
				Our App is not designed for children under the age of 13. We do not
				knowingly collect personal information from children under 13. If we
				become aware that we have collected personal information from a child
				under 13, we will take steps to delete such information.
			</p>

			<h3 className='text-xl font-semibold mt-6 mb-2'>
				7. Contact Information
			</h3>
			<p className='mb-4'>
				If you have any questions or concerns about this Privacy Policy or our
				data practices, please contact us at:
			</p>
			<ul className='list-disc pl-6 mb-4'>
				<li>
					<strong>Aditya Tripathi (Founder)</strong>:&nbsp;
					<a href='mailto:adityatripathi.at04@gmail.com'>
						adityatripathi.at04@gmail.com
					</a>
				</li>
				<li>
					<strong>Manan Ansh (Co-founder)</strong>:&nbsp;
					<a href='mailto:mananansh20@gmail.com'>mananansh20@gmail.com</a>
				</li>
			</ul>
		</div>
	);
};

export default MenMatterTooPrivacyPolicy;
