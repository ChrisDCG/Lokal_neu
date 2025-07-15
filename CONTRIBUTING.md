# Contributing to Audio Suite Pro

Thank you for your interest in contributing to Audio Suite Pro! We welcome contributions from the community and are pleased to have you aboard.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Set up the development environment**
4. **Create a branch** for your feature or bugfix
5. **Make your changes**
6. **Test your changes**
7. **Submit a pull request**

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues as you might find that the issue has already been reported. When creating a bug report, please include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, etc.)

Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Features

Feature requests are welcome! Please use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- A clear description of the feature
- The problem it solves
- Possible implementation approaches
- Use cases and examples

### Code Contributions

1. **Pick an issue** from our issue tracker or create a new one
2. **Comment on the issue** to let others know you're working on it
3. **Follow our development setup** instructions below
4. **Make your changes** following our coding standards
5. **Write tests** for your changes
6. **Submit a pull request**

## Development Setup

### Prerequisites

- Node.js (16.x or higher)
- npm (8.x or higher)
- Modern web browser
- Git

### Local Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Lokal_neu.git
cd Lokal_neu

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:8000
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run lint:css     # Run Stylelint
npm run lint:css:fix # Fix Stylelint issues
npm run validate     # Run all linting and tests
```

## Coding Standards

### JavaScript

- Use ES6+ features
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Prefer `const` over `let`, avoid `var`
- Use semicolons
- Maximum line length: 120 characters

```javascript
/**
 * Processes audio file for transcription
 * @param {File} audioFile - The audio file to process
 * @param {Object} options - Processing options
 * @returns {Promise<string>} Transcribed text
 */
const processAudioFile = async (audioFile, options = {}) => {
  // Implementation
};
```

### CSS

- Follow Stylelint configuration
- Use meaningful class names
- Prefer CSS custom properties for theming
- Use consistent indentation (2 spaces)
- Group related properties together

```css
.audio-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  padding: 1rem;
  background-color: var(--bg-primary);
  border-radius: 0.5rem;
}
```

### HTML

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure accessibility compliance
- Use meaningful IDs and classes
- Include proper meta tags

## Testing

### Writing Tests

- Write tests for all new functionality
- Use descriptive test names
- Follow the AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Aim for high test coverage

```javascript
describe('AudioManager', () => {
  test('should start recording when startRecording is called', async () => {
    // Arrange
    const audioManager = new AudioManager();
    
    // Act
    await audioManager.startRecording();
    
    // Assert
    expect(audioManager.isRecording).toBe(true);
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass** locally
4. **Run linting** and fix any issues
5. **Update the README.md** if needed
6. **Create a pull request** with:
   - Clear title and description
   - Reference to related issues
   - Screenshots for UI changes
   - Testing instructions

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] No new warnings introduced

## Issue Reporting

### Before Submitting

1. **Search existing issues** to avoid duplicates
2. **Check the FAQ** and documentation
3. **Try the latest version** if possible

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested

## Development Guidelines

### Git Workflow

1. Create feature branches from `main`
2. Use descriptive commit messages
3. Keep commits focused and atomic
4. Rebase before submitting PR if needed

### Commit Messages

```
type: subject line (max 50 characters)

Body explaining what and why (wrap at 72 characters)

Fixes #123
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Branch Naming

- `feature/description-of-feature`
- `bugfix/description-of-bug`
- `hotfix/critical-issue`
- `docs/update-readme`

## Getting Help

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: For bug reports and feature requests
- **Documentation**: Check the README and inline docs
- **Community**: Join our community discussions

## Recognition

Contributors will be recognized in:
- `CONTRIBUTORS.md` file
- Release notes for significant contributions
- GitHub contributors list

Thank you for contributing to Audio Suite Pro! 🎉