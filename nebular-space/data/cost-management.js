/**
 * AWS Cost Management Services Flashcards
 * Category: Cost Management
 */

window.costManagementCards = [
    // AWS Budgets
    {
        id: 'budgets-1',
        category: 'cost-management',
        service: 'AWS Budgets',
        question: 'A company wants to receive email alerts when their monthly AWS spending is forecasted to exceed $10,000. They also want alerts at 80% and 100% of the budget. Which service provides this capability?',
        answer: 'AWS Budgets',
        details: [
            'Set custom cost and usage budgets',
            'Alerts at configurable thresholds (actual or forecasted)',
            'Notifications via email, SNS, or Chatbot',
            'Budget types: cost, usage, reservation, Savings Plans',
            'First 2 budgets free, then $0.02/budget/day'
        ]
    },
    {
        id: 'budgets-2',
        category: 'cost-management',
        service: 'AWS Budgets',
        question: 'A company wants to automatically stop EC2 instances when spending exceeds their budget to prevent unexpected charges. Which AWS Budgets feature enables this?',
        answer: 'AWS Budgets Actions',
        details: [
            'Automate responses when thresholds are breached',
            'Actions: apply IAM policies, SCPs, or stop EC2/RDS',
            'Requires approval or can run automatically',
            'Preventive cost controls',
            'Combine with Lambda for custom actions'
        ]
    },
    {
        id: 'budgets-3',
        category: 'cost-management',
        service: 'AWS Budgets',
        question: 'A company has Reserved Instances and wants to track their utilization and coverage. They want alerts when RI utilization falls below 80%. Which budget type should they create?',
        answer: 'AWS Budgets Reservation Budget',
        details: [
            'Track RI and Savings Plans utilization/coverage',
            'Alert when utilization drops below threshold',
            'Identify unused reservations',
            'Coverage budgets show percentage of usage covered',
            'Helps maximize reservation ROI'
        ]
    },

    // AWS Cost and Usage Report
    {
        id: 'cur-1',
        category: 'cost-management',
        service: 'AWS Cost and Usage Report',
        question: 'A company needs detailed line-item billing data including resource IDs to build custom cost allocation reports in their BI tool. Which service provides this granular data?',
        answer: 'AWS Cost and Usage Report (CUR)',
        details: [
            'Most comprehensive cost and usage data',
            'Hourly or daily granularity',
            'Resource-level IDs for detailed tracking',
            'Delivered to S3 in CSV or Parquet format',
            'Query with Athena or load into Redshift/QuickSight'
        ]
    },
    {
        id: 'cur-2',
        category: 'cost-management',
        service: 'AWS Cost and Usage Report',
        question: 'A finance team needs to analyze AWS costs by department and project. Resources are tagged with cost center information. Which report includes this tag-based cost allocation data?',
        answer: 'AWS Cost and Usage Report with Resource Tags',
        details: [
            'Enable cost allocation tags in Billing console',
            'Tags appear as columns in CUR',
            'Filter and group costs by tag values',
            'AWS-generated tags (aws:) and user-defined tags',
            'Activate tags before they appear in reports'
        ]
    },

    // AWS Cost Explorer
    {
        id: 'costexplorer-1',
        category: 'cost-management',
        service: 'AWS Cost Explorer',
        question: 'A manager needs to visualize AWS spending trends over the past 6 months and filter by service, region, and linked account. They want a built-in tool without setting up custom reports. Which service should they use?',
        answer: 'AWS Cost Explorer',
        details: [
            'Visual interface for cost analysis',
            'View up to 12 months of historical data',
            'Filter by service, account, tag, region, etc.',
            'Forecast future costs (up to 12 months)',
            'Pre-built and custom reports'
        ]
    },
    {
        id: 'costexplorer-2',
        category: 'cost-management',
        service: 'AWS Cost Explorer',
        question: 'A company wants to identify EC2 instances that are underutilized and receive rightsizing recommendations. Which Cost Explorer feature provides this?',
        answer: 'Cost Explorer Right Sizing Recommendations',
        details: [
            'Identifies underutilized EC2 instances',
            'Recommendations based on CloudWatch metrics',
            'Suggests instance type changes for savings',
            'Shows estimated monthly savings',
            'Consider same-family or cross-family recommendations'
        ]
    },
    {
        id: 'costexplorer-3',
        category: 'cost-management',
        service: 'AWS Cost Explorer',
        question: 'A company is considering purchasing Reserved Instances. They want to see recommendations based on their historical usage patterns. Which Cost Explorer feature helps with this analysis?',
        answer: 'Cost Explorer RI Recommendations',
        details: [
            'RI purchase recommendations based on usage',
            'Choose lookback period (7, 30, or 60 days)',
            'Shows estimated savings and break-even point',
            'Recommendations for EC2, RDS, Redshift, ElastiCache',
            'Also provides Savings Plans recommendations'
        ]
    },

    // Savings Plans
    {
        id: 'savingsplans-1',
        category: 'cost-management',
        service: 'Savings Plans',
        question: 'A company wants to reduce compute costs across EC2, Fargate, and Lambda with a simple commitment model. They want flexibility to change instance families and regions. Which pricing model should they use?',
        answer: 'Compute Savings Plans',
        details: [
            'Up to 66% off On-Demand prices',
            'Applies to EC2, Fargate, and Lambda',
            'Flexibility across instance families, sizes, regions, OS',
            'Commit to $/hour over 1 or 3 years',
            'All Upfront, Partial Upfront, or No Upfront'
        ]
    },
    {
        id: 'savingsplans-2',
        category: 'cost-management',
        service: 'Savings Plans',
        question: 'A company runs EC2 workloads primarily in us-east-1 using a mix of instance types within the M5 family. They want the maximum discount possible. Which Savings Plan type offers the highest savings?',
        answer: 'EC2 Instance Savings Plans',
        details: [
            'Up to 72% off On-Demand prices (highest discount)',
            'Locked to specific instance family and region',
            'Flexibility within family: size, OS, tenancy',
            'Best for predictable workloads with stable requirements',
            'Commit to $/hour over 1 or 3 years'
        ]
    },
    {
        id: 'savingsplans-3',
        category: 'cost-management',
        service: 'Savings Plans',
        question: 'A company uses SageMaker extensively for ML model training. They want to reduce costs with a commitment-based discount. Which Savings Plan type applies to SageMaker?',
        answer: 'SageMaker Savings Plans',
        details: [
            'Up to 64% off On-Demand SageMaker prices',
            'Covers SageMaker ML instance usage',
            'Flexibility across instance families, sizes, regions',
            'Applies to training, inference, notebooks, etc.',
            '1 or 3 year commitment term'
        ]
    },
    {
        id: 'savingsplans-4',
        category: 'cost-management',
        service: 'Savings Plans',
        question: 'An organization wants to compare the trade-offs between Reserved Instances and Savings Plans for EC2. What are the key differences?',
        answer: 'Savings Plans vs Reserved Instances',
        details: [
            'Savings Plans: $/hour commitment, more flexible',
            'RIs: capacity reservation option available',
            'Compute SP: cross-region, cross-family flexibility',
            'EC2 Instance SP: similar flexibility to Standard RIs',
            'Both offer up to 72% savings, 1 or 3 year terms'
        ]
    }
];
