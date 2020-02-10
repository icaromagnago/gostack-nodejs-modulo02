require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // em cada tabela terá as colunas createdAt e updatedAt
    underscored: true, // padroniza a criação de tabelas e colunas separadas por underscore
    underscoredAll: true,
  },
};
