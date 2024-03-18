import { allUsers } from "./client.js";

const passwordControl = (req,res,next)=>{

    const erisimYetkisi = true;


    if(!erisimYetkisi){
        res.status(401).json({
            success:false,
            message:"Sifreniz yanlis!"
        })
    }else{
        next();
    }
}


/* const authControl = (req,res,next)=>{

    const erisimYetkisi = true;

    if(!erisimYetkisi){
        res.status(401).json({
            success:false,
            message:"Yetkili degilsiniz!"
        })
    }else{
        next();
    }
} */




const postIcinControl = (req,res,next)=>{

/*     console.log(req.body.ad);
    console.log(req.body.password);

    console.log(req.body);

   console.log(allUsers) */

   
   const foundedUser = allUsers.find(user=>{
    
   return user.ad == req.body.ad && user.password == req.body.password
   })

   console.log(foundedUser);


    if(foundedUser){            

        next();
        
    }else{
        res.status(401).json({
            status:false,
            message:"Sifre yada isim hatali!"
        })
    }
}

const authControl = (req,res,next)=>{

    /*     console.log(req.body.ad);
        console.log(req.body.password);
    
        console.log(req.body);
    
       console.log(allUsers) */
    
       
       const foundedUser = allUsers.find(user=>{
        
       return user.ad == req.body.ad && user.password == req.body.password && user.role == "admin"
       })
    
       console.log(foundedUser);
    
    
        if(foundedUser){            
    
            next();
            
        }else{
            res.status(401).json({
                status:false,
                message:"Yetkiniz yok!"
            })
        }
    }

export { passwordControl,authControl,postIcinControl};
