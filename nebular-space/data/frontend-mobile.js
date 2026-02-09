/**
 * AWS Front-End Web and Mobile Flashcards
 */
window.frontendMobileCards = [
    {
        id: 'amplify-1', category: 'frontend-mobile', service: 'AWS Amplify',
        question: 'A team needs to quickly build and deploy a full-stack React app with authentication, API, and hosting without managing servers. Which service should they use?',
        answer: 'AWS Amplify',
        details: ['Full-stack development platform', 'CLI and libraries for frontend', 'Authentication, API, storage built-in', 'CI/CD with Git integration', 'Hosting with global CDN']
    },
    {
        id: 'amplify-2', category: 'frontend-mobile', service: 'AWS Amplify Hosting',
        question: 'A company needs to deploy static websites and single-page apps with automatic builds from GitHub. Which service provides this?',
        answer: 'AWS Amplify Hosting',
        details: ['Git-based deployments', 'Automatic builds on push', 'Branch previews for testing', 'Custom domains with SSL', 'Supports SSR with Next.js']
    },
    {
        id: 'apigateway-1', category: 'frontend-mobile', service: 'Amazon API Gateway',
        question: 'A company needs to create a REST API that triggers Lambda functions. They need throttling, caching, and API key management. Which service provides this?',
        answer: 'Amazon API Gateway',
        details: ['Create REST, HTTP, and WebSocket APIs', 'Integrates with Lambda, HTTP backends', 'Built-in throttling and caching', 'API keys and usage plans', 'Request validation and transformation']
    },
    {
        id: 'apigateway-2', category: 'frontend-mobile', service: 'API Gateway HTTP APIs',
        question: 'A company needs a low-latency, cost-effective API proxy to Lambda. They dont need all REST API features. Which API Gateway type is best?',
        answer: 'API Gateway HTTP APIs',
        details: ['Up to 71% cheaper than REST APIs', 'Lower latency', 'JWT authorization built-in', 'Simpler for Lambda proxy', 'Good for most serverless backends']
    },
    {
        id: 'devicefarm-1', category: 'frontend-mobile', service: 'AWS Device Farm',
        question: 'A mobile development team needs to test their iOS and Android apps on real physical devices in the cloud. Which service provides this?',
        answer: 'AWS Device Farm',
        details: ['Test on real mobile devices', 'iOS, Android, Fire OS', 'Automated and remote access testing', 'Video and logs of test runs', 'Integration with CI/CD pipelines']
    },
    {
        id: 'pinpoint-1', category: 'frontend-mobile', service: 'Amazon Pinpoint',
        question: 'A company needs to send targeted push notifications, emails, and SMS to mobile app users based on behavior segments. Which service should they use?',
        answer: 'Amazon Pinpoint',
        details: ['Multi-channel marketing platform', 'Push, email, SMS, voice', 'User segmentation and targeting', 'Campaign analytics', 'Journey orchestration']
    }
];
