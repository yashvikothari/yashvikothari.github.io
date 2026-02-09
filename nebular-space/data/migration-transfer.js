/**
 * AWS Migration and Transfer Flashcards
 */
window.migrationTransferCards = [
    {
        id: 'dms-1', category: 'migration-transfer', service: 'AWS DMS',
        question: 'A company needs to migrate their Oracle database to Aurora with minimal downtime. Which service enables this database migration?',
        answer: 'AWS Database Migration Service (DMS)',
        details: ['Migrate databases with minimal downtime', 'Supports homogeneous and heterogeneous', 'Continuous data replication', 'Use SCT for schema conversion', 'One-time or ongoing migration']
    },
    {
        id: 'dms-2', category: 'migration-transfer', service: 'AWS Schema Conversion Tool',
        question: 'A company migrating from Oracle to PostgreSQL needs to convert stored procedures and database schema. Which tool helps with this?',
        answer: 'AWS Schema Conversion Tool (SCT)',
        details: ['Convert database schemas', 'SQL code and procedures', 'Assessment reports', 'Works with DMS for data migration', 'Conversion hints for manual fixes']
    },
    {
        id: 'datasync-1', category: 'migration-transfer', service: 'AWS DataSync',
        question: 'A company needs to transfer large amounts of data from on-premises NFS storage to S3 with automatic integrity verification. Which service should they use?',
        answer: 'AWS DataSync',
        details: ['Fast data transfer to/from AWS', 'NFS, SMB, HDFS, S3, EFS, FSx', 'Automatic integrity validation', 'Encryption in transit', 'Scheduled and incremental transfers']
    },
    {
        id: 'snowfamily-1', category: 'migration-transfer', service: 'AWS Snow Family',
        question: 'A company needs to migrate 100 TB of data to AWS but has limited bandwidth. Physical data transport would be faster. Which service family should they use?',
        answer: 'AWS Snow Family',
        details: ['Physical data transfer devices', 'Snowcone: 8-14TB, portable', 'Snowball Edge: 80TB, compute', 'Snowmobile: 100 PB, shipping container', 'Offline data migration']
    },
    {
        id: 'snowfamily-2', category: 'migration-transfer', service: 'Snowball Edge',
        question: 'A company needs to run EC2 instances and Lambda at remote locations with limited connectivity, then ship data back to AWS. Which device supports this?',
        answer: 'AWS Snowball Edge Compute Optimized',
        details: ['Edge computing capability', 'Run EC2 and Lambda locally', 'Storage and compute options', 'Collect data and ship to AWS', 'Rugged for harsh environments']
    },
    {
        id: 'transferfamily-1', category: 'migration-transfer', service: 'AWS Transfer Family',
        question: 'A company has partners who upload files via SFTP. They want to migrate to S3 without changing the partners SFTP workflow. Which service helps?',
        answer: 'AWS Transfer Family',
        details: ['Managed SFTP, FTPS, FTP for S3/EFS', 'Partners keep existing workflow', 'DNS and identity integration', 'No code changes required', 'Pay per protocol and data']
    },
    {
        id: 'migrationhub-1', category: 'migration-transfer', service: 'AWS Migration Hub',
        question: 'A company is performing a large-scale migration with multiple tools. They need a single place to track migration progress. Which service provides this?',
        answer: 'AWS Migration Hub',
        details: ['Central migration tracking', 'Integrates with DMS, SMS, MGN', 'Application grouping', 'Progress dashboard', 'Multi-account visibility']
    },
    {
        id: 'appdisc-1', category: 'migration-transfer', service: 'AWS Application Discovery',
        question: 'A company needs to discover and inventory their on-premises servers before planning a migration to AWS. Which service helps?',
        answer: 'AWS Application Discovery Service',
        details: ['Discover on-premises servers', 'Agent-based or agentless', 'Server specifications and dependencies', 'Data for migration planning', 'Integrates with Migration Hub']
    },
    {
        id: 'mgn-1', category: 'migration-transfer', service: 'AWS Application Migration Service',
        question: 'A company wants to lift-and-shift their on-premises servers to EC2 with minimal changes. Which service provides automated rehost migration?',
        answer: 'AWS Application Migration Service (MGN)',
        details: ['Lift-and-shift to EC2', 'Automatic replication', 'Non-disruptive testing', 'Cutover with minimal downtime', 'Replaces Server Migration Service']
    }
];
