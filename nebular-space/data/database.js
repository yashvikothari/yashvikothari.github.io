/**
 * AWS Database Services Flashcards
 */
window.databaseCards = [
    {
        id: 'aurora-1', category: 'database', service: 'Amazon Aurora',
        question: 'A company needs a MySQL-compatible database with 5x better performance, automatic failover, and up to 15 read replicas. Which service should they use?',
        answer: 'Amazon Aurora',
        details: ['5x MySQL, 3x PostgreSQL performance', 'Up to 15 read replicas with <10ms lag', 'Auto-scaling storage up to 128TB', '6 copies of data across 3 AZs', 'Automatic failover in <30 seconds']
    },
    {
        id: 'aurora-2', category: 'database', service: 'Amazon Aurora Global Database',
        question: 'A company needs a disaster recovery solution with an RTO of less than 1 minute. Their primary database is in us-east-1 and DR must be in eu-west-1. Which solution works?',
        answer: 'Aurora Global Database',
        details: ['Cross-region replication <1 second', 'RPO of 1 second', 'RTO < 1 minute with promoted region', 'Up to 5 secondary regions', 'Write forwarding from secondary regions']
    },
    {
        id: 'aurora-serverless-1', category: 'database', service: 'Aurora Serverless',
        question: 'A company has a development database with unpredictable usage - idle for hours then bursting. They want auto-scaling and pay-per-use. Which option fits?',
        answer: 'Aurora Serverless v2',
        details: ['Scales instantly based on demand', 'Scales to zero (v1) or near-zero (v2)', 'Pay only for resources consumed', 'Ideal for variable workloads', 'Compatible with Aurora features']
    },
    {
        id: 'dynamodb-1', category: 'database', service: 'Amazon DynamoDB',
        question: 'A gaming company needs a NoSQL database with single-digit millisecond latency at any scale. They need consistent read/write performance. Which service should they use?',
        answer: 'Amazon DynamoDB',
        details: ['Fully managed NoSQL database', 'Single-digit ms latency at any scale', 'Automatic scaling with on-demand mode', 'Global tables for multi-region', 'Built-in caching with DAX']
    },
    {
        id: 'dynamodb-2', category: 'database', service: 'DynamoDB Streams',
        question: 'A company needs to trigger Lambda functions whenever items are changed in DynamoDB for real-time processing. Which feature enables this?',
        answer: 'DynamoDB Streams',
        details: ['Captures table modifications', 'Ordered stream of changes', 'Triggers Lambda functions', '24-hour data retention', 'Enables event-driven architectures']
    },
    {
        id: 'dynamodb-3', category: 'database', service: 'DynamoDB Global Tables',
        question: 'A company needs active-active multi-region deployment for their DynamoDB table with sub-second replication. Which feature provides this?',
        answer: 'DynamoDB Global Tables',
        details: ['Active-active multi-region', 'Sub-second replication', 'Automatic conflict resolution', 'No application changes needed', 'Up to 5 regions']
    },
    {
        id: 'docdb-1', category: 'database', service: 'Amazon DocumentDB',
        question: 'A company has a MongoDB application and wants a managed AWS database compatible with MongoDB APIs. Which service should they use?',
        answer: 'Amazon DocumentDB',
        details: ['MongoDB-compatible document database', 'Fully managed by AWS', 'Storage auto-scales to 128TB', '6 copies across 3 AZs', 'Up to 15 read replicas']
    },
    {
        id: 'elasticache-1', category: 'database', service: 'Amazon ElastiCache',
        question: 'A company needs to reduce database load by caching session data and frequently accessed query results with sub-millisecond latency. Which service should they use?',
        answer: 'Amazon ElastiCache',
        details: ['Managed Redis or Memcached', 'Sub-millisecond latency', 'Session storage, caching', 'Redis: persistence, replication, Lua scripting', 'Memcached: simpler, multi-threaded']
    },
    {
        id: 'elasticache-2', category: 'database', service: 'ElastiCache for Redis',
        question: 'A company needs in-memory caching with data persistence, Multi-AZ replication, and support for complex data structures. Which ElastiCache engine should they choose?',
        answer: 'ElastiCache for Redis',
        details: ['Data persistence options', 'Multi-AZ with auto-failover', 'Complex data types (sets, sorted sets, hashes)', 'Pub/sub messaging', 'Lua scripting support']
    },
    {
        id: 'keyspaces-1', category: 'database', service: 'Amazon Keyspaces',
        question: 'A company wants to migrate their Apache Cassandra workloads to a serverless, fully managed service. Which AWS service is compatible?',
        answer: 'Amazon Keyspaces (for Apache Cassandra)',
        details: ['Serverless Cassandra-compatible', 'CQL API compatible', 'Automatic scaling', 'Encryption at rest and in transit', 'Pay-per-use pricing']
    },
    {
        id: 'neptune-1', category: 'database', service: 'Amazon Neptune',
        question: 'A company needs to build a social network application with complex relationship queries (friends of friends). Which database is optimized for this?',
        answer: 'Amazon Neptune',
        details: ['Fully managed graph database', 'Supports Gremlin and SPARQL', 'Optimized for relationship queries', '6 replicas across 3 AZs', 'Up to 15 read replicas']
    },
    {
        id: 'qldb-1', category: 'database', service: 'Amazon QLDB',
        question: 'A company needs a database with an immutable, cryptographically verifiable transaction log for financial audit trails. Which service provides this?',
        answer: 'Amazon QLDB',
        details: ['Immutable, append-only ledger', 'Cryptographic verification', 'SQL-like PartiQL queries', 'Serverless, auto-scaling', 'Ideal for audit trails, supply chain']
    },
    {
        id: 'rds-1', category: 'database', service: 'Amazon RDS',
        question: 'A company wants a managed relational database with automatic backups, patching, and Multi-AZ deployment. They use PostgreSQL. Which service fits?',
        answer: 'Amazon RDS for PostgreSQL',
        details: ['Managed relational database', 'Automatic backups (up to 35 days)', 'Multi-AZ for high availability', 'Read replicas for scaling', 'Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server']
    },
    {
        id: 'rds-2', category: 'database', service: 'Amazon RDS',
        question: 'A company needs to scale database read capacity. Their application has many read queries but few writes. Which RDS feature helps?',
        answer: 'RDS Read Replicas',
        details: ['Scale read-heavy workloads', 'Async replication from primary', 'Up to 5 read replicas (15 for Aurora)', 'Can be promoted to standalone DB', 'Cross-region replicas supported']
    },
    {
        id: 'rds-3', category: 'database', service: 'Amazon RDS',
        question: 'A company needs automatic failover for their RDS database with minimal downtime. Which feature provides this high availability?',
        answer: 'RDS Multi-AZ Deployment',
        details: ['Synchronous standby in another AZ', 'Automatic failover (1-2 minutes)', 'No manual intervention required', 'Same endpoint after failover', 'Enhanced durability']
    },
    {
        id: 'redshift-db-1', category: 'database', service: 'Amazon Redshift',
        question: 'A company needs a petabyte-scale data warehouse for analytics with columnar storage and MPP. Which service should they use?',
        answer: 'Amazon Redshift',
        details: ['Petabyte-scale data warehouse', 'Columnar storage', 'Massively parallel processing', 'Redshift Spectrum for S3 queries', 'Concurrency Scaling for burst']
    }
];
