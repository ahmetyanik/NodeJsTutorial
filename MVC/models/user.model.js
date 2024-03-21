const mongoose =  require('mongoose');
const {model,Schema} = mongoose;


const userSchema = new Schema({
    ad:{
        type:String
    },
    yas:{
        type:Number
    },
    dogumTarihi:{
        type:Date
    }
});

const User = model("user",userSchema);

export default User;