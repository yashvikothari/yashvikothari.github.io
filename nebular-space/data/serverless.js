/**
 * AWS Serverless Flashcards
 */
window.serverlessCards = [
    {
        id: 'lambda-1', category: 'serverless', service: 'AWS Lambda',
        question: 'A company needs to run code in response to S3 uploads without provisioning servers. They want to pay only for execution time. Which service should they use?',
        answer: 'AWS Lambda',
        details: ['Serverless compute', 'Event-driven execution', 'Pay per request and duration', 'Scales automatically', 'Supports many runtimes']
    },
    {
        id: 'lambda-2', category: 'serverless', service: 'AWS Lambda',
        question: 'A company is experiencing cold starts with their Lambda function. They need consistent low-latency response times. Which feature helps?',
        answer: 'Lambda Provisioned Concurrency',
        details: ['Pre-initialized execution environments', 'Eliminates cold starts', 'Set number of warm instances', 'Higher cost when provisioned', 'Ideal for latency-sensitive workloads']
    },
    {
        id: 'lambda-3', category: 'serverless', service: 'Lambda@Edge',
        question: 'A company needs to customize CDN content at edge locations by running code on CloudFront requests. Which Lambda feature enables this?',
        answer: 'Lambda@Edge',
        details: ['Run Lambda at CloudFront edges', 'Customize viewer/origin requests', 'A/B testing, header manipulation', 'Node.js and Python', 'Execute close to users']
    },
    {
        id: 'lambda-4', category: 'serverless', service: 'Lambda Container Images',
        question: 'A company wants to package their Lambda function as a Docker container for consistent local development. Which Lambda feature supports this?',
        answer: 'Lambda Container Images',
        details: ['Package Lambda as container', 'Up to 10 GB image size', 'Use familiar container tools', 'Deploy from ECR', 'Same Lambda execution model']
    },
    {
        id: 'fargate-server-1', category: 'serverless', service: 'AWS Fargate',
        question: 'A company wants to run containers without managing EC2 instances or clusters. They want serverless container compute. Which service provides this?',
        answer: 'AWS Fargate',
        details: ['Serverless container compute', 'Works with ECS and EKS', 'No infrastructure management', 'Define CPU/memory per task', 'Pay for resources used']
    },
    {
        id: 'appsync-server-1', category: 'serverless', service: 'AWS AppSync',
        question: 'A mobile app needs a serverless GraphQL API with real-time data sync and offline support. Which service provides this?',
        answer: 'AWS AppSync',
        details: ['Managed GraphQL service', 'Real-time subscriptions', 'Offline data sync', 'Connects to DynamoDB, Lambda, HTTP', 'Built-in caching']
    }
];
