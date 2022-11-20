var mongoose=require("mongoose");
require("./mekansema")
//var dbURI = "mongodb://localhost/mekanbul";
var dbURI = "mongodb+srv://beyzagursoy:1234@mekanbul.6hgwgof.mongodb.net/mekanbul?retryWrites=true&w=majority"
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    }
    );
}
process.on("SIGINT",function(){
    kapat("Uygulama Kapatıldı",function(){
        process.exit(0);
    }
    );
} 
);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı")
}
);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" adresindeki veritabanı bağlantısı koptu")
}
);
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası");
}
);