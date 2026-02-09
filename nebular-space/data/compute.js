/**
 * AWS Compute Services Flashcards
 */

window.computeCards = [
    {
        id: 'batch-1',
        category: 'compute',
        service: 'AWS Batch',
        question: 'A company needs to process thousands of financial simulations as batch jobs with automatic resource provisioning and job queue management. Which service should they use?',
        answer: 'AWS Batch',
        details: ['Fully managed batch processing', 'Auto-provisions optimal compute', 'Priority-based job queues', 'Supports EC2 and Spot', 'Integrates with Step Functions']
    },
    {
        id: 'ec2-1',
        category: 'compute',
        service: 'Amazon EC2',
        question: 'A company needs dedicated hardware for a critical database to prevent other AWS customers from sharing the same physical server. Which EC2 option should they use?',
        answer: 'EC2 Dedicated Hosts',
        details: ['Entire physical server dedicated to you', 'Required for BYOL licensing', 'Per-socket/per-core license visibility', 'Regulatory compliance support']
    },
    {
        id: 'ec2-2',
        category: 'compute',
        service: 'Amazon EC2',
        question: 'A company runs stateless web servers that can tolerate interruptions and wants up to 90% cost savings. Which purchasing option is best?',
        answer: 'EC2 Spot Instances',
        details: ['Up to 90% off On-Demand', '2-minute interruption warning', 'Ideal for fault-tolerant workloads', 'Use Spot Fleet for target capacity']
    },
    {
        id: 'ec2-3',
        category: 'compute',
        service: 'Amazon EC2',
        question: 'A company needs to guarantee EC2 capacity in a specific AZ for disaster recovery. Which feature provides this?',
        answer: 'EC2 Capacity Reservations',
        details: ['Reserve capacity in specific AZ', 'Guarantees instance launch', 'Combine with Savings Plans', 'Charged whether used or not']
    },
    {
        id: 'autoscaling-1',
        category: 'compute',
        service: 'EC2 Auto Scaling',
        question: 'A web app experiences traffic spikes. The company wants to automatically add instances when CPU exceeds 70%. Which service provides this?',
        answer: 'Amazon EC2 Auto Scaling',
        details: ['Automatic capacity adjustment', 'Target tracking, step, scheduled policies', 'Health checks replace unhealthy instances', 'Works with ELB']
    },
    {
        id: 'autoscaling-2',
        category: 'compute',
        service: 'EC2 Auto Scaling',
        question: 'A company knows traffic increases every Monday at 9 AM and wants to proactively add capacity. Which scaling feature should they use?',
        answer: 'Scheduled Scaling',
        details: ['Scale based on predictable patterns', 'Set capacity at specific times', 'Cron expressions supported', 'Combine with dynamic scaling']
    },
    {
        id: 'autoscaling-3',
        category: 'compute',
        service: 'EC2 Auto Scaling',
        question: 'A company wants ML-based prediction to proactively scale before traffic arrives based on historical patterns. Which approach provides this?',
        answer: 'Predictive Scaling',
        details: ['ML forecasts load patterns', 'Proactive capacity provisioning', 'Analyzes 14 days historical data', 'Ideal for cyclical traffic']
    },
    {
        id: 'beanstalk-1',
        category: 'compute',
        service: 'AWS Elastic Beanstalk',
        question: 'A developer wants to deploy a Node.js app without managing infrastructure but retain control over underlying AWS resources. Which service fits?',
        answer: 'AWS Elastic Beanstalk',
        details: ['PaaS for web applications', 'Supports Node, Python, Java, Docker', 'Auto scaling and load balancing', 'Full access to AWS resources']
    },
    {
        id: 'outposts-1',
        category: 'compute',
        service: 'AWS Outposts',
        question: 'A manufacturing company needs AWS services on-premises for ultra-low latency to factory equipment. Which service provides this?',
        answer: 'AWS Outposts',
        details: ['AWS infrastructure on-premises', 'Same AWS APIs and tools', 'Fully managed by AWS', 'Supports EC2, EBS, S3 on Outposts']
    },
    {
        id: 'wavelength-1',
        category: 'compute',
        service: 'AWS Wavelength',
        question: 'A gaming company needs ultra-low latency to mobile users by running servers at 5G network edge. Which service provides this?',
        answer: 'AWS Wavelength',
        details: ['Compute at 5G network edge', 'Single-digit ms latency', 'Deployed in carrier data centers', 'Ideal for gaming, AR/VR, streaming']
    }
];
