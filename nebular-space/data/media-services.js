/**
 * AWS Media Services Flashcards
 */
window.mediaServicesCards = [
    {
        id: 'transcoder-1', category: 'media-services', service: 'Amazon Elastic Transcoder',
        question: 'A company needs to convert video files to multiple formats for playback on different devices. They want a simple, scalable solution. Which service should they use?',
        answer: 'Amazon Elastic Transcoder',
        details: ['Media transcoding service', 'Convert to various formats', 'Preset templates for devices', 'Scalable and pay-per-minute', 'S3 input and output']
    },
    {
        id: 'kvs-1', category: 'media-services', service: 'Kinesis Video Streams',
        question: 'A company needs to stream video from IoT cameras for real-time processing and storage. Which service should they use?',
        answer: 'Amazon Kinesis Video Streams',
        details: ['Stream video from devices', 'Real-time and batch processing', 'Integration with Rekognition Video', 'Playback with HLS', 'Durable storage']
    }
];
