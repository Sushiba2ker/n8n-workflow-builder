// Validate required environment variables
const validateEnvVar = (name: string, value: string | undefined): string => {
  if (!value || value.trim() === '') {
    console.warn(`Warning: ${name} environment variable is not set. Please check your configuration.`);
    return '';
  }
  return value.trim();
};

export const N8N_HOST = validateEnvVar('N8N_HOST', process.env.N8N_HOST);
export const N8N_API_KEY = validateEnvVar('N8N_API_KEY', process.env.N8N_API_KEY);

// Log configuration status (without exposing sensitive data)
console.log('Configuration loaded:');
console.log(`- N8N_HOST: ${N8N_HOST ? '✓ Set' : '✗ Missing'}`);
console.log(`- N8N_API_KEY: ${N8N_API_KEY ? '✓ Set' : '✗ Missing'}`);
