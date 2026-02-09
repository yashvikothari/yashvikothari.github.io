/**
 * AWS Security, Identity, and Compliance Flashcards
 */
window.securityCards = [
    {
        id: 'iam-1', category: 'security', service: 'AWS IAM',
        question: 'A company needs to control who can access AWS resources and what actions they can perform. Which service provides this identity management?',
        answer: 'AWS IAM (Identity and Access Management)',
        details: ['Users, groups, roles, policies', 'Least privilege principle', 'Multi-factor authentication', 'Identity federation support', 'Service-linked roles']
    },
    {
        id: 'iam-2', category: 'security', service: 'IAM Roles',
        question: 'An EC2 instance needs to access S3 without storing credentials on the instance. Which IAM feature should be used?',
        answer: 'IAM Roles for EC2',
        details: ['Temporary credentials', 'No stored access keys', 'Instance profile attaches role', 'Automatic credential rotation', 'Best practice for EC2 to AWS access']
    },
    {
        id: 'iam-3', category: 'security', service: 'IAM Policies',
        question: 'A company needs to grant cross-account access for a third party to assume a role in their AWS account. What should they configure?',
        answer: 'IAM Role Trust Policy',
        details: ['Define who can assume the role', 'Specify trusted accounts or services', 'Require external ID for security', 'Use sts:AssumeRole action', 'Temporary credentials issued']
    },
    {
        id: 'cognito-1', category: 'security', service: 'Amazon Cognito',
        question: 'A mobile app needs user sign-up, sign-in, and temporary AWS credentials for authenticated users. Which service provides this?',
        answer: 'Amazon Cognito',
        details: ['User pools for sign-up/sign-in', 'Identity pools for AWS credentials', 'Social and enterprise federation', 'MFA and security features', 'Tokens for API authorization']
    },
    {
        id: 'cognito-2', category: 'security', service: 'Cognito User Pools',
        question: 'A company is building a web app and needs managed user directory with customizable sign-up flows and JWT tokens. Which Cognito component provides this?',
        answer: 'Cognito User Pools',
        details: ['Managed user directory', 'Sign-up and sign-in', 'Issue JWT tokens', 'Customizable workflows (Lambda triggers)', 'Built-in hosted UI']
    },
    {
        id: 'kms-1', category: 'security', service: 'AWS KMS',
        question: 'A company needs to create and manage encryption keys for encrypting data in S3, EBS, and RDS. Which service provides this?',
        answer: 'AWS KMS (Key Management Service)',
        details: ['Managed encryption keys', 'Customer managed or AWS managed', 'Automatic key rotation', 'Audit via CloudTrail', 'FIPS 140-2 validated']
    },
    {
        id: 'kms-2', category: 'security', service: 'AWS KMS',
        question: 'A company has compliance requiring they control their own encryption key material imported to AWS. Which KMS feature supports this?',
        answer: 'KMS Customer Managed Keys with Imported Key Material',
        details: ['Bring your own key (BYOK)', 'Import key material', 'Manual key rotation', 'Expiration management', 'Full control over key lifecycle']
    },
    {
        id: 'cloudhsm-1', category: 'security', service: 'AWS CloudHSM',
        question: 'A company requires dedicated, single-tenant HSM for cryptographic keys to meet FIPS 140-2 Level 3 compliance. Which service provides this?',
        answer: 'AWS CloudHSM',
        details: ['Dedicated single-tenant HSM', 'FIPS 140-2 Level 3', 'You control the keys', 'Integrates with custom apps', 'Supports PKCS#11, JCE, CNG']
    },
    {
        id: 'secretsmanager-1', category: 'security', service: 'AWS Secrets Manager',
        question: 'A company needs to store database credentials with automatic rotation capability. Which service should they use?',
        answer: 'AWS Secrets Manager',
        details: ['Store and retrieve secrets', 'Automatic rotation', 'Built-in RDS/Redshift rotation', 'Custom Lambda for other secrets', 'Access via API or SDK']
    },
    {
        id: 'acm-1', category: 'security', service: 'AWS Certificate Manager',
        question: 'A company needs SSL/TLS certificates for their web application with automatic renewal. Which service provides free managed certificates?',
        answer: 'AWS Certificate Manager (ACM)',
        details: ['Free public SSL/TLS certificates', 'Automatic renewal', 'Integrates with ALB, CloudFront, API Gateway', 'Private CA for internal certs', 'No certificate management']
    },
    {
        id: 'waf-1', category: 'security', service: 'AWS WAF',
        question: 'A company needs to protect their web application from SQL injection and XSS attacks. Which service provides this web application firewall capability?',
        answer: 'AWS WAF',
        details: ['Web application firewall', 'Block SQL injection, XSS', 'Rate limiting rules', 'Managed rule groups', 'Works with ALB, CloudFront, API Gateway']
    },
    {
        id: 'shield-1', category: 'security', service: 'AWS Shield',
        question: 'A company needs protection against DDoS attacks with automatic detection and mitigation. Which service provides this?',
        answer: 'AWS Shield',
        details: ['DDoS protection', 'Shield Standard: free, automatic', 'Shield Advanced: 24/7 DRT, cost protection', 'Real-time attack visibility', 'Works with CloudFront, ALB, Route 53']
    },
    {
        id: 'guardduty-1', category: 'security', service: 'Amazon GuardDuty',
        question: 'A company needs intelligent threat detection that analyzes CloudTrail, VPC Flow Logs, and DNS logs for suspicious activity. Which service provides this?',
        answer: 'Amazon GuardDuty',
        details: ['ML-based threat detection', 'Analyzes CloudTrail, VPC Flow, DNS logs', 'Detects compromised instances, reconnaissance', 'Continuous monitoring', 'Easy to enable, no agents']
    },
    {
        id: 'inspector-1', category: 'security', service: 'Amazon Inspector',
        question: 'A company needs automated vulnerability scanning of EC2 instances and container images for CVEs. Which service provides this?',
        answer: 'Amazon Inspector',
        details: ['Vulnerability scanning', 'EC2 instances and ECR images', 'CVE and network exposure checks', 'Continuous scanning', 'Risk score and prioritization']
    },
    {
        id: 'macie-1', category: 'security', service: 'Amazon Macie',
        question: 'A company needs to discover and protect sensitive data like PII in their S3 buckets. Which service provides this data discovery?',
        answer: 'Amazon Macie',
        details: ['Sensitive data discovery in S3', 'Detects PII, financial data', 'ML for pattern recognition', 'Bucket security posture', 'Alerts on data exposure risks']
    },
    {
        id: 'securityhub-1', category: 'security', service: 'AWS Security Hub',
        question: 'A company wants a centralized view of security findings from GuardDuty, Inspector, Macie, and third-party tools. Which service provides this?',
        answer: 'AWS Security Hub',
        details: ['Centralized security findings', 'Aggregates from AWS and third-party', 'Automated compliance checks', 'CIS, PCI-DSS standards', 'Insights and trends']
    },
    {
        id: 'detective-1', category: 'security', service: 'Amazon Detective',
        question: 'A security team needs to investigate and identify root cause of security findings by analyzing log data. Which service helps with investigation?',
        answer: 'Amazon Detective',
        details: ['Security investigation service', 'Analyzes CloudTrail, VPC Flow, GuardDuty', 'Visualize entity relationships', 'Root cause analysis', 'No log management required']
    },
    {
        id: 'firewall-1', category: 'security', service: 'AWS Network Firewall',
        question: 'A company needs stateful network traffic inspection and filtering across their VPCs with IDS/IPS capabilities. Which service provides this?',
        answer: 'AWS Network Firewall',
        details: ['VPC-level network firewall', 'Stateful inspection', 'IDS/IPS with Suricata rules', 'Integrates with Firewall Manager', 'Domain filtering']
    },
    {
        id: 'firewallmanager-1', category: 'security', service: 'AWS Firewall Manager',
        question: 'A company with multiple accounts needs to centrally manage WAF rules, Shield Advanced, and Security Groups across all accounts. Which service provides this?',
        answer: 'AWS Firewall Manager',
        details: ['Central security management', 'WAF, Shield, Security Groups, Network Firewall', 'Works with Organizations', 'Automatic rule application', 'Compliance reporting']
    },
    {
        id: 'iamidentitycenter-1', category: 'security', service: 'IAM Identity Center',
        question: 'A company needs single sign-on (SSO) access to multiple AWS accounts and business applications from one portal. Which service provides this?',
        answer: 'AWS IAM Identity Center (formerly AWS SSO)',
        details: ['SSO for AWS accounts and apps', 'Integrate with IdP (AD, Okta)', 'Permission sets for access levels', 'Works with Organizations', 'One user portal for access']
    },
    {
        id: 'directoryservice-1', category: 'security', service: 'AWS Directory Service',
        question: 'A company wants to use Microsoft Active Directory in AWS for their EC2 Windows instances without managing domain controllers. Which option works?',
        answer: 'AWS Managed Microsoft AD',
        details: ['Fully managed AD', 'Trust with on-premises AD', 'Windows workloads in AWS', 'Multi-AZ deployment', 'Schema extensions supported']
    },
    {
        id: 'ram-1', category: 'security', service: 'AWS RAM',
        question: 'A company wants to share Transit Gateway and subnets with other AWS accounts without duplicating resources. Which service enables this?',
        answer: 'AWS Resource Access Manager (RAM)',
        details: ['Share resources across accounts', 'Transit Gateways, subnets, License Manager', 'Works with Organizations', 'No resource duplication', 'Centralized resource management']
    },
    {
        id: 'artifact-1', category: 'security', service: 'AWS Artifact',
        question: 'A compliance team needs access to AWS compliance reports like SOC and PCI DSS for their audit. Where can they download these?',
        answer: 'AWS Artifact',
        details: ['Compliance reports and agreements', 'SOC, PCI, ISO, HIPAA reports', 'Download for audits', 'Business Associate Addendum', 'Self-service access']
    }
];
