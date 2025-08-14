---
description: Conduct playwright regression testing
auto_execution_mode: 3
---

# Playwright MCP Server Testing Workflow

This document outlines the workflow for using the Playwright MCP server to conduct regression testing with YAML-based test definitions and markdown reports.

## Overview

Instead of writing traditional Playwright test files (`.spec.ts`), this workflow uses:
- **YAML test definitions** stored in `regression-tests/`
- **Playwright MCP server** for browser automation
- **Markdown reports** generated in `regression-tests/reports/`

## Directory Structure

```
regression-tests/
├── auth-login-flow.yaml
├── auth-logout-flow.yaml
├── ui-movie-cards.yaml
└── reports/
    ├── auth-login-flow-report.md
    ├── auth-logout-flow-report.md
    └── ui-movie-cards-report.md
```

## YAML Test Format

### Basic Structure

```yaml
name: "Test Name"
description: "Test description"
url: "http://localhost:3000"
timestamp: null
status: null

prerequisites:
  - description: "Optional prerequisite description"
    test_file: "prerequisite-test.yaml"

test_steps:
  - step: 1
    action: "action_type"
    description: "Step description"
    # Action-specific parameters

results:
  passed: null
  failed: null
  screenshots: []
  errors: []
  execution_time: null
```

### Supported Actions

#### 1. Navigation
```yaml
- step: 1
  action: "navigate"
  description: "Navigate to URL"
  url: "http://localhost:3000"
  expected: "Expected result"
```

#### 2. Element Verification
```yaml
- step: 2
  action: "verify_elements"
  description: "Verify elements exist"
  elements:
    - selector: 'button:has-text("Login")'
      type: "button"
      should_exist: true
    - selector: '.error-message'
      type: "error"
      should_exist: false
```

#### 3. Form Filling
```yaml
- step: 3
  action: "fill_form"
  description: "Fill form fields"
  form_data:
    - selector: 'input[name="email"]'
      value: "test@example.com"
    - selector: 'input[name="password"]'
      value: "password123"
```

#### 4. Click Actions
```yaml
- step: 4
  action: "click"
  description: "Click element"
  selector: 'button[type="submit"]'
  expected: "Should submit form"
```

#### 5. Hover Testing
```yaml
- step: 5
  action: "test_hover_effects"
  description: "Test hover interactions"
  hover_tests:
    - selector: '.movie-card'
      expected_effect: "scale transform"
```

#### 6. Responsive Testing
```yaml
- step: 6
  action: "verify_responsive_layout"
  description: "Test responsive behavior"
  viewport_tests:
    - width: 1920
      height: 1080
      expected_columns: 4
    - width: 768
      height: 1024
      expected_columns: 2
```

## Workflow Steps

### 1. Create Test Definition

Create a YAML file in `regression-tests/` following the format above.

### 2. Execute Test Using MCP Server

Use the Playwright MCP server tools to execute the test:

```javascript
// Navigate to application
await mcp2_browser_navigate({ url: "http://localhost:3000" });

// Take screenshot
await mcp2_browser_take_screenshot({ 
  filename: "test-start.png",
  fullPage: true 
});

// Interact with elements
await mcp2_browser_type({
  ref: "email-input",
  element: "Email field",
  text: "test@example.com"
});

await mcp2_browser_click({
  ref: "login-button",
  element: "Login button"
});

// Verify results
await mcp2_browser_snapshot();
```

### 3. Update YAML Results

After execution, update the YAML file with results:

```yaml
results:
  passed: 6
  failed: 0
  screenshots: 
    - "test-start.png"
    - "after-login.png"
  errors: []
  execution_time: "2.3s"
  timestamp: "2025-08-14T14:02:35.393Z"
  status: "PASSED"
```

### 4. Generate Report

Create a markdown report in `regression-tests/reports/{test-name}-report.md`.

## MCP Server Commands Reference

### Navigation
- `mcp2_browser_navigate({ url })`
- `mcp2_browser_navigate_back()`
- `mcp2_browser_navigate_forward()`

### Interaction
- `mcp2_browser_click({ ref, element })`
- `mcp2_browser_type({ ref, element, text })`
- `mcp2_browser_hover({ ref, element })`

### Verification
- `mcp2_browser_snapshot()`
- `mcp2_browser_take_screenshot({ filename, fullPage })`

### Utilities
- `mcp2_browser_resize({ width, height })`
- `mcp2_browser_wait_for({ text, time })`

## Best Practices

### 1. Test Organization
- One YAML file per test scenario
- Use descriptive names and descriptions
- Include prerequisites for dependent tests

### 2. Element Selection
- Use stable selectors (data-testid, role-based)
- Avoid brittle CSS selectors
- Include element descriptions for clarity

### 3. Error Handling
- Capture screenshots on failures
- Document expected vs actual results
- Include error messages in reports

### 4. Reusability
- Create modular test steps
- Use prerequisites for setup
- Share common actions across tests

## Example Execution Flow

1. **Load YAML test definition**
2. **Initialize MCP browser session**
3. **Execute each test step sequentially**
4. **Capture screenshots at key points**
5. **Update YAML with results**
6. **Generate markdown report**
7. **Close browser session**

## Report Generation

Reports should include:
- Test summary (passed/failed)
- Step-by-step execution details
- Screenshots with annotations
- Error details if any
- Performance metrics
- Recommendations for fixes

This workflow provides a declarative, reusable approach to regression testing using the Playwright MCP server while maintaining clear documentation and reporting.
