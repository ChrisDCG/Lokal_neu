# Deployment Guide

This guide covers different ways to deploy Audio Suite Pro.

## GitHub Pages (Recommended)

GitHub Pages deployment is automated via GitHub Actions.

### Setup
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

### Configuration
The deployment workflow (`.github/workflows/deploy.yml`):
- Runs on push to `main` branch
- Executes linting and tests
- Builds and deploys to GitHub Pages
- Available at: `https://username.github.io/repository-name`

## Local Development Server

### Option 1: Python HTTP Server
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
npm install -g http-server
http-server -p 8000
# Visit http://localhost:8000
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Static Web Hosting

Audio Suite Pro is a static web application that can be hosted on any static hosting service.

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build` (if applicable)
3. Set publish directory: `./` or build output
4. Deploy automatically on git push

### Vercel
1. Import project from GitHub
2. No build configuration needed
3. Automatic deployments on git push

### AWS S3 + CloudFront
1. Create S3 bucket for static website hosting
2. Upload all files to bucket
3. Configure CloudFront for CDN
4. Set up custom domain (optional)

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Docker Deployment

### Dockerfile
```dockerfile
FROM nginx:alpine

# Copy application files
COPY . /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run
```bash
docker build -t audio-suite-pro .
docker run -p 8080:80 audio-suite-pro
```

## Environment Configuration

### Production Checklist
- [ ] Secure HTTPS connection (required for microphone access)
- [ ] Configure CSP headers for security
- [ ] Set up error monitoring
- [ ] Configure analytics (optional)
- [ ] Test all browsers and devices
- [ ] Verify OpenAI API rate limits

### Security Headers
Recommended security headers for production:

```nginx
# In nginx.conf or .htaccess
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com; connect-src 'self' https://api.openai.com;";
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

### HTTPS Configuration

Microphone access requires HTTPS in production. Options:

1. **Let's Encrypt** (free SSL certificates)
2. **Cloudflare** (free SSL proxy)
3. **Platform SSL** (Netlify, Vercel provide automatic HTTPS)

## Performance Optimization

### Recommended Optimizations
1. **Enable gzip compression**
2. **Set cache headers** for static assets
3. **Minify CSS/JS** (future enhancement)
4. **Use CDN** for faster global delivery
5. **Optimize images** (SVGs are already optimized)

### Nginx Configuration Example
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name yourdomain.com;

    # SSL configuration
    ssl_certificate /path/to/certificate.pem;
    ssl_certificate_key /path/to/private.key;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        root /path/to/audio-suite-pro;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

## Monitoring and Analytics

### Error Monitoring
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Custom error reporting

### Analytics (Optional)
- Google Analytics
- Plausible Analytics (privacy-focused)
- Simple analytics via server logs

### Health Checks
Monitor:
- Page load times
- API response times
- Error rates
- User engagement metrics

## Troubleshooting

### Common Issues

1. **Microphone not working**
   - Ensure HTTPS connection
   - Check browser permissions
   - Test in different browsers

2. **OpenAI API errors**
   - Verify API key validity
   - Check rate limits
   - Monitor quota usage

3. **File upload failures**
   - Check file size limits
   - Verify file format support
   - Test network connectivity

### Debug Mode
Enable debug logging by adding to localStorage:
```javascript
localStorage.setItem('DEBUG_MODE', 'true');
```

## Backup and Recovery

### Data Backup
- User data is stored locally in browser
- Provide export functionality for:
  - Transcription history
  - Custom vocabulary
  - Settings and preferences

### Version Control
- Use semantic versioning
- Tag releases in Git
- Maintain changelog
- Document breaking changes