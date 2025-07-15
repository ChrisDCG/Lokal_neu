# 🎧 Audio Suite Pro

[![CI/CD Pipeline](https://github.com/ChrisDCG/Lokal_neu/actions/workflows/ci.yml/badge.svg)](https://github.com/ChrisDCG/Lokal_neu/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/ChrisDCG/Lokal_neu/actions/workflows/deploy.yml/badge.svg)](https://github.com/ChrisDCG/Lokal_neu/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A modern, feature-rich web application for audio transcription and text processing, powered by OpenAI's advanced speech recognition technology.

## ✨ Features

### 🎙️ Audio Recording & Transcription
- **Real-time audio recording** with visual feedback
- **High-quality transcription** using OpenAI Whisper API
- **Multi-language support** (German, English, French, Spanish, Chinese, Arabic)
- **Speaker recognition** for multi-speaker conversations
- **Continuous transcription** mode for long recordings

### 🔧 Advanced Text Processing
- **AI-powered text refinement** for improved readability
- **Automatic summarization** of transcribed content
- **Multi-language translation** with 14+ supported languages
- **Text-to-speech** functionality for playback
- **Custom vocabulary** management for domain-specific terms

### 🎨 User Experience
- **Modern, responsive design** that works on all devices
- **Dark/Light theme** toggle for comfortable usage
- **Intuitive interface** with keyboard shortcuts (F5 for recording)
- **Real-time audio level visualization**
- **Comprehensive settings** panel for customization

### 💾 Data Management
- **Local audio archiving** for session management
- **Export capabilities** (TXT format)
- **Email integration** for easy sharing
- **Local storage** for user preferences and vocabulary

## 🚀 Quick Start

### Online Demo
Visit our [live demo](https://chrisdcg.github.io/Lokal_neu/) to try Audio Suite Pro immediately.

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ChrisDCG/Lokal_neu.git
   cd Lokal_neu
   ```

2. **Install dependencies** (for development)
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:8080`
   - Or simply open `index.html` in your web browser

### Windows Quick Launch
For Windows users, you can use the included batch file:
```bash
AudioSuitePro_Firefox_Offline.bat
```

## ⚙️ Configuration

### OpenAI API Setup
1. Sign up for an [OpenAI API account](https://platform.openai.com/signup)
2. Generate an API key from your OpenAI dashboard
3. Open Audio Suite Pro and click the settings icon (⚙️)
4. Enter your API key in the settings modal
5. Save the configuration

### Supported Audio Formats
- WAV, MP3, M4A, WebM, and other browser-supported formats
- Optimal quality: 16kHz, 16-bit, mono WAV files
- Maximum file size: Depends on OpenAI API limits

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm 8+
- Modern web browser with MediaRecorder API support

### Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm test

# Watch mode for tests
npm run test:watch

# Build for production
npm run build
```

### Project Structure
```
Audio-Suite-Pro/
├── .github/              # GitHub configuration
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   └── workflows/         # GitHub Actions
├── docs/                  # Documentation
├── tests/                 # Test files
├── assets/               # Static assets
├── index.html            # Main application file
├── script.js             # Core JavaScript functionality
├── style.css             # Stylesheet
├── package.json          # Node.js configuration
└── README.md            # This file
```

## 🧪 Testing

We use Jest for unit testing with JSDOM for browser environment simulation.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm test -- --coverage
```

## 🌍 Internationalization

Audio Suite Pro supports multiple languages:
- 🇩🇪 **German (Deutsch)** - Native language
- 🇺🇸 **English** - Full support
- 🇫🇷 **French (Français)** - Full support
- 🇪🇸 **Spanish (Español)** - Full support
- 🇨🇳 **Chinese (中文)** - Full support
- 🇸🇦 **Arabic (العربية)** - Full support

Translation contributions are welcome! See our [Contributing Guide](CONTRIBUTING.md).

## 📚 Documentation

- [API Documentation](docs/api.md)
- [User Guide](docs/user-guide.md)
- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

- **Bug Reports:** [Create a bug report](https://github.com/ChrisDCG/Lokal_neu/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a feature](https://github.com/ChrisDCG/Lokal_neu/issues/new?template=feature_request.md)
- **Questions:** [Ask a question](https://github.com/ChrisDCG/Lokal_neu/issues/new?template=question.md)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing the powerful Whisper API
- **Tailwind CSS** for the utility-first CSS framework
- **Font Awesome** for the beautiful icons
- **The open-source community** for inspiration and contributions

## 📊 Project Status

- ✅ **Stable:** Core transcription functionality
- ✅ **Stable:** Multi-language UI support
- ✅ **Stable:** Theme system
- 🚧 **In Development:** Enhanced AI features
- 📋 **Planned:** Mobile app version
- 📋 **Planned:** Collaborative editing features

## 🏗️ Roadmap

### Version 2.0 (Planned)
- [ ] Real-time collaborative editing
- [ ] Advanced audio editing tools
- [ ] Cloud synchronization
- [ ] Plugin system for extensions
- [ ] Advanced analytics and reporting

### Future Considerations
- [ ] Desktop application (Electron)
- [ ] Mobile applications (React Native)
- [ ] Enterprise features
- [ ] Advanced AI integrations

---

**Made with ❤️ by [ChrisDCG](https://github.com/ChrisDCG)**

*Audio Suite Pro - Transforming speech into text, one conversation at a time.*
