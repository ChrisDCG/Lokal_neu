// Test setup file for Jest
// This file runs before each test to set up the environment

// Mock global objects that are available in browsers but not in Jest
global.MediaRecorder = jest.fn().mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  state: 'inactive'
}));

global.navigator.mediaDevices = {
  getUserMedia: jest.fn().mockResolvedValue({
    getTracks: () => [{ stop: jest.fn() }]
  })
};

global.AudioContext = jest.fn().mockImplementation(() => ({
  createAnalyser: jest.fn(),
  createMediaStreamSource: jest.fn(),
  close: jest.fn().mockResolvedValue(),
  state: 'running'
}));

global.webkitAudioContext = global.AudioContext;

global.speechSynthesis = {
  speak: jest.fn(),
  cancel: jest.fn(),
  getVoices: jest.fn().mockReturnValue([])
};

global.SpeechSynthesisUtterance = jest.fn();

// Mock IndexedDB
global.indexedDB = {
  open: jest.fn().mockImplementation(() => ({
    onsuccess: null,
    onerror: null,
    onupgradeneeded: null,
    result: {
      transaction: jest.fn().mockReturnValue({
        objectStore: jest.fn().mockReturnValue({
          add: jest.fn(),
          get: jest.fn(),
          getAll: jest.fn(),
          delete: jest.fn()
        })
      })
    }
  }))
};

// Mock fetch for API calls
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
});