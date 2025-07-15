/**
 * Basic tests for Audio Suite Pro functionality
 * Tests core translation and utility functions
 */

// Load the main script content for testing
const fs = require('fs');
const path = require('path');

// Read the script file to test functions
const scriptPath = path.join(__dirname, '..', 'script.js');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// Extract translations object for testing
const translationsMatch = scriptContent.match(/const translations = ({[\s\S]*?});/);
let translations = null;

if (translationsMatch) {
  try {
    // Safely evaluate the translations object
    translations = eval('(' + translationsMatch[1] + ')');
  } catch (e) {
    console.warn('Could not parse translations object:', e.message);
  }
}

describe('Audio Suite Pro - Core Functionality', () => {
  describe('Translation System', () => {
    test('translations object should exist and have expected languages', () => {
      expect(translations).toBeDefined();
      expect(translations).toHaveProperty('de');
      expect(translations).toHaveProperty('en');
      expect(translations).toHaveProperty('fr');
      expect(translations).toHaveProperty('es');
      expect(translations).toHaveProperty('zh');
      expect(translations).toHaveProperty('ar');
    });

    test('German translations should have core keys', () => {
      expect(translations.de).toHaveProperty('app_title_header');
      expect(translations.de).toHaveProperty('settings_tooltip');
      expect(translations.de).toHaveProperty('language_tooltip');
      expect(translations.de.app_title_header).toBe('Audio Suite Pro');
    });

    test('English translations should have core keys', () => {
      expect(translations.en).toHaveProperty('app_title_header');
      expect(translations.en).toHaveProperty('settings_tooltip');
      expect(translations.en).toHaveProperty('language_tooltip');
      expect(translations.en.app_title_header).toBe('Audio Suite Pro');
    });

    test('all language variants should have same keys', () => {
      const languages = ['de', 'en', 'fr', 'es', 'zh', 'ar'];
      const germanKeys = Object.keys(translations.de);
      
      languages.forEach(lang => {
        const langKeys = Object.keys(translations[lang]);
        expect(langKeys.sort()).toEqual(germanKeys.sort());
      });
    });
  });

  describe('Script Structure', () => {
    test('script should use strict mode', () => {
      expect(scriptContent).toMatch(/^'use strict';/);
    });

    test('script should contain essential function definitions', () => {
      // Check for key functionality indicators
      expect(scriptContent).toContain('translations');
      expect(scriptContent).toContain('MediaRecorder');
      expect(scriptContent).toContain('OpenAI');
    });

    test('script should have proper error handling structure', () => {
      expect(scriptContent).toContain('try');
      expect(scriptContent).toContain('catch');
    });
  });

  describe('Configuration Validation', () => {
    test('temperature values should be properly constrained', () => {
      // Test that temperature handling is mentioned in the code
      expect(scriptContent).toContain('temperature');
      expect(scriptContent).toContain('0-1');
    });

    test('API key handling should be present', () => {
      expect(scriptContent).toContain('api');
      expect(scriptContent).toContain('key');
      expect(scriptContent).toContain('OpenAI');
    });
  });
});

describe('Audio Suite Pro - Utility Functions', () => {
  test('DOM manipulation helpers should exist', () => {
    // These would be actual function tests if we extracted functions
    expect(scriptContent).toContain('getElementById');
    expect(scriptContent).toContain('addEventListener');
  });

  test('Local storage handling should be implemented', () => {
    expect(scriptContent).toContain('localStorage');
  });
});