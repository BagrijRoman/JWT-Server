import { createLogger, transports, format } from 'winston';
import { logger as loggerConfigs } from '../../configs';

const {
  maxFiles,
  logsFileName,
  logsFolder,
  maxFileSize,
} = loggerConfigs;


const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: `./${logsFolder}/${logsFileName}`,
      json: false,
      maxsize: maxFileSize,
      maxFiles,
    }),
    new transports.Console(),
  ]
});

export default logger;
