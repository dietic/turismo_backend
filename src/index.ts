import app from './app';
import config from './config';

const port = config.server.port || 8787;

app.listen(port, () => {
  console.log('######################################');
  console.log(`[SERVER] ${config.app.service.toUpperCase()} 
  service running on port ${port}`);
  console.log('######################################');
});
