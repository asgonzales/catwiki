import server from './app';

import config from './config';


server.listen(config.port, () => {
    console.log('server listening at ', config.port)
})