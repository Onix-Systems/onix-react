### 🔍  Multi-Persona Code Review

```
Please review this code from three different perspectives:

1. As a security specialist: 
Identify potential vulnerabilities, injection risks, or authentication issues

2. As a performance engineer: 
Highlight inefficient patterns, memory leaks, or bottlenecks

3. As a maintainability expert: 
Point out unclear naming, complex logic, or architectural concerns

CODE:
[YOUR CODE HERE]

For each role, provide specific feedback and suggested improvements.
```

### ⚙️ Progressive API Design

```
I'm designing a RESTful API for a [SPECIFIC DOMAIN] system. 
Let's develop this progressively:

STAGE 1: Core resource definition
- Define the essential resources and their relationships
- Specify primary attributes for each resource
- Outline basic CRUD operations

STAGE 2: Interaction patterns
- Define specialized endpoints beyond CRUD
- Specify query parameters and filtering capabilities
- Design pagination and sorting approaches

STAGE 3: Advanced considerations
- Authentication and authorization patterns
- Rate limiting and quota strategies
- Caching directives and ETag implementation
- Versioning approach
- Error handling standardization

STAGE 4: Documentation and examples
- Generate OpenAPI specifications
- Provide example requests/responses for common operations
- Document best practices for API consumers

Let's start with Stage 1: [YOUR SPECIFIC API DOMAIN DETAILS]
```

### 🧩 Advanced Debugging Strategy

```
I'm debugging an issue with the following characteristics:

SYMPTOMS:
- [Describe the observable problem in detail]
- Occurs approximately [FREQUENCY] under [SPECIFIC CONDITIONS]
- Started after [RELEVENT CHANGE OR TIMELINE]

ENVIRONMENT:
- [Relevant technologies, versions, platforms]
- [Configuration details that might be relevant]

INVESTIGATION SO FAR:
- [Steps already taken]
- [Evidence collected]
- [Theories explored and ruled out]

ERROR LOGS:
[Include relevant logs here]

RELEVANT CODE:
[Include suspicious code sections]

Help me by:
1. Suggesting the most likely root causes based on this information
2. Proposing specific diagnostic steps to confirm each hypothesis
3. Recommending targeted fixes once the cause is identified
```

### 📘 Documentation Generation Framework

```
Generate comprehensive developer documentation for this [FUNCTION/COMPONENT/MODULE]:

[YOUR CODE]

Structure the documentation as follows:

1. OVERVIEW
   - Purpose and primary functionality
   - When to use this component vs. alternatives
   - Architectural context (where it fits in the larger system)

2. TECHNICAL SPECIFICATION
   - API reference with all methods/properties
   - Parameters, return values, and types
   - State management (if applicable)
   - Events emitted/listened for

3. IMPLEMENTATION EXAMPLES
   - Basic usage example
   - Advanced configuration example
   - Customization scenarios
   - Common patterns and best practices

4. TROUBLESHOOTING
   - Common errors and their solutions
   - Debugging strategies
   - Performance considerations

5. RELATED COMPONENTS
   - Dependencies
   - Components commonly used alongside this one
   - Alternative approaches

Format using markdown with proper headings, code blocks, tables, and emphasis where appropriate.
```

### 🧪 Test Suite Generator

```
I need to create a comprehensive test suite for this function:

[FUNCTION CODE]

Please generate tests organized into these categories:

1. FUNCTIONAL CORRECTNESS
   - Happy path tests with various valid inputs
   - Edge case handling (empty inputs, boundary values, etc.)
   - Expected error conditions and error handling

2. PERFORMANCE CHARACTERISTICS
   - Tests verifying performance under expected loads
   - Tests for memory usage patterns
   - Time complexity verification for key operations

3. INTEGRATION POINTS
   - Tests for interactions with external dependencies
   - Mocking strategies for isolating the function
   - Testing side effects on the system

4. SECURITY CONSIDERATIONS
   - Input validation and sanitization tests
   - Authorization bypass attempts
   - Potential injection vectors

Use [Jest/Mocha/YOUR TESTING FRAMEWORK] syntax and follow AAA (Arrange-Act-Assert) pattern. 
Include setup and teardown where appropriate.
```
