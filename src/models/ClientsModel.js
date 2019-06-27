import sequelize from 'sequelize';
import conection from '../config/database';

const Users = conection.define('usuarios',{
    idUsuarios: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Nick: {
        type: sequelize.STRING(40),
        notNull: true
    },
    Password: {
        type: sequelize.STRING(100),
        notNull: true
    },
    Rol: {
        type: sequelize.INTEGER,
        notNull: true
    },
    NombreCompleto: {
        type: sequelize.STRING(50),
        notNull: true
    },
    EstadoUsuario: {
        type: sequelize.BOOLEAN,
        notNull: true
    }

});

export default Users