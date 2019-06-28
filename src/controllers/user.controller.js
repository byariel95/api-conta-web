import User from '../models/ClientsModel';

export async function createUser(req,res){
   const  { Nick, Password, Rol,NombreCompleto} = req.body;
   try 
   {
     let newUser =  await User.create({
           Nick,
           Password,
           Rol,
           NombreCompleto
       },{
            fields: [Nick,Password,Rol,NombreCompleto]
        });
       if (newUser) {
           return res.json({
               message: 'User created successfully',
               data: newUser

           });
       }
   } 
   catch (error) 
   {
       console.log(error);
       res.status(500).json({
           message: 'ohhh something goes wrong ',
           data: {}
       });

   }
};


