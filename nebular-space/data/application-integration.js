/**
 * AWS Application Integration Services Flashcards
 * Category: Application Integration
 */

window.applicationIntegrationCards = [
    // Amazon AppFlow
    {
        id: 'appflow-1',
        category: 'application-integration',
        service: 'Amazon AppFlow',
        question: 'A company needs to automatically sync customer data from Salesforce to S3 and Redshift on a schedule without writing any code. Which service provides this SaaS integration capability?',
        answer: 'Amazon AppFlow',
        details: [
            'No-code SaaS integration service',
            'Bi-directional data flow between SaaS apps and AWS',
            'Supports Salesforce, SAP, Zendesk, Slack, ServiceNow, etc.',
            'Built-in data transformation and filtering',
            'Private data transfer using PrivateLink (no internet)'
        ]
    },
    {
        id: 'appflow-2',
        category: 'application-integration',
        service: 'Amazon AppFlow',
        question: 'A company wants to transfer data from Salesforce to S3 but compliance requires the data never traverse the public internet. How can AppFlow meet this requirement?',
        answer: 'AppFlow with AWS PrivateLink',
        details: [
            'Data flows through AWS private network',
            'No exposure to public internet',
            'Supported for Salesforce, SAP, and Snowflake',
            'Meets compliance requirements for sensitive data',
            'Encrypted in transit and at rest'
        ]
    },

    // AWS AppSync
    {
        id: 'appsync-1',
        category: 'application-integration',
        service: 'AWS AppSync',
        question: 'A mobile app needs real-time data synchronization with offline support. The backend should automatically sync data when the device comes back online. Which service provides this GraphQL-based capability?',
        answer: 'AWS AppSync',
        details: [
            'Managed GraphQL API service',
            'Real-time subscriptions via WebSockets',
            'Automatic offline data sync',
            'Connects to DynamoDB, Lambda, HTTP, RDS, OpenSearch',
            'Built-in conflict resolution for offline updates'
        ]
    },
    {
        id: 'appsync-2',
        category: 'application-integration',
        service: 'AWS AppSync',
        question: 'A company is building a chat application that needs to push messages to all connected clients in real-time. They prefer GraphQL over REST. Which service should they use?',
        answer: 'AWS AppSync with Subscriptions',
        details: [
            'GraphQL subscriptions for real-time updates',
            'Managed WebSocket connections',
            'Scales to millions of concurrent connections',
            'Fine-grained authorization per subscription',
            'Works with AWS Amplify on client side'
        ]
    },

    // Amazon EventBridge
    {
        id: 'eventbridge-1',
        category: 'application-integration',
        service: 'Amazon EventBridge',
        question: 'A company needs to build an event-driven architecture that routes events from multiple AWS services and SaaS applications to different targets based on event content. Which service should they use?',
        answer: 'Amazon EventBridge',
        details: [
            'Serverless event bus for event-driven architectures',
            'Content-based routing with event patterns',
            'Native integration with 100+ AWS services',
            'SaaS partner integrations (Zendesk, Datadog, etc.)',
            'Schema registry for event structure discovery'
        ]
    },
    {
        id: 'eventbridge-2',
        category: 'application-integration',
        service: 'Amazon EventBridge',
        question: 'A microservices architecture needs to schedule Lambda functions to run at specific times (cron) and also trigger when specific S3 events occur. Which single service provides both capabilities?',
        answer: 'Amazon EventBridge',
        details: [
            'Schedule expressions (cron and rate)',
            'AWS service event integration',
            'Rules match events and route to targets',
            'Supports 20+ targets including Lambda, SQS, Step Functions',
            'Cross-account and cross-region event delivery'
        ]
    },
    {
        id: 'eventbridge-3',
        category: 'application-integration',
        service: 'Amazon EventBridge',
        question: 'An organization with multiple AWS accounts needs to centralize security events from all accounts into a single account for analysis. How can they achieve this with EventBridge?',
        answer: 'EventBridge Cross-Account Event Delivery',
        details: [
            'Send events between AWS accounts',
            'Use resource-based policies for access control',
            'Create rules in source accounts to forward events',
            'Central event bus receives from all accounts',
            'Also supports cross-region delivery'
        ]
    },

    // Amazon MQ
    {
        id: 'mq-1',
        category: 'application-integration',
        service: 'Amazon MQ',
        question: 'A company is migrating an on-premises application that uses Apache ActiveMQ for messaging. They need a managed service that requires minimal application code changes. Which service should they use?',
        answer: 'Amazon MQ',
        details: [
            'Managed message broker for ActiveMQ and RabbitMQ',
            'Industry-standard APIs (JMS, AMQP, STOMP, MQTT)',
            'Drop-in replacement for on-premises brokers',
            'Multi-AZ deployment for high availability',
            'Automatic failover and patching'
        ]
    },
    {
        id: 'mq-2',
        category: 'application-integration',
        service: 'Amazon MQ',
        question: 'A company needs to choose between Amazon MQ and Amazon SQS for a new application. The application requires message ordering within groups and complex routing with topics. Which factors favor Amazon MQ?',
        answer: 'Amazon MQ for complex messaging patterns',
        details: [
            'Use MQ when migrating existing message broker apps',
            'Supports complex routing patterns (exchanges, topics)',
            'Industry-standard protocols (JMS, AMQP)',
            'Use SQS for new cloud-native apps (simpler, more scalable)',
            'SQS has no broker to manage, infinite scaling'
        ]
    },

    // Amazon SNS
    {
        id: 'sns-1',
        category: 'application-integration',
        service: 'Amazon SNS',
        question: 'A company needs to send the same notification to multiple subscribers including email addresses, SMS numbers, Lambda functions, and SQS queues. Which service provides this pub/sub capability?',
        answer: 'Amazon SNS (Simple Notification Service)',
        details: [
            'Fully managed pub/sub messaging service',
            'Multiple subscriber types: Lambda, SQS, HTTP, email, SMS',
            'Topic-based message distribution',
            'Message filtering to route messages to specific subscribers',
            'FIFO topics for ordered, deduplicated delivery'
        ]
    },
    {
        id: 'sns-2',
        category: 'application-integration',
        service: 'Amazon SNS',
        question: 'A microservices architecture needs to fan out events to multiple SQS queues. Each queue should only receive messages matching specific criteria. Which SNS feature enables this?',
        answer: 'SNS Message Filtering',
        details: [
            'Filter messages based on attributes',
            'Each subscriber defines its own filter policy',
            'Reduces unnecessary message processing',
            'Supports numeric and string matching',
            'AND/OR logic for complex filters'
        ]
    },
    {
        id: 'sns-3',
        category: 'application-integration',
        service: 'Amazon SNS',
        question: 'A financial trading platform needs pub/sub messaging with strict message ordering and exactly-once processing. Which SNS feature should they use?',
        answer: 'Amazon SNS FIFO Topics',
        details: [
            'Strict message ordering within message groups',
            'Exactly-once message delivery',
            'Message deduplication (5-minute window)',
            'Works with SQS FIFO queues as subscribers',
            '300 messages/second throughput (higher with batching)'
        ]
    },

    // Amazon SQS
    {
        id: 'sqs-1',
        category: 'application-integration',
        service: 'Amazon SQS',
        question: 'A web application needs to decouple order processing from the frontend. Orders should be queued and processed by backend workers. Failed processing should allow retries. Which service should they use?',
        answer: 'Amazon SQS (Simple Queue Service)',
        details: [
            'Fully managed message queuing service',
            'Decouples application components',
            'Automatic scaling to handle any volume',
            'Visibility timeout for processing retry',
            'Dead-letter queues for failed messages'
        ]
    },
    {
        id: 'sqs-2',
        category: 'application-integration',
        service: 'Amazon SQS',
        question: 'An order processing system requires messages to be processed exactly in the order they are sent, with each message processed only once. Which SQS queue type meets these requirements?',
        answer: 'Amazon SQS FIFO Queue',
        details: [
            'First-In-First-Out message ordering',
            'Exactly-once processing (deduplication)',
            'Message groups for parallel ordered processing',
            '3,000 messages/second with batching',
            'Queue name must end with .fifo'
        ]
    },
    {
        id: 'sqs-3',
        category: 'application-integration',
        service: 'Amazon SQS',
        question: 'A company wants to reduce SQS costs for a queue that receives messages sporadically. Currently they poll frequently but mostly receive empty responses. What feature can help?',
        answer: 'SQS Long Polling',
        details: [
            'Wait up to 20 seconds for messages',
            'Reduces empty response API calls',
            'Lower costs and latency',
            'Set ReceiveMessageWaitTimeSeconds > 0',
            'Returns immediately when messages arrive'
        ]
    },
    {
        id: 'sqs-4',
        category: 'application-integration',
        service: 'Amazon SQS',
        question: 'A payment processing application needs to delay sending confirmation emails by 15 minutes after purchase to allow cancellations. How can they implement this with SQS?',
        answer: 'SQS Delay Queues or Message Timers',
        details: [
            'Delay queues: all messages delayed (0-15 minutes)',
            'Message timers: per-message delay up to 15 minutes',
            'Messages invisible until delay period expires',
            'Useful for scheduled or delayed processing',
            'Standard and FIFO queues both support delays'
        ]
    },

    // AWS Step Functions
    {
        id: 'stepfunctions-1',
        category: 'application-integration',
        service: 'AWS Step Functions',
        question: 'A company needs to orchestrate a complex order fulfillment workflow spanning multiple Lambda functions, with error handling, retries, and parallel processing. Which service should they use?',
        answer: 'AWS Step Functions',
        details: [
            'Serverless workflow orchestration service',
            'Visual workflow designer (Workflow Studio)',
            'Built-in error handling and retries',
            'Supports parallel, conditional, and branching logic',
            'Integrates with 220+ AWS services'
        ]
    },
    {
        id: 'stepfunctions-2',
        category: 'application-integration',
        service: 'AWS Step Functions',
        question: 'A company needs to process millions of short-lived workflows per second for real-time features like IoT data processing. Cost per transition is a concern. Which Step Functions workflow type is appropriate?',
        answer: 'Step Functions Express Workflows',
        details: [
            'High-volume, short-duration workflows',
            'Up to 100,000 executions per second',
            'Duration up to 5 minutes',
            'Price per execution and duration (not per transition)',
            'Ideal for streaming data, IoT, mobile backends'
        ]
    },
    {
        id: 'stepfunctions-3',
        category: 'application-integration',
        service: 'AWS Step Functions',
        question: 'An e-commerce platform needs a workflow that pauses and waits for human approval before proceeding with order shipment. The wait could be hours or days. Which Step Functions feature supports this?',
        answer: 'Step Functions Wait State and Callback Pattern',
        details: [
            'Wait state: pause for specified duration or timestamp',
            'Callback pattern: pause until external signal received',
            'Task tokens for asynchronous callbacks',
            'Standard workflows can run up to 1 year',
            'Human approval workflows with API callbacks'
        ]
    },
    {
        id: 'stepfunctions-4',
        category: 'application-integration',
        service: 'AWS Step Functions',
        question: 'A data processing pipeline needs to process 10,000 records in parallel using Lambda, with a maximum of 100 concurrent executions to avoid overwhelming downstream systems. How can Step Functions help?',
        answer: 'Step Functions Distributed Map State',
        details: [
            'Process large datasets in parallel',
            'Configurable concurrency limits',
            'Process data from S3, DynamoDB, or inline',
            'Up to 10,000 parallel child executions',
            'Automatic result aggregation'
        ]
    }
];
