function Encrypt(key, text, callback){
    if (typeof key !== "string"){
        const err = new Error(`CriptJS: The "${typeof key}" type key cannot be used for cryptography`);
        if (callback){
            return callback(err);
        } else {
            return console.error(err);
        }
    }
    if (typeof text !== "string"){
        const err = new Error(`CriptJS: Text of type "${typeof text}" cannot be used for encryption`);
        if (callback){
            return callback(err);
        } else {
            return console.error(err);
        }
    }
    var result = new String();
    var key_control = 0;
    for (let i = 0; i < text.length; i++){
        result += String.fromCharCode(text.substr(i, 1).charCodeAt(0) + key.substr(key_control, 1).charCodeAt(0));
        
        if((key_control + 1) < key.length){
            key_control++;
        } else {
            key_control = 0;
        }
    }
    if (callback){
        return callback(null, result);
    } else {
        return result;
    }
}
function Decrypt(key, text, callback){
    if (typeof key !== "string"){
        const err = new Error(`CriptJS: The "${typeof key}" type key cannot be used for cryptography`)
        if (callback){
            return callback(err);
        } else {
            return console.error(err);
        }
    }
    if (typeof text !== "string"){
        const err = new Error(`CriptJS: Text of type "${typeof text}" cannot be used for encryption`)
        if (callback){
            return callback(err);
        } else {
            return console.error(err);
        }
    }
    var result = new String();
    var key_control = 0;
    for (let i = 0; i < text.length; i++){
        result += String.fromCharCode(text.substr(i, 1).charCodeAt(0) - key.substr(key_control, 1).charCodeAt(0));
        if((key_control + 1) < key.length){
            key_control++   
        } else {
            key_control = 0;
        }
    }
    if (callback){
        return callback(null, result);
    } else {
        return result;
    }
}

module.exports = {
    encrypt(key, text, callback){
        if (!key) return console.error("CriptJS: \"Key\" value is not defined.");
        if (!text) return console.error("CriptJS: \"Text\" value is not defined.");
        Encrypt(key, text, callback);
    },
    decrypt(key, text, callback){
        if (!key) return console.error("CriptJS: \"Key\" value is not defined.");
        if (!text) return console.error("CriptJS: \"Text\" value is not defined.");
        Decrypt(key, text, callback);
    }
}