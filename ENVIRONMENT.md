# Environment Configuration

This project requires the following environment variables to function properly:

## Required Variables

### `N8N_HOST`

- **Description**: Your n8n instance URL including the API path
- **Example**: `https://your-n8n-instance.com/api/v1`
- **Default**: Empty string (will show warning)

### `N8N_API_KEY`

- **Description**: Your n8n API key (can be generated in n8n Settings > API)
- **Example**: `n8n_api_12345678901234567890`
- **Default**: Empty string (will show warning)

## Setup Instructions

1. Create a `.env` file in the project root:

```bash
cp .env.example .env
```

2. Edit the `.env` file with your values:

```env
N8N_HOST=https://your-n8n-instance.com/api/v1
N8N_API_KEY=your-actual-api-key-here
```

3. Alternatively, set environment variables when running:

```bash
N8N_HOST=https://your-n8n-instance.com/api/v1 N8N_API_KEY=your-key npm start
```

## Validation

The application will show configuration status on startup:

- ✓ Set: Variable is properly configured
- ✗ Missing: Variable needs to be set

If environment variables are missing, the application will show warnings but continue to run (though API calls will fail).
