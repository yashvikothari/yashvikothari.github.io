/**
 * AWS Container Services Flashcards
 */
window.containersCards = [
    {
        id: 'ecr-1', category: 'containers', service: 'Amazon ECR',
        question: 'A company needs a private container registry to store Docker images with vulnerability scanning. Which AWS service provides this?',
        answer: 'Amazon ECR (Elastic Container Registry)',
        details: ['Fully managed Docker registry', 'Image vulnerability scanning', 'Encryption at rest with KMS', 'IAM-based access control', 'Works with ECS, EKS, Lambda']
    },
    {
        id: 'ecs-1', category: 'containers', service: 'Amazon ECS',
        question: 'A company wants to run containerized applications on AWS without managing Kubernetes. They need integration with ALB and IAM. Which service should they use?',
        answer: 'Amazon ECS (Elastic Container Service)',
        details: ['AWS-native container orchestration', 'Deep AWS integrations', 'Run on EC2 or Fargate', 'Task definitions for containers', 'Service auto-scaling']
    },
    {
        id: 'ecs-2', category: 'containers', service: 'Amazon ECS',
        question: 'A company runs ECS tasks and wants to assign different IAM permissions to different tasks running on the same EC2 instance. How can they achieve this?',
        answer: 'ECS Task IAM Roles',
        details: ['Fine-grained permissions per task', 'Different roles for different tasks', 'Better security than EC2 instance role', 'Credentials managed by ECS agent']
    },
    {
        id: 'eks-1', category: 'containers', service: 'Amazon EKS',
        question: 'A company wants to run Kubernetes workloads with minimal operational overhead. They need managed control plane and automatic upgrades. Which service should they use?',
        answer: 'Amazon EKS (Elastic Kubernetes Service)',
        details: ['Managed Kubernetes control plane', 'Runs across multiple AZs', 'Automatic control plane upgrades', 'Works with EC2, Fargate, or Outposts']
    },
    {
        id: 'eks-2', category: 'containers', service: 'Amazon EKS',
        question: 'A company wants to run Kubernetes pods without managing EC2 nodes. They want serverless Kubernetes compute. Which option should they use?',
        answer: 'EKS with Fargate',
        details: ['Serverless Kubernetes compute', 'No node management required', 'Pay per pod resources', 'Right-sized compute per pod']
    },
    {
        id: 'fargate-1', category: 'containers', service: 'AWS Fargate',
        question: 'A company wants to run containers without provisioning or managing EC2 instances. They want to define CPU and memory per task. Which compute option provides this?',
        answer: 'AWS Fargate',
        details: ['Serverless compute for containers', 'Works with ECS and EKS', 'Define CPU/memory per task', 'No cluster capacity planning', 'Per-second billing']
    },
    {
        id: 'ecsanywhere-1', category: 'containers', service: 'ECS Anywhere',
        question: 'A company wants to use Amazon ECS to manage containers running on their on-premises servers. Which feature enables this?',
        answer: 'Amazon ECS Anywhere',
        details: ['Run ECS tasks on-premises', 'Same ECS APIs and tools', 'Centralized management from AWS', 'Works with any external infrastructure']
    },
    {
        id: 'eksanywhere-1', category: 'containers', service: 'EKS Anywhere',
        question: 'A company wants to run Kubernetes on-premises using the same EKS distribution and tooling. Which option provides this?',
        answer: 'Amazon EKS Anywhere',
        details: ['EKS-based Kubernetes on-premises', 'Consistent tooling across environments', 'Works on VMware or bare metal', 'Optional AWS support subscription']
    }
];
