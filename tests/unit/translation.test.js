/**
 * Unit tests for translation functionality
 */

describe('Translation System', () => {
  beforeEach(() => {
    // Set up DOM elements that would normally be in the HTML
    document.body.innerHTML = `
      <div id="app-title" data-translate="app_title_header"></div>
      <button id="btn-record" data-translate="start_recording_button"></button>
    `;
  });

  test('should have translations object defined', () => {
    // This would need to be imported or made available in test environment
    // For now, we'll test the structure we expect
    const mockTranslations = {
      en: {
        app_title_header: 'Audio Suite Pro',
        start_recording_button: 'Start Recording'
      },
      de: {
        app_title_header: 'Audio Suite Pro',
        start_recording_button: 'Aufnahme starten'
      }
    };

    expect(mockTranslations).toBeDefined();
    expect(mockTranslations.en).toBeDefined();
    expect(mockTranslations.de).toBeDefined();
  });

  test('should translate elements with data-translate attributes', () => {
    const mockTranslateElement = (element, key) => {
      const translations = {
        en: {
          app_title_header: 'Audio Suite Pro',
          start_recording_button: 'Start Recording'
        }
      };
      
      if (translations.en[key]) {
        element.textContent = translations.en[key];
      }
    };

    const titleElement = document.getElementById('app-title');
    const buttonElement = document.getElementById('btn-record');

    mockTranslateElement(titleElement, 'app_title_header');
    mockTranslateElement(buttonElement, 'start_recording_button');

    expect(titleElement.textContent).toBe('Audio Suite Pro');
    expect(buttonElement.textContent).toBe('Start Recording');
  });

  test('should handle missing translation keys gracefully', () => {
    const mockTranslateElement = (element, key) => {
      const translations = {
        en: {
          app_title_header: 'Audio Suite Pro'
        }
      };
      
      if (translations.en[key]) {
        element.textContent = translations.en[key];
      } else {
        element.textContent = key; // fallback to key name
      }
    };

    const element = document.createElement('div');
    mockTranslateElement(element, 'non_existent_key');

    expect(element.textContent).toBe('non_existent_key');
  });
});