/**
 * AWS Machine Learning Flashcards
 */
window.machineLearningCards = [
    {
        id: 'sagemaker-1', category: 'machine-learning', service: 'Amazon SageMaker',
        question: 'A company needs an end-to-end platform to build, train, and deploy ML models with managed infrastructure. Which service provides this?',
        answer: 'Amazon SageMaker',
        details: ['End-to-end ML platform', 'Built-in algorithms and notebooks', 'Managed training and inference', 'MLOps with pipelines and model registry', 'SageMaker Studio IDE']
    },
    {
        id: 'sagemaker-2', category: 'machine-learning', service: 'SageMaker Inference',
        question: 'A company needs to deploy an ML model for real-time predictions with auto-scaling. Which SageMaker feature should they use?',
        answer: 'SageMaker Real-Time Inference Endpoints',
        details: ['Low-latency predictions', 'Auto-scaling based on traffic', 'A/B testing with production variants', 'Multi-model endpoints', 'Serverless inference option']
    },
    {
        id: 'comprehend-1', category: 'machine-learning', service: 'Amazon Comprehend',
        question: 'A company needs to analyze customer reviews to extract sentiment and key phrases without building ML models. Which service should they use?',
        answer: 'Amazon Comprehend',
        details: ['NLP service for text analysis', 'Sentiment, entities, key phrases', 'Language detection', 'Custom entity recognition', 'No ML expertise required']
    },
    {
        id: 'forecast-1', category: 'machine-learning', service: 'Amazon Forecast',
        question: 'A retail company needs to predict product demand using historical sales data without ML expertise. Which service should they use?',
        answer: 'Amazon Forecast',
        details: ['Time-series forecasting service', 'Uses ML automatically', 'Import historical data', 'Generate accurate forecasts', 'No ML expertise required']
    },
    {
        id: 'fraud-1', category: 'machine-learning', service: 'Amazon Fraud Detector',
        question: 'An e-commerce company needs to detect fraudulent transactions in real-time using ML. Which service provides this capability?',
        answer: 'Amazon Fraud Detector',
        details: ['ML-based fraud detection', 'Real-time predictions', 'Uses your historical data', 'Pre-built fraud detection models', 'Customizable rules and thresholds']
    },
    {
        id: 'kendra-1', category: 'machine-learning', service: 'Amazon Kendra',
        question: 'A company wants to build an intelligent search over internal documents using natural language queries. Which service provides this?',
        answer: 'Amazon Kendra',
        details: ['Intelligent enterprise search', 'Natural language queries', 'Connects to S3, SharePoint, databases', 'ML-powered relevance ranking', 'FAQ extraction']
    },
    {
        id: 'lex-1', category: 'machine-learning', service: 'Amazon Lex',
        question: 'A company wants to build a conversational chatbot for customer service that understands natural language. Which service should they use?',
        answer: 'Amazon Lex',
        details: ['Build conversational interfaces', 'Same tech as Alexa', 'Speech and text input', 'Intent recognition and slot filling', 'Integrates with Lambda and Connect']
    },
    {
        id: 'polly-1', category: 'machine-learning', service: 'Amazon Polly',
        question: 'A company needs to convert text to natural-sounding speech for their mobile app. Which service provides text-to-speech?',
        answer: 'Amazon Polly',
        details: ['Text-to-speech service', 'Lifelike voices', 'Multiple languages', 'Neural TTS for natural sound', 'SSML for speech control']
    },
    {
        id: 'rekognition-1', category: 'machine-learning', service: 'Amazon Rekognition',
        question: 'A company needs to detect faces and objects in images and videos without building custom ML models. Which service should they use?',
        answer: 'Amazon Rekognition',
        details: ['Computer vision service', 'Face detection and comparison', 'Object and scene detection', 'Content moderation', 'Celebrity recognition', 'Text in images']
    },
    {
        id: 'textract-1', category: 'machine-learning', service: 'Amazon Textract',
        question: 'A company needs to extract text, tables, and forms from scanned documents automatically. Which service should they use?',
        answer: 'Amazon Textract',
        details: ['OCR beyond simple text extraction', 'Extracts tables and forms', 'Understands document structure', 'Works with PDFs and images', 'No templates needed']
    },
    {
        id: 'transcribe-1', category: 'machine-learning', service: 'Amazon Transcribe',
        question: 'A company needs to convert call center recordings to text with speaker identification. Which service should they use?',
        answer: 'Amazon Transcribe',
        details: ['Speech-to-text service', 'Speaker diarization', 'Custom vocabularies', 'Real-time and batch', 'Redaction of sensitive data']
    },
    {
        id: 'translate-1', category: 'machine-learning', service: 'Amazon Translate',
        question: 'A company needs real-time translation of content between multiple languages for their global platform. Which service provides this?',
        answer: 'Amazon Translate',
        details: ['Neural machine translation', '75+ language pairs', 'Real-time and batch', 'Custom terminology', 'Active Custom Translation for domain-specific']
    }
];
