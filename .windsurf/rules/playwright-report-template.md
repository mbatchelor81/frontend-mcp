---
trigger: model_decision
description: Use this rule when generating a playwright test report
---

# Playwright Test Report

## {TEST_NAME} Test Report

**Test File:** `{test-file}.yaml`  
**Execution Date:** {timestamp}  
**Status:** {status_icon} {STATUS}  
**Duration:** {execution_time}  

## Test Summary

| Metric | Value |
|--------|-------|
| Total Steps | {total_steps} |
| Passed | {passed_count} |
| Failed | {failed_count} |
| Screenshots | {screenshot_count} |
| Errors | {error_count} |

## Test Execution Details

{step_details}
<!-- 
Example step format:
### Step {step_number}: {step_description}
- **Action:** {action_type}
- **Status:** {status_icon} {STATUS}
- **Result:** {result_description}
- **Screenshot:** `{screenshot_filename}` (if applicable)
- **Error:** {error_message} (if failed)
-->

## Screenshots

{screenshot_list}
<!-- 
Example format:
1. **{filename}** - {description}
-->

## Performance Metrics

- **Page Load Time:** {page_load_time}
- **Total Test Duration:** {execution_time}
{additional_metrics}

## Browser Information

- **Browser:** {browser_name}
- **Viewport:** {viewport_dimensions}
- **User Agent:** {user_agent}

## Results Analysis

{results_analysis}
<!-- 
For PASSED tests:
✅ **All tests passed successfully**

For FAILED tests:
❌ **{failed_count} test(s) failed**

### Failed Steps
- Step {step_number}: {failure_reason}
-->

### Observations
{observations}

### Recommendations
{recommendations}

## Test Data Used

```yaml
{test_data}
```

## Error Details
{error_details}
<!-- Only include if there are errors -->

---
*Report generated automatically from Playwright MCP server execution*
