import * as path from 'path';
import * as winston from 'winston';

import * as Config from '../config';

export default function createLogger(filename: string): winston.LoggerInstance {
  return new (winston.Logger)({
    level: Config.LOGGING_LEVEL,
    transports: [
      new (winston.transports.Console)({
        formatter: (options) => {
          return `${options.timestamp()} [${path.parse(filename).name}] ` +
            `${winston.config.colorize(options.level, options.level.toUpperCase())} ` +
            `${options.message ? options.message : ''}` +
            `${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
        },
        timestamp: () => (new Date()).toISOString(),
      }),
    ],
  });
}
