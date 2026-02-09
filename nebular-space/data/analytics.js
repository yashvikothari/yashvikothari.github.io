/**
 * AWS Analytics Services Flashcards
 * Category: Analytics
 */

window.analyticsCards = [
    // Amazon Athena
    {
        id: 'athena-1',
        category: 'analytics',
        service: 'Amazon Athena',
        question: 'A company stores petabytes of log data in S3 and needs to run ad-hoc SQL queries for analysis. They want a serverless solution that charges only for data scanned. Which service should they use?',
        answer: 'Amazon Athena',
        details: [
            'Serverless interactive query service for S3 data',
            'Uses standard SQL (Presto engine)',
            'Pay only for data scanned ($5 per TB)',
            'Supports CSV, JSON, Parquet, ORC, Avro formats',
            'Integrates with AWS Glue Data Catalog for metadata'
        ]
    },
    {
        id: 'athena-2',
        category: 'analytics',
        service: 'Amazon Athena',
        question: 'A company wants to reduce Athena query costs. Their data is currently stored as CSV files in S3. What format conversion would provide the best cost savings?',
        answer: 'Convert to Parquet or ORC format',
        details: [
            'Columnar formats (Parquet/ORC) reduce data scanned by 30-90%',
            'Compression reduces storage costs',
            'Partitioning data further reduces scanned data',
            'Use AWS Glue to convert formats automatically',
            'Columnar formats also improve query performance'
        ]
    },
    {
        id: 'athena-3',
        category: 'analytics',
        service: 'Amazon Athena',
        question: 'A security team needs to analyze VPC Flow Logs and CloudTrail logs stored in S3 using SQL queries without managing any infrastructure. Which service is most appropriate?',
        answer: 'Amazon Athena',
        details: [
            'Native integration with VPC Flow Logs and CloudTrail',
            'Pre-built table templates available in Athena console',
            'Serverless - no infrastructure to manage',
            'Can query data directly where it resides in S3',
            'Supports federated queries to other data sources'
        ]
    },

    // AWS Data Exchange
    {
        id: 'dataexchange-1',
        category: 'analytics',
        service: 'AWS Data Exchange',
        question: 'A financial services company needs to subscribe to third-party market data feeds and automatically receive updates in their S3 bucket. Which AWS service provides this capability?',
        answer: 'AWS Data Exchange',
        details: [
            'Marketplace for third-party data products',
            'Subscribe to data from 300+ providers',
            'Automatic data delivery to S3',
            'Supports file-based data, APIs, and Lake Formation access',
            'Consolidated billing through AWS Marketplace'
        ]
    },
    {
        id: 'dataexchange-2',
        category: 'analytics',
        service: 'AWS Data Exchange',
        question: 'A data provider wants to monetize their proprietary datasets by making them available to AWS customers with usage-based billing. Which service should they use?',
        answer: 'AWS Data Exchange',
        details: [
            'Publish and monetize data products',
            'Reach AWS customers globally',
            'Flexible pricing: subscription, one-time, or custom',
            'Automatic entitlement and access management',
            'AWS handles billing and payments'
        ]
    },

    // AWS Data Pipeline
    {
        id: 'datapipeline-1',
        category: 'analytics',
        service: 'AWS Data Pipeline',
        question: 'A company needs to orchestrate data movement between on-premises databases, S3, and Redshift on a daily schedule with automatic retries on failure. Which service provides this orchestration?',
        answer: 'AWS Data Pipeline',
        details: [
            'Data workflow orchestration service',
            'Moves data between AWS services and on-premises',
            'Supports scheduling and dependency management',
            'Automatic retries and failure notifications',
            'Note: Consider Step Functions or Glue for new workloads'
        ]
    },

    // Amazon EMR
    {
        id: 'emr-1',
        category: 'analytics',
        service: 'Amazon EMR',
        question: 'A company needs to process 50 TB of clickstream data using Apache Spark. They want to use managed infrastructure and pay only for processing time. Which service should they use?',
        answer: 'Amazon EMR',
        details: [
            'Managed cluster platform for big data frameworks',
            'Supports Spark, Hadoop, Hive, Presto, HBase',
            'Use Spot Instances for up to 90% cost savings',
            'EMR on EKS for containerized Spark workloads',
            'EMR Serverless for automatic scaling without clusters'
        ]
    },
    {
        id: 'emr-2',
        category: 'analytics',
        service: 'Amazon EMR',
        question: 'A data engineering team runs nightly Spark jobs that vary significantly in resource needs. They want to avoid over-provisioning and minimize operational overhead. Which EMR deployment option is best?',
        answer: 'EMR Serverless',
        details: [
            'No cluster management required',
            'Auto-scales based on workload',
            'Pay only for resources used during job execution',
            'Supports Spark and Hive workloads',
            'Pre-initialized workers for faster startup'
        ]
    },
    {
        id: 'emr-3',
        category: 'analytics',
        service: 'Amazon EMR',
        question: 'A company wants to run Apache Spark jobs on their existing Amazon EKS cluster to consolidate infrastructure and use Kubernetes for all workloads. Which option should they use?',
        answer: 'EMR on EKS',
        details: [
            'Run EMR workloads on Amazon EKS',
            'Share compute resources with other K8s applications',
            'Use existing Kubernetes infrastructure and tooling',
            'Up to 61% lower costs with multi-tenant clusters',
            'Faster startup times than EMR on EC2'
        ]
    },

    // AWS Glue
    {
        id: 'glue-1',
        category: 'analytics',
        service: 'AWS Glue',
        question: 'A company needs to automatically discover schemas and create a centralized metadata catalog for data stored across multiple S3 buckets and RDS databases. Which service provides this capability?',
        answer: 'AWS Glue Data Catalog',
        details: [
            'Centralized metadata repository',
            'Glue Crawlers auto-discover schemas',
            'Integrates with Athena, Redshift Spectrum, EMR',
            'Apache Hive metastore compatible',
            'Supports partitions and versioning'
        ]
    },
    {
        id: 'glue-2',
        category: 'analytics',
        service: 'AWS Glue',
        question: 'A company needs a serverless ETL service to transform data from various formats in S3 and load it into Redshift. They prefer visual tools over writing code. Which service should they use?',
        answer: 'AWS Glue Studio',
        details: [
            'Visual ETL job authoring interface',
            'Serverless - no infrastructure to manage',
            'Auto-generates PySpark code',
            'Built-in data quality checks',
            'Job scheduling and monitoring included'
        ]
    },
    {
        id: 'glue-3',
        category: 'analytics',
        service: 'AWS Glue',
        question: 'A streaming application produces JSON data that needs real-time ETL processing before landing in S3. The solution must be serverless and handle late-arriving data. Which AWS Glue feature addresses this?',
        answer: 'AWS Glue Streaming ETL',
        details: [
            'Process streaming data from Kinesis or Kafka',
            'Serverless Spark Streaming jobs',
            'Handles late-arriving data with watermarks',
            'Checkpointing for exactly-once processing',
            'Write to S3, Redshift, or other targets in real-time'
        ]
    },

    // Amazon Kinesis
    {
        id: 'kinesis-1',
        category: 'analytics',
        service: 'Amazon Kinesis Data Streams',
        question: 'A gaming company needs to ingest millions of player events per second and process them in real-time with sub-second latency. Multiple consumers need to read the same data independently. Which service should they use?',
        answer: 'Amazon Kinesis Data Streams',
        details: [
            'Real-time data streaming at scale',
            'Sub-second latency for data ingestion',
            'Multiple consumers read independently',
            'Data retention: 24 hours to 365 days',
            'On-demand or provisioned capacity modes'
        ]
    },
    {
        id: 'kinesis-2',
        category: 'analytics',
        service: 'Amazon Kinesis Data Firehose',
        question: 'A company needs to stream application logs directly to S3 with automatic format conversion to Parquet and batching. They want zero infrastructure management. Which service is most appropriate?',
        answer: 'Amazon Kinesis Data Firehose',
        details: [
            'Fully managed data delivery service',
            'Delivers to S3, Redshift, OpenSearch, HTTP endpoints',
            'Automatic batching, compression, encryption',
            'Built-in format conversion (JSON to Parquet/ORC)',
            'Near real-time (60 seconds minimum buffer)'
        ]
    },
    {
        id: 'kinesis-3',
        category: 'analytics',
        service: 'Amazon Kinesis Data Analytics',
        question: 'A company needs to detect anomalies in streaming IoT sensor data using SQL queries and trigger alerts within seconds. Which service provides this real-time analytics capability?',
        answer: 'Amazon Kinesis Data Analytics',
        details: [
            'Real-time stream processing with SQL or Apache Flink',
            'Built-in anomaly detection function (RANDOM_CUT_FOREST)',
            'Process data from Kinesis Streams or Firehose',
            'Sliding/tumbling windows for aggregations',
            'Output to Kinesis, Lambda, or other destinations'
        ]
    },

    // AWS Lake Formation
    {
        id: 'lakeformation-1',
        category: 'analytics',
        service: 'AWS Lake Formation',
        question: 'A company is building a data lake and needs centralized governance with fine-grained access control at column and row level across Athena, Redshift Spectrum, and EMR. Which service provides this?',
        answer: 'AWS Lake Formation',
        details: [
            'Centralized data lake governance',
            'Fine-grained access control (column, row, cell level)',
            'Cross-account data sharing',
            'Works with Athena, Redshift, EMR, Glue',
            'Tag-based access control for scalable permissions'
        ]
    },
    {
        id: 'lakeformation-2',
        category: 'analytics',
        service: 'AWS Lake Formation',
        question: 'A healthcare company needs to share specific columns of patient data with a partner AWS account while masking PII fields like SSN. Which service enables this secure data sharing?',
        answer: 'AWS Lake Formation',
        details: [
            'Cross-account data sharing without copying data',
            'Column-level security masks sensitive fields',
            'Data filters for row-level restrictions',
            'Cell-level security for complex requirements',
            'Governed Tables for ACID transactions on S3'
        ]
    },

    // Amazon MSK
    {
        id: 'msk-1',
        category: 'analytics',
        service: 'Amazon MSK',
        question: 'A company is migrating their on-premises Apache Kafka clusters to AWS. They want to minimize changes to their existing Kafka producers and consumers. Which service should they use?',
        answer: 'Amazon MSK (Managed Streaming for Apache Kafka)',
        details: [
            'Fully managed Apache Kafka service',
            '100% compatible with open-source Kafka',
            'Automatic patching and upgrades',
            'Multi-AZ deployment for high availability',
            'Integrates with AWS Glue Schema Registry'
        ]
    },
    {
        id: 'msk-2',
        category: 'analytics',
        service: 'Amazon MSK Serverless',
        question: 'A startup needs Apache Kafka capability for unpredictable traffic patterns. They want to avoid capacity planning and pay only for actual usage. Which option is best?',
        answer: 'Amazon MSK Serverless',
        details: [
            'No cluster capacity management',
            'Automatic scaling based on throughput',
            'Pay only for data stored and transferred',
            'Same Kafka APIs as provisioned MSK',
            'Ideal for variable or unpredictable workloads'
        ]
    },

    // Amazon OpenSearch Service
    {
        id: 'opensearch-1',
        category: 'analytics',
        service: 'Amazon OpenSearch Service',
        question: 'A company needs to build a centralized logging solution with full-text search capabilities and visualizations. Logs come from multiple sources including CloudWatch and Kinesis. Which service should they use?',
        answer: 'Amazon OpenSearch Service',
        details: [
            'Managed OpenSearch (Elasticsearch fork) and Kibana',
            'Full-text search and log analytics',
            'OpenSearch Dashboards for visualizations',
            'Ingest from Kinesis Firehose, CloudWatch, etc.',
            'UltraWarm and Cold storage for cost optimization'
        ]
    },
    {
        id: 'opensearch-2',
        category: 'analytics',
        service: 'Amazon OpenSearch Service',
        question: 'A company stores years of log data in OpenSearch but frequently accessed data is only from the last 30 days. They need to reduce storage costs while keeping old data searchable. What feature should they use?',
        answer: 'OpenSearch UltraWarm and Cold Storage',
        details: [
            'UltraWarm: 90% cheaper than hot storage',
            'Cold storage: even lower cost for rarely accessed data',
            'Data remains fully searchable',
            'Automatic tiering with Index State Management',
            'Cold data moved to/from S3 on demand'
        ]
    },

    // Amazon QuickSight
    {
        id: 'quicksight-1',
        category: 'analytics',
        service: 'Amazon QuickSight',
        question: 'A company needs a serverless BI tool to create interactive dashboards that can be embedded in their SaaS application. They want per-session pricing for end users. Which service should they use?',
        answer: 'Amazon QuickSight',
        details: [
            'Serverless BI and visualization service',
            'SPICE in-memory engine for fast queries',
            'Embedded analytics for SaaS applications',
            'Per-session pricing for embedded users',
            'ML Insights for anomaly detection and forecasting'
        ]
    },
    {
        id: 'quicksight-2',
        category: 'analytics',
        service: 'Amazon QuickSight',
        question: 'A business analyst needs to automatically generate natural language narratives describing key trends in their sales dashboard. Which QuickSight feature provides this?',
        answer: 'QuickSight ML Insights and Q',
        details: [
            'Auto-narratives describe data in plain English',
            'QuickSight Q: ask questions in natural language',
            'Anomaly detection highlights unusual patterns',
            'Forecasting predicts future trends',
            'No ML expertise required'
        ]
    },

    // Amazon Redshift
    {
        id: 'redshift-1',
        category: 'analytics',
        service: 'Amazon Redshift',
        question: 'A company needs a petabyte-scale data warehouse for complex analytical queries joining data from multiple source systems. They require sub-second query response times on large datasets. Which service should they use?',
        answer: 'Amazon Redshift',
        details: [
            'Fully managed petabyte-scale data warehouse',
            'Columnar storage with massive parallel processing',
            'Up to 3x better price-performance than alternatives',
            'Materialized views for faster queries',
            'Concurrency Scaling for burst capacity'
        ]
    },
    {
        id: 'redshift-2',
        category: 'analytics',
        service: 'Amazon Redshift Spectrum',
        question: 'A company has data in both Redshift and S3. They want to run a single SQL query that joins Redshift tables with external data in S3 without loading it into the warehouse. Which feature enables this?',
        answer: 'Redshift Spectrum',
        details: [
            'Query data directly in S3 using Redshift SQL',
            'Join S3 data with Redshift tables',
            'No data loading required',
            'Scales compute independently from Redshift cluster',
            'Uses Glue Data Catalog for external table metadata'
        ]
    },
    {
        id: 'redshift-3',
        category: 'analytics',
        service: 'Amazon Redshift Serverless',
        question: 'A company needs data warehouse capabilities for unpredictable analytical workloads without managing clusters or paying for idle resources. Which option should they choose?',
        answer: 'Amazon Redshift Serverless',
        details: [
            'No cluster management required',
            'Auto-scales compute based on workload',
            'Pay only for actual compute usage',
            'Same SQL and features as provisioned Redshift',
            'Ideal for variable or unknown capacity needs'
        ]
    }
];
