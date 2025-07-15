# Contributing to Audio Suite Pro

First off, thank you for considering contributing to Audio Suite Pro! 🎉

It's people like you that make Audio Suite Pro such a great tool for audio transcription and text processing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (version 8 or higher)
- **Git**
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/Lokal_neu.git
   cd Lokal_neu
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Open your browser** and navigate to `http://localhost:8080`

### Testing Your Setup

Run the test suite to ensure everything is working:
```bash
npm test
```

Run the linter to check code style:
```bash
npm run lint
```

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues to see if the problem has already been reported. When you create a bug report, please include as many details as possible:

- Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Provide a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Include screenshots if applicable
- Mention your browser and operating system

### 💡 Suggesting Enhancements

Enhancement suggestions are welcome! Please use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- A clear and descriptive title
- A detailed description of the proposed enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if possible

### 🔧 Code Contributions

#### Types of Contributions We Welcome

- **Bug fixes** - Help us squash those pesky bugs
- **New features** - Add functionality that enhances the user experience
- **Performance improvements** - Make the app faster and more efficient
- **Documentation** - Improve or add to our documentation
- **Translations** - Help us support more languages
- **Tests** - Improve our test coverage
- **UI/UX improvements** - Make the interface more intuitive and beautiful

#### Pull Request Process

1. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our [style guidelines](#style-guidelines)

3. **Add tests** for your changes (if applicable)

4. **Run the test suite**:
   ```bash
   npm test
   npm run lint
   npm run format:check
   ```

5. **Commit your changes** with a clear commit message:
   ```bash
   git commit -m "Add feature: brief description of what you added"
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** using our [PR template](.github/pull_request_template.md)

## Development Process

### Branch Naming Convention

- `feature/feature-name` - For new features
- `bugfix/issue-description` - For bug fixes
- `docs/documentation-update` - For documentation changes
- `refactor/code-improvement` - For code refactoring
- `test/test-improvement` - For test-related changes

### Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat` - A new feature
- `fix` - A bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Examples:**
```
feat(transcription): add support for custom vocabulary
fix(ui): resolve theme toggle not persisting
docs(readme): update installation instructions
```

## Style Guidelines

### JavaScript Style Guide

We use ESLint and Prettier to maintain consistent code style:

- **Indentation:** 2 spaces (no tabs)
- **Quotes:** Single quotes for strings
- **Semicolons:** Always use semicolons
- **Line Length:** Maximum 100 characters
- **Naming:** camelCase for variables and functions, PascalCase for classes

### CSS Style Guide

- Use **Tailwind CSS** classes when possible
- Custom CSS should be minimal and well-documented
- Follow **BEM methodology** for custom CSS classes
- Use **semantic class names**

### HTML Guidelines

- Use **semantic HTML5** elements
- Include **accessibility attributes** (ARIA labels, alt text, etc.)
- Keep the **structure clean** and well-indented
- Use **meaningful IDs and classes**

### Code Documentation

- Add **JSDoc comments** for all functions
- Include **inline comments** for complex logic
- Update **README.md** for significant changes
- Document **API changes** in the appropriate files

## Translation Contributions

We welcome translations to make Audio Suite Pro accessible to more users:

1. **Check existing translations** in `script.js` (look for the `translations` object)
2. **Add your language** following the existing pattern
3. **Test your translation** thoroughly
4. **Submit a PR** with your translation

### Translation Guidelines

- Keep translations **concise** but **clear**
- Maintain **consistent terminology**
- Consider **cultural context**
- Test with **different text lengths**

## Testing Guidelines

### Writing Tests

- Write tests for **new features** and **bug fixes**
- Aim for **high test coverage** (80%+)
- Use **descriptive test names**
- Test **edge cases** and **error conditions**

### Test Types

- **Unit tests** - Test individual functions
- **Integration tests** - Test component interactions
- **End-to-end tests** - Test complete user workflows

## Community

### Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Discussions** - For questions and general discussion
- **Code Reviews** - Learn from feedback on your PRs

### Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **GitHub contributors** page

## Release Process

1. **Maintainers review** all PRs
2. **Automated tests** must pass
3. **Code review** approval required
4. **Merge** to main branch
5. **Automated deployment** to GitHub Pages

## Questions?

Don't hesitate to ask questions! You can:
- Open an issue with the [question template](.github/ISSUE_TEMPLATE/question.md)
- Start a discussion in the GitHub Discussions tab
- Reach out to the maintainers

---

**Thank you for contributing to Audio Suite Pro!** 🙏

Every contribution, no matter how small, helps make this project better for everyone.