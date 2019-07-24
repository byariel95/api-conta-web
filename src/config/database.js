import Sequelize from 'sequelize';

export const conection = new Sequelize(
    'prestamosc',
    'root',
    'bama1995',
    {
        host: 'localhost',
        dialect: 'mysql'
      
    }
)