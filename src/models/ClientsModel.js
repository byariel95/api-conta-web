import sequelize from 'sequelize';
import {conection} from '../config/database';

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
        
    },
    Rol: {
        type: sequelize.INTEGER,
    
    },
    NombreCompleto: {
        type: sequelize.STRING(50),
        
    },
    EstadoUsuario: {
        type: sequelize.BOOLEAN,
    
    }

},{
    timestamps: false
});

export default Users