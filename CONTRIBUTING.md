# Contributing to Audio Suite Pro

Thank you for your interest in contributing to Audio Suite Pro! We welcome contributions from developers of all skill levels.

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Modern web browser
- Git
- OpenAI API key for testing (optional)

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Lokal_neu.git
   cd Lokal_neu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Run tests**
   ```bash
   npm test
   ```

## 📋 How to Contribute

### 1. Reporting Bugs

Before submitting a bug report:
- Check if the issue already exists in [GitHub Issues](https://github.com/ChrisDCG/Lokal_neu/issues)
- Test with the latest version
- Verify the issue isn't related to browser compatibility

**Bug Report Template:**
- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: Browser, OS, version information
- **Screenshots**: If applicable

### 2. Suggesting Features

We love feature suggestions! Please:
- Check existing [issues](https://github.com/ChrisDCG/Lokal_neu/issues) and [discussions](https://github.com/ChrisDCG/Lokal_neu/discussions)
- Provide a clear use case
- Explain the expected behavior
- Consider the impact on existing functionality

### 3. Code Contributions

#### Branch Naming Convention
- `feature/feature-name` - For new features
- `bugfix/issue-description` - For bug fixes
- `docs/update-description` - For documentation updates
- `refactor/component-name` - For code refactoring

#### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow coding standards (see below)
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint          # Check code style
   npm run lint:css      # Check CSS style
   npm test              # Run tests
   npm run test:coverage # Check test coverage
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create a Pull Request**
   - Use the PR template
   - Link related issues
   - Provide clear description of changes
   - Add screenshots for UI changes

## 📝 Coding Standards

### JavaScript

- Use ES6+ features
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Prefer `const` and `let` over `var`
- Use arrow functions where appropriate

**Example:**
```javascript
/**
 * Transcribes audio using OpenAI Whisper API
 * @param {Blob} audioBlob - The audio data to transcribe
 * @param {string} language - Source language code (optional)
 * @returns {Promise<string>} The transcribed text
 */
async function transcribeAudio(audioBlob, language = 'auto') {
  // Implementation here
}
```

### CSS

- Follow [BEM methodology](http://getbem.com/) for class naming
- Use CSS custom properties for theming
- Mobile-first responsive design
- Consistent spacing using rem/em units
- Use semantic color names in variables

**Example:**
```css
/* Good */
.transcription-panel {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
}

.transcription-panel__header {
  color: var(--text-primary);
  font-size: var(--font-size-lg);
}
```

### HTML

- Use semantic HTML5 elements
- Add appropriate ARIA labels for accessibility
- Include `lang` attributes for internationalization
- Use meaningful `id` and `class` names

## 🧪 Testing Guidelines

### Unit Tests
- Test individual functions and components
- Use Jest for JavaScript testing
- Aim for >90% code coverage
- Mock external APIs (OpenAI)

### Integration Tests
- Test user workflows end-to-end
- Use Playwright for browser automation
- Test across different browsers
- Include accessibility testing

### Manual Testing Checklist
- [ ] Audio recording functionality
- [ ] File upload and processing
- [ ] All transcription options work
- [ ] Text processing features (refine, translate, summarize)
- [ ] History management
- [ ] Theme switching
- [ ] Language switching
- [ ] Responsive design on mobile
- [ ] Keyboard accessibility

## 🌍 Internationalization

When adding new text:

1. **Add translation keys** to `translations` object in `script.js`
2. **Use translation function** instead of hardcoded strings
3. **Test in all supported languages**
4. **Consider text length variations** for UI layout

**Example:**
```javascript
// Add to translations object
const translations = {
  en: {
    new_feature_title: "Amazing New Feature"
  },
  de: {
    new_feature_title: "Erstaunliche neue Funktion"
  }
  // ... other languages
};

// Use in code
const title = translateKey('new_feature_title');
```

## 🎨 Design Guidelines

### UI/UX Principles
- **Accessibility First**: Follow WCAG 2.1 AA guidelines
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Mobile-First**: Design for mobile, enhance for desktop
- **Consistent Patterns**: Reuse existing UI components and patterns

### Visual Design
- **Color Scheme**: Use existing CSS custom properties
- **Typography**: Follow established font hierarchy
- **Spacing**: Use consistent spacing variables
- **Icons**: Use Font Awesome icons when possible

## 🔍 Code Review Process

All contributions go through code review:

### What Reviewers Look For
- Code quality and maintainability
- Test coverage
- Documentation updates
- Performance implications
- Security considerations
- Accessibility compliance
- Browser compatibility

### Review Timeline
- Initial review: Within 2-3 business days
- Follow-up reviews: Within 1 business day
- Merging: After approval from at least one maintainer

## 📚 Development Resources

### Useful Documentation
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)

### Tools and Libraries Used
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Jest**: JavaScript testing framework
- **ESLint**: JavaScript linting
- **Stylelint**: CSS linting
- **Playwright**: End-to-end testing

## 🏷️ Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```bash
feat(transcription): add speaker recognition support
fix(ui): resolve mobile layout issues in history panel
docs: update API integration guide
test(audio): add unit tests for audio processing
```

## 🎯 Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- No harassment or discrimination
- Respect different opinions and approaches

### Communication
- Use clear, descriptive titles for issues and PRs
- Provide context and examples
- Be patient with response times
- Ask questions if something is unclear

## 📞 Getting Help

- **Questions**: Use [GitHub Discussions](https://github.com/ChrisDCG/Lokal_neu/discussions)
- **Bugs**: Create an [issue](https://github.com/ChrisDCG/Lokal_neu/issues)
- **Chat**: Join our community discussions

## 🙏 Recognition

Contributors are recognized in:
- README.md contributors section
- Release notes for significant contributions
- Annual contributor highlights

Thank you for helping make Audio Suite Pro better! 🎉