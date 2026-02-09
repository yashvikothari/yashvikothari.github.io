/**
 * AWS Storage Flashcards
 */
window.storageCards = [
    {
        id: 's3-1', category: 'storage', service: 'Amazon S3',
        question: 'A company needs to store unlimited objects with high durability (99.999999999%) and multiple storage classes for cost optimization. Which service should they use?',
        answer: 'Amazon S3',
        details: ['Object storage service', '11 nines durability', 'Multiple storage classes', 'Lifecycle policies', 'Versioning and replication']
    },
    {
        id: 's3-2', category: 'storage', service: 'S3 Storage Classes',
        question: 'A company stores log files that are accessed only during monthly audits. They want the lowest cost storage for infrequently accessed data. Which S3 class fits?',
        answer: 'S3 Standard-IA or S3 One Zone-IA',
        details: ['Standard-IA: infrequent access, multi-AZ', 'One Zone-IA: single AZ, lower cost', 'Retrieval fees apply', 'Minimum 30-day storage', 'Minimum 128KB object size']
    },
    {
        id: 's3-3', category: 'storage', service: 'S3 Intelligent-Tiering',
        question: 'A company has data with unpredictable access patterns and wants S3 to automatically move objects between storage classes. Which class provides this?',
        answer: 'S3 Intelligent-Tiering',
        details: ['Automatic tier movement', 'No retrieval fees', 'Frequent, Infrequent, Archive tiers', 'Small monitoring fee per object', 'Ideal for unknown access patterns']
    },
    {
        id: 's3-4', category: 'storage', service: 'S3 Lifecycle Policies',
        question: 'A company wants to automatically transition objects to Glacier after 90 days and delete after 365 days. Which S3 feature enables this?',
        answer: 'S3 Lifecycle Policies',
        details: ['Automate storage class transitions', 'Set expiration for deletion', 'Filter by prefix or tags', 'Reduce storage costs', 'Applies to current and previous versions']
    },
    {
        id: 's3-5', category: 'storage', service: 'S3 Replication',
        question: 'A company needs to replicate S3 objects to another region for disaster recovery with RTO of 15 minutes. Which feature helps?',
        answer: 'S3 Cross-Region Replication (CRR)',
        details: ['Async replication to another region', 'Requires versioning enabled', 'Replication Time Control for SLA', 'RTC: 99.99% in 15 minutes', 'Also supports Same-Region Replication']
    },
    {
        id: 'glacier-1', category: 'storage', service: 'S3 Glacier',
        question: 'A company needs to archive data for 7 years for compliance. Retrieval can take 3-5 hours. They want the lowest cost. Which storage class should they use?',
        answer: 'S3 Glacier Flexible Retrieval',
        details: ['Low-cost archive storage', 'Retrieval: minutes to hours', 'Expedited: 1-5 minutes', 'Standard: 3-5 hours', 'Bulk: 5-12 hours (cheapest)']
    },
    {
        id: 'glacier-2', category: 'storage', service: 'S3 Glacier Deep Archive',
        question: 'A company archives data accessed once per year and can wait 12 hours for retrieval. They want the absolute lowest storage cost. Which class fits?',
        answer: 'S3 Glacier Deep Archive',
        details: ['Lowest cost storage class', 'Standard retrieval: 12 hours', 'Bulk retrieval: 48 hours', 'For very rarely accessed data', '7-10 year retention typical']
    },
    {
        id: 'ebs-1', category: 'storage', service: 'Amazon EBS',
        question: 'An EC2 instance needs block storage that persists independently of the instance and supports snapshots. Which service provides this?',
        answer: 'Amazon EBS (Elastic Block Store)',
        details: ['Block storage for EC2', 'Persists independently', 'Snapshots to S3', 'Multiple volume types', 'Encryption supported']
    },
    {
        id: 'ebs-2', category: 'storage', service: 'EBS Volume Types',
        question: 'A database workload needs consistent high IOPS (64,000) with low latency. Which EBS volume type should they use?',
        answer: 'EBS Provisioned IOPS SSD (io2)',
        details: ['io2: up to 64,000 IOPS', 'io2 Block Express: up to 256,000 IOPS', 'Sub-millisecond latency', 'For critical databases', 'Multi-attach supported']
    },
    {
        id: 'ebs-3', category: 'storage', service: 'EBS Snapshots',
        question: 'A company needs to backup EBS volumes and copy them to another region for DR. Which feature enables this?',
        answer: 'EBS Snapshots and Cross-Region Copy',
        details: ['Point-in-time backups', 'Stored in S3 (managed by AWS)', 'Incremental after first snapshot', 'Copy to other regions', 'Create volumes from snapshots']
    },
    {
        id: 'efs-1', category: 'storage', service: 'Amazon EFS',
        question: 'Multiple EC2 instances need shared file storage that scales automatically and supports NFS. Which service should they use?',
        answer: 'Amazon EFS (Elastic File System)',
        details: ['Managed NFS file system', 'Scales automatically', 'Multi-AZ by default', 'Concurrent access from multiple EC2', 'Lifecycle management to IA']
    },
    {
        id: 'efs-2', category: 'storage', service: 'EFS Storage Classes',
        question: 'A company uses EFS for shared storage but most files are rarely accessed. They want to reduce costs automatically. Which feature helps?',
        answer: 'EFS Lifecycle Management with Infrequent Access',
        details: ['Move files to IA automatically', 'Up to 92% cost savings', 'Based on last access time', 'Transparent to applications', 'Can move back on access']
    },
    {
        id: 'fsx-1', category: 'storage', service: 'Amazon FSx for Windows',
        question: 'Windows workloads need shared file storage with SMB protocol and Active Directory integration. Which service provides this?',
        answer: 'Amazon FSx for Windows File Server',
        details: ['Fully managed Windows file system', 'SMB protocol support', 'AD integration', 'SSD and HDD options', 'Multi-AZ for HA']
    },
    {
        id: 'fsx-2', category: 'storage', service: 'Amazon FSx for Lustre',
        question: 'An HPC workload needs high-performance file storage with sub-millisecond latency and hundreds of GB/s throughput. Which service fits?',
        answer: 'Amazon FSx for Lustre',
        details: ['High-performance parallel file system', 'Sub-ms latency', 'Hundreds GB/s throughput', 'Integrates with S3', 'Ideal for HPC, ML, media processing']
    },
    {
        id: 'storagegateway-1', category: 'storage', service: 'AWS Storage Gateway',
        question: 'A company has on-premises applications that need to access S3 using standard file protocols like NFS and SMB. Which service provides this hybrid storage?',
        answer: 'AWS Storage Gateway (File Gateway)',
        details: ['Hybrid cloud storage', 'File Gateway: NFS/SMB to S3', 'Volume Gateway: iSCSI to EBS', 'Tape Gateway: virtual tape library', 'Cache frequently accessed data locally']
    },
    {
        id: 'backup-1', category: 'storage', service: 'AWS Backup',
        question: 'A company needs centralized backup management across EC2, EBS, RDS, EFS, and DynamoDB with retention policies. Which service provides this?',
        answer: 'AWS Backup',
        details: ['Centralized backup service', 'Supports many AWS services', 'Backup plans and policies', 'Cross-region and cross-account', 'Compliance reporting']
    }
];
