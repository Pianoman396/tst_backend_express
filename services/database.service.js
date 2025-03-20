const dbsConfig = require("../config").dbs;
const logger = require("./logger.service")(module);
const {mongoose} = require('mongoose');

/**
 * Базовый класс сервиса работы с базой данных
 */
class Database {
  #uri;

  #id;

  #database;

  #connection;

  constructor(config) {
    this.#uri = config.uri;
    this.#id = config.id;
    this.#database = config.database;
  }

  /**
   * Открывает соединение с БД.
   * @return {Promise<void>}
   */
  async connect() {
    try {
      const db_url = this.#uri + '/' + this.#database;
      await mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));
      logger.info(`Connected to ${this.#id}`);
    } catch (error) {
      logger.error(`Unable to connect to ${this.#id}:`, error.message);
    }
  }

  /**
   * Закрывает соединение с БД.
   * @return {Promise<void>}
   */
  async disconnect() {
    if (this.#connection) {
      try {
        await mongoose.connection.close()
          .then(() => console.log('Disconnected from MongoDB'))
          .catch(err => console.error('Error disconnecting from MongoDB:', err));
        logger.info(`Disconnected from ${this.#id}`);
      } catch (error) {
        logger.error(`Unable to disconnect from ${this.#id}:`, error.message);
      }
    }
  }

  model(modelName, schema, collection) {
    return mongoose.model(modelName, schema, collection);
  }

  /**
   * Возвращает объект соединения с БД,
   * @return {Object}
   */
  get connection() {
    return this.#connection;
  }
}

const sampleDB = new Database(dbsConfig.sample_db);

module.exports = { sampleDB };
