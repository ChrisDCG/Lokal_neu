# API Integration Guide

This guide explains how Audio Suite Pro integrates with OpenAI's APIs for transcription and text processing.

## OpenAI API Integration

### Required API Key

To use Audio Suite Pro, you'll need an OpenAI API key:

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new secret key
3. Copy the key (starts with `sk-`)
4. Enter it in Audio Suite Pro settings

### API Endpoints Used

#### 1. Whisper API (Audio Transcription)
- **Endpoint**: `https://api.openai.com/v1/audio/transcriptions`
- **Model**: `whisper-1`
- **Purpose**: Convert audio to text
- **Supported formats**: mp3, mp4, mpeg, mpga, m4a, wav, webm

**Parameters:**
- `file`: Audio file (max 25MB)
- `model`: Always `whisper-1`
- `language`: ISO 639-1 language code (optional)
- `prompt`: Context to improve accuracy (optional)
- `temperature`: Sampling temperature 0-1 (default: 0)

#### 2. Chat Completions API (Text Processing)
- **Endpoint**: `https://api.openai.com/v1/chat/completions`
- **Models**: `gpt-3.5-turbo`, `gpt-4-turbo-preview`
- **Purpose**: Text refinement, summarization, translation

**Use Cases:**
- Text refinement and grammar correction
- Document summarization
- Multi-language translation
- Time tracking formatting (legal professionals)

### Security Considerations

- API keys are stored locally in browser localStorage
- No data is sent to third parties except OpenAI
- All audio processing happens client-side before API calls
- Use HTTPS in production for secure communication

### Rate Limits and Costs

- Whisper API: $0.006 per minute of audio
- Chat Completions: Varies by model (~$0.002-0.06 per 1K tokens)
- Rate limits apply based on your OpenAI plan
- See [OpenAI Pricing](https://openai.com/pricing) for current rates

### Error Handling

The application handles common API errors:
- Invalid API key
- Rate limit exceeded
- Network connectivity issues
- Audio file format/size errors
- Quota exceeded

### Advanced Configuration

#### Custom Vocabulary
Add domain-specific terms to improve transcription accuracy:
- Legal terminology
- Medical terms
- Company names
- Technical jargon

#### Temperature Settings
Control transcription creativity:
- `0.0`: Most deterministic, focused
- `0.5`: Balanced
- `1.0`: Most creative, variable

#### Context Prompts
Provide context for better accuracy:
- "Legal dictation with Latin terms"
- "Medical consultation notes"
- "Technical meeting discussion"

## Alternative API Providers

Future versions will support:
- Azure Cognitive Services
- Google Cloud Speech-to-Text
- Amazon Transcribe
- Local AI models via WebAssembly

## Development

### Testing API Integration

Use the provided test files to verify API functionality:

```javascript
// Mock API responses for testing
const mockTranscriptionResponse = {
  text: "This is a test transcription."
};

const mockChatResponse = {
  choices: [
    {
      message: {
        content: "This is a refined text response."
      }
    }
  ]
};
```

### API Call Implementation

The main API functions are:
- `transcribeAudioOpenAI()`: Handles Whisper API calls
- `callOpenAIChatAPI()`: Handles Chat Completions API calls

See `src/js/script.js` for implementation details.