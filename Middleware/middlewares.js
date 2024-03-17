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


const authControl = (req,res,next)=>{

    const erisimYetkisi = true;

    if(!erisimYetkisi){
        res.status(401).json({
            success:false,
            message:"Yetkili degilsiniz!"
        })
    }else{
        next();
    }
}


const postIcinControl = (req,res,next)=>{

    if(req.body.ad === "ahmet" && req.body.sifre == 123){
        res.status(200).json({
            status:true,
            message:"Erisim sagladiniz"
        })       

        next();
        
    }else{
        res.status(401).json({
            status:false,
            message:"Sifre yada isim hatali!"
        })
    }
}

export { passwordControl,authControl,postIcinControl};
