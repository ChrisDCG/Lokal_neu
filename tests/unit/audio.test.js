/**
 * Unit tests for audio processing functionality
 */

describe('Audio Processing', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
  });

  test('should initialize MediaRecorder correctly', () => {
    const mockStream = {
      getTracks: () => [{ stop: jest.fn() }]
    };

    const recorder = new MediaRecorder(mockStream);
    
    expect(MediaRecorder).toHaveBeenCalledWith(mockStream);
    expect(recorder).toBeDefined();
  });

  test('should handle getUserMedia success', async () => {
    const mockStream = {
      getTracks: () => [{ stop: jest.fn() }]
    };

    navigator.mediaDevices.getUserMedia.mockResolvedValue(mockStream);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    expect(navigator.mediaDevices.getUserMedia).toHaveBeenCalledWith({ audio: true });
    expect(stream).toBe(mockStream);
  });

  test('should handle getUserMedia failure', async () => {
    const mockError = new Error('Microphone access denied');
    navigator.mediaDevices.getUserMedia.mockRejectedValue(mockError);

    await expect(navigator.mediaDevices.getUserMedia({ audio: true }))
      .rejects.toThrow('Microphone access denied');
  });

  test('should create AudioContext successfully', () => {
    const context = new AudioContext();
    
    expect(AudioContext).toHaveBeenCalled();
    expect(context).toBeDefined();
    expect(context.createAnalyser).toBeDefined();
    expect(context.createMediaStreamSource).toBeDefined();
  });

  test('should handle audio blob creation', () => {
    const mockChunks = [
      new Blob(['chunk1'], { type: 'audio/webm' }),
      new Blob(['chunk2'], { type: 'audio/webm' })
    ];

    const audioBlob = new Blob(mockChunks, { type: 'audio/webm' });
    
    expect(audioBlob).toBeInstanceOf(Blob);
    expect(audioBlob.type).toBe('audio/webm');
  });

  test('should validate audio blob before processing', () => {
    const validateAudioBlob = (blob) => {
      if (!blob || blob.size === 0) {
        return false;
      }
      return true;
    };

    const validBlob = new Blob(['audio data'], { type: 'audio/webm' });
    const emptyBlob = new Blob([], { type: 'audio/webm' });

    expect(validateAudioBlob(validBlob)).toBe(true);
    expect(validateAudioBlob(emptyBlob)).toBe(false);
    expect(validateAudioBlob(null)).toBe(false);
  });
});