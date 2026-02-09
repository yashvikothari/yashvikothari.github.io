/**
 * AWS Networking and Content Delivery Flashcards
 */
window.networkingCards = [
    {
        id: 'vpc-1', category: 'networking', service: 'Amazon VPC',
        question: 'A company needs to create an isolated network in AWS with control over IP ranges, subnets, and routing. Which service provides this?',
        answer: 'Amazon VPC',
        details: ['Isolated virtual network', 'Control IP ranges (CIDR)', 'Public and private subnets', 'Route tables, NACLs, security groups', 'VPC peering and endpoints']
    },
    {
        id: 'vpc-2', category: 'networking', service: 'VPC Endpoints',
        question: 'A company wants EC2 instances in a private subnet to access S3 without using the internet or NAT gateway. Which feature enables this?',
        answer: 'VPC Gateway Endpoint',
        details: ['Private access to S3 and DynamoDB', 'No internet gateway needed', 'Route table entry required', 'Free to use', 'Stays within AWS network']
    },
    {
        id: 'vpc-3', category: 'networking', service: 'VPC Interface Endpoints',
        question: 'A company needs private access from their VPC to AWS services like Kinesis and Secrets Manager. Which endpoint type provides this?',
        answer: 'VPC Interface Endpoints (PrivateLink)',
        details: ['Private ENI in your subnet', 'DNS resolves to private IP', 'Supports many AWS services', 'Hourly and data charges', 'Access third-party services too']
    },
    {
        id: 'cloudfront-1', category: 'networking', service: 'Amazon CloudFront',
        question: 'A company with global users needs to deliver their website with low latency using edge locations worldwide. Which service provides this CDN capability?',
        answer: 'Amazon CloudFront',
        details: ['Global CDN with 400+ edge locations', 'Cache static and dynamic content', 'HTTPS and custom SSL', 'Origin Shield for cache efficiency', 'Lambda@Edge for customization']
    },
    {
        id: 'cloudfront-2', category: 'networking', service: 'CloudFront OAC',
        question: 'A company wants CloudFront to serve content from S3 while keeping the bucket private. Which feature controls S3 access?',
        answer: 'CloudFront Origin Access Control (OAC)',
        details: ['Restricts S3 access to CloudFront', 'Replace OAI (legacy)', 'S3 bucket stays private', 'Supports SSE-KMS encryption', 'Block direct S3 access']
    },
    {
        id: 'route53-1', category: 'networking', service: 'Amazon Route 53',
        question: 'A company needs a highly available DNS service with health checks and multiple routing policies. Which service provides this?',
        answer: 'Amazon Route 53',
        details: ['Managed DNS service', '100% SLA availability', 'Health checks and failover', 'Routing policies: simple, weighted, latency, geolocation, failover', 'Domain registration']
    },
    {
        id: 'route53-2', category: 'networking', service: 'Route 53 Routing Policies',
        question: 'A company has servers in multiple regions and wants DNS to route users to the closest region for lowest latency. Which Route 53 policy should they use?',
        answer: 'Latency-based Routing',
        details: ['Routes to lowest latency region', 'Based on actual network latency', 'Health check integration', 'Can combine with failover', 'Good for multi-region active-active']
    },
    {
        id: 'elb-1', category: 'networking', service: 'Elastic Load Balancing',
        question: 'A company needs to distribute traffic across EC2 instances with support for path-based routing and host-based routing. Which load balancer type fits?',
        answer: 'Application Load Balancer (ALB)',
        details: ['Layer 7 (HTTP/HTTPS) load balancing', 'Path and host-based routing', 'WebSocket support', 'Integrates with ECS, Lambda', 'Target groups for flexible routing']
    },
    {
        id: 'elb-2', category: 'networking', service: 'Network Load Balancer',
        question: 'A company needs ultra-low latency load balancing for millions of TCP connections with static IP addresses. Which load balancer type should they use?',
        answer: 'Network Load Balancer (NLB)',
        details: ['Layer 4 (TCP/UDP) load balancing', 'Ultra-low latency', 'Millions of requests per second', 'Static IP per AZ', 'Preserves client IP']
    },
    {
        id: 'elb-3', category: 'networking', service: 'Gateway Load Balancer',
        question: 'A company wants to route all VPC traffic through third-party security appliances like firewalls. Which load balancer type enables this?',
        answer: 'Gateway Load Balancer (GWLB)',
        details: ['Layer 3 for security appliances', 'Transparent network traffic routing', 'Deploy firewalls, IDS/IPS', 'GENEVE protocol encapsulation', 'Scales with traffic']
    },
    {
        id: 'directconnect-1', category: 'networking', service: 'AWS Direct Connect',
        question: 'A company needs a dedicated, private network connection from their data center to AWS for consistent performance and lower costs. Which service provides this?',
        answer: 'AWS Direct Connect',
        details: ['Dedicated private connection', '1 Gbps or 10/100 Gbps', 'Lower and consistent latency', 'Reduced data transfer costs', 'Private connection to VPCs']
    },
    {
        id: 'directconnect-2', category: 'networking', service: 'Direct Connect Gateway',
        question: 'A company wants to connect their Direct Connect link to multiple VPCs across different regions. Which feature enables this?',
        answer: 'Direct Connect Gateway',
        details: ['Connect to VPCs in any region', 'Single Direct Connect to multiple VPCs', 'Global reach from one connection', 'Works with Transit Gateway', 'Simplifies multi-region connectivity']
    },
    {
        id: 'vpn-1', category: 'networking', service: 'AWS Site-to-Site VPN',
        question: 'A company needs encrypted connectivity between their on-premises network and AWS VPC over the internet. Which service provides this?',
        answer: 'AWS Site-to-Site VPN',
        details: ['IPsec VPN over internet', 'Encrypted connectivity', 'Quick to set up', 'Up to 1.25 Gbps per tunnel', 'Redundant tunnels for HA']
    },
    {
        id: 'vpn-2', category: 'networking', service: 'AWS Client VPN',
        question: 'Remote employees need secure VPN access to AWS resources from their laptops. Which service provides client VPN capability?',
        answer: 'AWS Client VPN',
        details: ['Managed client VPN service', 'OpenVPN-based client', 'Access VPCs and on-premises', 'AD or SAML authentication', 'Split-tunnel or full-tunnel']
    },
    {
        id: 'transitgw-1', category: 'networking', service: 'AWS Transit Gateway',
        question: 'A company has 50 VPCs and wants to connect them all without complex peering. They also need on-premises connectivity. Which service simplifies this?',
        answer: 'AWS Transit Gateway',
        details: ['Hub for VPC and on-premises connections', 'Eliminates complex peering', 'Attach VPCs, VPNs, Direct Connect', 'Route tables for segmentation', 'Scales to thousands of connections']
    },
    {
        id: 'globalaccelerator-1', category: 'networking', service: 'AWS Global Accelerator',
        question: 'A company wants to improve availability and performance of their application using AWS global network with static anycast IPs. Which service provides this?',
        answer: 'AWS Global Accelerator',
        details: ['Anycast static IPs', 'Routes via AWS global network', 'Health-based routing', 'Instant regional failover', 'DDoS protection included']
    },
    {
        id: 'privatelink-1', category: 'networking', service: 'AWS PrivateLink',
        question: 'A company wants to expose their service to customers in other VPCs without VPC peering or public internet. Which feature provides this private connectivity?',
        answer: 'AWS PrivateLink',
        details: ['Private service exposure', 'No VPC peering needed', 'Endpoint services for your apps', 'Traffic stays on AWS network', 'SaaS integrations available']
    }
];
