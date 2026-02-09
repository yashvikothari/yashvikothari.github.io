/**
 * AWS Management and Governance Flashcards
 */
window.managementGovernanceCards = [
    {
        id: 'cloudformation-1', category: 'management-governance', service: 'AWS CloudFormation',
        question: 'A company needs to provision and manage AWS resources using Infrastructure as Code with version control. Which service should they use?',
        answer: 'AWS CloudFormation',
        details: ['Infrastructure as Code (IaC)', 'JSON or YAML templates', 'Stack management and drift detection', 'Change sets for preview', 'StackSets for multi-account']
    },
    {
        id: 'cloudformation-2', category: 'management-governance', service: 'CloudFormation StackSets',
        question: 'A company needs to deploy the same CloudFormation stack across multiple AWS accounts and regions. Which feature enables this?',
        answer: 'CloudFormation StackSets',
        details: ['Deploy stacks across accounts/regions', 'Centralized management', 'Automatic deployments to new accounts', 'Works with AWS Organizations', 'Concurrent or sequential deployment']
    },
    {
        id: 'cloudtrail-1', category: 'management-governance', service: 'AWS CloudTrail',
        question: 'A security team needs to audit all API calls made in their AWS account for compliance. Which service provides this audit trail?',
        answer: 'AWS CloudTrail',
        details: ['Records AWS API calls', 'Who, what, when, where for API calls', 'Enabled by default (90-day lookup)', 'Save to S3 for long-term retention', 'CloudTrail Insights for anomaly detection']
    },
    {
        id: 'cloudwatch-1', category: 'management-governance', service: 'Amazon CloudWatch',
        question: 'A company needs centralized monitoring with metrics, logs, and alarms for their AWS resources. Which service provides this?',
        answer: 'Amazon CloudWatch',
        details: ['Metrics, logs, alarms, dashboards', 'Default and custom metrics', 'CloudWatch Logs for log management', 'CloudWatch Alarms for notifications', 'Container and Lambda Insights']
    },
    {
        id: 'cloudwatch-2', category: 'management-governance', service: 'CloudWatch Alarms',
        question: 'A company wants to receive alerts when EC2 CPU utilization exceeds 80% for 5 minutes and auto-trigger scaling. Which feature provides this?',
        answer: 'CloudWatch Alarms',
        details: ['Monitor metrics and trigger actions', 'States: OK, ALARM, INSUFFICIENT_DATA', 'Actions: SNS, Auto Scaling, EC2', 'Composite alarms for multiple metrics', 'Anomaly detection alarms']
    },
    {
        id: 'config-1', category: 'management-governance', service: 'AWS Config',
        question: 'A compliance team needs to track configuration changes and evaluate resources against defined rules continuously. Which service should they use?',
        answer: 'AWS Config',
        details: ['Tracks resource configuration history', 'Configuration timeline', 'Config Rules for compliance', 'Remediation actions', 'Conformance packs for frameworks']
    },
    {
        id: 'config-2', category: 'management-governance', service: 'AWS Config Rules',
        question: 'A company needs to automatically check if all S3 buckets have encryption enabled and flag non-compliant buckets. Which service provides this?',
        answer: 'AWS Config Rules',
        details: ['Managed or custom rules', 'Evaluate resource compliance', 'Auto-remediation option', '300+ managed rules', 'Aggregators for multi-account']
    },
    {
        id: 'controltower-1', category: 'management-governance', service: 'AWS Control Tower',
        question: 'A company setting up a multi-account AWS environment needs automated guardrails and account provisioning based on best practices. Which service helps?',
        answer: 'AWS Control Tower',
        details: ['Multi-account governance', 'Landing zone setup', 'Guardrails (preventive and detective)', 'Account factory for provisioning', 'Built on Organizations, SCPs, Config']
    },
    {
        id: 'organizations-1', category: 'management-governance', service: 'AWS Organizations',
        question: 'A company with multiple AWS accounts needs centralized billing, policy management, and account organization. Which service provides this?',
        answer: 'AWS Organizations',
        details: ['Centralized account management', 'Consolidated billing', 'Service Control Policies (SCPs)', 'Organizational Units (OUs)', 'Automate account creation']
    },
    {
        id: 'organizations-2', category: 'management-governance', service: 'Service Control Policies',
        question: 'A company needs to restrict all member accounts from launching EC2 instances outside approved regions. Which Organizations feature enables this?',
        answer: 'Service Control Policies (SCPs)',
        details: ['Guardrails for member accounts', 'Deny or allow actions centrally', 'Applied to OUs or accounts', 'Do not grant permissions, only restrict', 'Does not affect management account']
    },
    {
        id: 'systemsmanager-1', category: 'management-governance', service: 'AWS Systems Manager',
        question: 'A company needs to view operational data, automate tasks, and manage EC2 and on-premises servers from a single interface. Which service helps?',
        answer: 'AWS Systems Manager',
        details: ['Operational hub for AWS resources', 'Run Command for remote execution', 'Patch Manager for patching', 'Parameter Store for secrets', 'Session Manager for shell access']
    },
    {
        id: 'systemsmanager-2', category: 'management-governance', service: 'SSM Parameter Store',
        question: 'A company needs to store configuration values and secrets hierarchically with version history. They dont need automatic rotation. Which service is cost-effective?',
        answer: 'SSM Parameter Store',
        details: ['Store config and secrets', 'Hierarchical organization', 'Standard (free) and Advanced tiers', 'Version history', 'For rotation, use Secrets Manager']
    },
    {
        id: 'trustedadvisor-1', category: 'management-governance', service: 'AWS Trusted Advisor',
        question: 'A company wants automated recommendations for cost optimization, security, and performance across their AWS account. Which service provides this?',
        answer: 'AWS Trusted Advisor',
        details: ['Best practices recommendations', 'Cost, security, performance, fault tolerance', 'Service limits monitoring', 'Full checks with Business/Enterprise support', 'Basic checks for all accounts']
    },
    {
        id: 'computeoptimizer-1', category: 'management-governance', service: 'AWS Compute Optimizer',
        question: 'A company wants ML-based recommendations for right-sizing EC2 instances, Auto Scaling groups, and Lambda functions. Which service provides this?',
        answer: 'AWS Compute Optimizer',
        details: ['ML-powered recommendations', 'EC2, Auto Scaling, Lambda, EBS', 'Based on utilization metrics', 'Identifies over/under-provisioned', 'Savings estimates included']
    },
    {
        id: 'wellarchitected-1', category: 'management-governance', service: 'Well-Architected Tool',
        question: 'A company wants to evaluate their workloads against AWS best practices across security, reliability, and cost pillars. Which tool helps with this?',
        answer: 'AWS Well-Architected Tool',
        details: ['Review workloads against pillars', 'Identify high-risk issues', 'Improvement plans', 'Milestones for tracking progress', 'Lens catalog for specific workloads']
    },
    {
        id: 'health-1', category: 'management-governance', service: 'AWS Health Dashboard',
        question: 'A company needs visibility into AWS service availability and events affecting their specific resources. Which service provides this?',
        answer: 'AWS Health Dashboard',
        details: ['Service health and your account health', 'Personalized view of your resources', 'Scheduled maintenance notices', 'EventBridge integration for automation', 'Proactive notifications']
    }
];
