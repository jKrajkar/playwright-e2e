# Playwright E2E Testing Project

This project contains end-to-end tests for the myDock application using Playwright. The tests cover various functionalities including login, Tasker module, myDock features, and myNote functionality.

## 🚀 Features

- **Cross-browser testing**: Tests run on Chromium, Firefox, and WebKit
- **Parallel execution**: Tests run in parallel for faster execution
- **HTML reports**: Detailed test reports with screenshots and traces
- **CI/CD ready**: Configured for continuous integration environments

## 📋 Prerequisites

- Node.js (version 16 or higher)
- pnpm package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd playwright-e2e
```

2. Install dependencies:
```bash
pnpm install
```

3. Install Playwright browsers:
```bash
pnpm exec playwright install
```

## 🧪 Available Tests

The project includes the following test suites:

- **`test-Tasker.spec.ts`**: Tests the Tasker module functionality including login and task creation
- **`test-local-Tasker.spec.ts`**: Local version of Tasker tests
- **`test-myDock.spec.ts`**: Tests for myDock application features
- **`test-myNote.spec.ts`**: Tests for myNote functionality

## 🏃‍♂️ Running Tests

### Run all tests
```bash
pnpm test
```

### Run tests with UI mode (interactive)
```bash
pnpm test:ui
```

### View test reports
```bash
pnpm report
```

### Run specific test file
```bash
pnpm exec playwright test tests/test-Tasker.spec.ts
```

### Run tests in specific browser
```bash
pnpm exec playwright test --project=chromium
```

## ⚙️ Configuration

The project uses `playwright.config.ts` with the following key settings:

- **Test directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Parallel execution**: Enabled
- **Retries**: 2 retries on CI, 0 on local
- **Reporters**: HTML reporter
- **Browsers**: Chromium, Firefox, WebKit

## 📊 Test Reports

After running tests, you can view detailed reports:

1. **HTML Report**: Run `pnpm report` to open the HTML report in your browser
2. **Reports location**: `playwright-report/` directory
3. **Test results**: `test-results/` directory

## 🔧 Project Structure

```
playwright-e2e/
├── tests/                    # Test files
│   ├── test-Tasker.spec.ts
│   ├── test-local-Tasker.spec.ts
│   ├── test-myDock.spec.ts
│   └── test-myNote.spec.ts
├── playwright-report/        # Generated test reports
├── test-results/            # Test artifacts
├── playwright.config.ts     # Playwright configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🚀 CI/CD Integration

The project is configured for CI/CD environments:

- **CI detection**: Automatically detects CI environment
- **Retries**: 2 retries on CI for flaky tests
- **Single worker**: Runs tests sequentially on CI
- **Forbid only**: Prevents `test.only()` in production

## 🤝 Contributing

1. Create a new test file in the `tests/` directory
2. Follow the existing naming convention: `test-*.spec.ts`
3. Use descriptive test names and proper assertions
4. Run tests locally before committing

## 📄 License

ISC License

## 🆘 Troubleshooting

### Common Issues

1. **Browser not found**: Run `pnpm exec playwright install`
2. **Tests timing out**: Check network connectivity and increase timeout in config
3. **Element not found**: Verify selectors and page structure

### Debug Mode

Run tests in debug mode for step-by-step execution:
```bash
pnpm exec playwright test --debug
```

For more information, visit the [Playwright documentation](https://playwright.dev/). 