/**
 * AWS Developer Tools Flashcards
 */
window.developerToolsCards = [
    {
        id: 'xray-1', category: 'developer-tools', service: 'AWS X-Ray',
        question: 'A company needs to trace requests across multiple microservices to identify performance bottlenecks and debug errors. Which service provides distributed tracing?',
        answer: 'AWS X-Ray',
        details: ['Distributed tracing for microservices', 'End-to-end request visualization', 'Service map shows dependencies', 'Identify latency bottlenecks', 'Works with Lambda, ECS, EC2, Beanstalk']
    },
    {
        id: 'xray-2', category: 'developer-tools', service: 'AWS X-Ray',
        question: 'A Lambda function calls DynamoDB and SQS but is slow. The team needs to see which downstream call is causing latency. Which service helps analyze this?',
        answer: 'AWS X-Ray',
        details: ['Trace Lambda to downstream services', 'Segment timeline shows latency', 'Annotations for filtering traces', 'Sampling to control costs', 'Integration with CloudWatch for logs']
    }
];
