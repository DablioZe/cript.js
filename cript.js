const codes = {
    a: ["jgKldS", "skASsm", "dmakSl", "DaKJsi"],
    b: ["fdsjkh", "daviga", "higame", "felipe"],
    c: ["sksJFa", "siNCoa", "juilof", "noname"],
    d: ["AlBina", "meOlHO", "sygDal", "djaSmc"],
    e: ["KSJMck", "akKSML", "ajmSkl", "kjMjsu"],
    f: ["manodo", "tribof", "CJSLKA", "AJSMCS"],
    g: ["mingua", "AjSJIJ"],
    h: ["sentar", "NSJACC"],
    i: ["jHSIck", "salMCJ"],
    j: ["sjaMCM", "semcom"],
    k: ["palavr", "homeme"],
    l: ["juudAA", "AAAAAG"],
    m: ["guahms", "sjalmj"],
    n: ["kkisls", "juskla", "msoooi", "olpudh"],
    o: ["iouljg", "jsumjh", "lkioiu", "juhgyt"],
    p: ["lpsigu", "wetslj", "rstguy", "javaks"],
    q: ["GksLca", "Skcmal", "skcUal", "skcoal"],
    r: ["SAKvsL", "SJHCAK", "DSLJCI", "SKCALP"],
    s: ["SJCLOS", "KAOCHJ", "UUUYDS", "ABCGTD"],
    t: ["ABCDEF", "FEDCBA"],
    u: ["KISJUG", "LLLLLP"],
    v: ["VIKING", "VKGayK"],
    w: ["OIIIII", "UGYYYS"],
    x: ["LOOPPP", "ONIBUS"],
    y: ["KIIJGH", "MENOSU"],
    z: ["MCKVJN", "AJSYCA", "MINEBK", "ZXSZDX"],
    A: ["MCMCMC", "CFGTYB", "MMMMMM", "HYYGUI"],
    B: ["GAYYYS", "LINGUA", "PEDRAS", "AGUASA"],
    C: ["HCNCNC", "WWWQQA", "UDTQCS", "HAHAHA"],
    D: ["LOLOLO", "JOOOOJ", "UPDATE", "GAMESA"],
    E: ["uaghjk", "seLSLS", "humano", "huitaa"],
    F: ["elemen", "luaNaa"],
    G: ["oepRal", "MAguiM"],
    H: ["kkiidd", "rgbcor"],
    I: ["lagoas", "janeir"],
    J: ["Mentas", "pasTas"],
    K: ["jjjugh", "hghghg"],
    L: ["gyguds", "vvvvvv"],
    M: ["dsesda", "uuuugy"],
    N: ["oisosi", "hdydgt"],
    O: ["jsuidd", "ascsas"],
    P: ["esesrd", "esdras"],
    Q: ["lobjgu", "nbhvgy"],
    R: ["jhidyf", "gyftsj"],
    S: ["estvch", "sacsfg"],
    T: ["scgsrt", "bnvhxj"],
    U: ["sjcusy", "scgasx"],
    V: ["chyvns", "scasvJ"],
    W: ["SJUCSs", "NVJIII"],
    X: ["GYGUIS", "JJJUHH"],
    Y: ["YOOOOU", "MBJVHU"],
    Z: ["MALIBU", "ORLAND"],
    0: ["mbjdAA", "FFFDsa"],
    1: ["tttyys", "uuugys"],
    2: ["jjjhhh", "yyyuuu"],
    3: ["mnSPOR", "SPclub"],
    4: ["mjjjjj", "MNSAKs"],
    5: ["LLLSOd", "HSUckA"],
    6: ["LOpcas", "MCJAIs"],
    7: ["kLSokc", "KsicnS"],
    8: ["LSOcas", "KSOCPf"],
    9: ["mjvksL", "LopsCa"],
    "ç": ["JonaSA", "perece"],
    "Ç": ["hustin", "cortin"],
    " ": ["IuoPSa", "nhcyvj", "njhnjh", "CJSUak"],
    "/": ["BARHSS", "SLASHT"],
    "\\": ["LOPESA", "LLLSES"],
    ",": ["JFSLsk", "flaoSA"],
    ".": ["ghDLSP", "POSLIA"],
    ":": ["uytisC", "uccghj"],
    ";": ["kioPPP", "ihjjui"],
    "?": ["juiope", "yiujkk"],
    "~": ["gttyui", "mjhmmm"],
    "^": ["jhgttt", "ugcccc"],
    "´": ["jnhbgv", "bgtyhn"],
    "`": ["tgrfed", "ujyhol"],
    "]": ["kolijo", "kijftg"],
    "[": ["OOOjhg", "uhbgnm"],
    "}": ["mkopli", "kijfff"],
    "{": ["nnnnvc", "jsaADs"],
    "º": ["hyyyyu", "kijopl"],
    "ª": ["afrsdy", "nbvcgx"],
    "°": ["zzxzcz", "zxcgsa"],
    "*": ["ettsud", "estudo"],
    "-": ["joiask", "aaaaac"],
    "+": ["juhbcm", "pppppA"],
    "\"": ["nhvjjj", "kichcc"],
    "'": ["jjhhgg", "BaBcBB"],
    "!": ["hhhhug", "kishcj"],
    "@": ["tututu", "taatat"],
    "#": ["vishkk", "lubabv"],
    "$": ["sifrao", "mioJOS"],
    "%": ["percen", "tiojol"],
    "¨": ["nbvcvv", "gccvxz"],
    "&": ["hygjuf", "aqqaqa"],
    "(": ["mmmzzz", "ncccxx"],
    ")": ["xxxnnn", "pornhu"],
    "_": ["iiijuh", "llllPo"],
    "=": ["hyhgys", "mmnjhb"],
    "§": ["nhhygi", "nbggff"],
    "á": ["GJSUCA", "LOsaaa"],
    "à": ["nnnbhv", "NNVJKA"],
    "ã": ["mmccff", "khnnnn"],
    "â": ["mnhhhx", "xxccvd"],
    "ä": ["jugLSK", "JJJJSa"],
    "é": ["pppads", "pppadd"],
    "è": ["bbbhva", "bbbhvv"],
    "ẽ": ["jjjuuk", "iksjal"],
    "ê": ["llllsc", "mnaccs"],
    "ë": ["uuuidh", "iskcta"],
    "ó": ["llKKKK", "HJGCcc"],
    "ò": ["posCSa", "aAaAaa"],
    "ô": ["LssPPP", "PPPsii"],
    "ö": ["KJGUSS", "AAAAcc"],
    "ú": ["LLLBBB", "LVVcss"],
    "ù": ["cccVVf", "QQAesd"],
    "ü": ["TTTYyd", "DDsscv"],
    "á": ["GJSUCA", "LOsaaa"],
    "Á": ["nnnbhv", "NNVJKA"],
    "Ã": ["mmccff", "khnnnn"],
    "Â": ["mnhhhx", "xxccvd"],
    "Ä": ["jugLSK", "JJJJSa"],
    "É": ["pppads", "pppadd"],
    "È": ["bbbhva", "bbbhvv"],
    "Ẽ": ["jjjuuk", "iksjal"],
    "Ê": ["llllsc", "mnaccs"],
    "Ë": ["uuuidh", "iskcta"],
    "Ó": ["llKKKK", "HJGCcc"],
    "Ò": ["posCSa", "aAaAaa"],
    "Ô": ["LssPPP", "PPPsii"],
    "Ö": ["KJGUSS", "AAAAcc"],
    "Ú": ["LLLBBB", "LVVcss"],
    "Ù": ["cccVVf", "QQAesd"],
    "Ü": ["TTTYyd", "DDsscv"],
}
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 /\\,.:;?~^´`][}{ºª°*-+\"'!@#$%¨&()_=§áàãâäéèẽêëóòôöúùüÁÀÃÂÄÉÈẼÊËÓÒÔÖÚÙÜ";
const cript = {
    toText(value, callback){
        if (!value) return console.error("CriptJS: Argument is not defined.");
        CodeToText(value, callback)
    },
    toCode(value, callback){
        if (!value) return console.error("CriptJS: Argument is not defined.");
        TextToCode(value, callback);
    }
}

function TextToCode(value, callback){
    if (typeof value === "string"){
            if (value.length == 6){
                const random_number = Math.floor(Math.random() * codes[value].length)
                return codes[value][random_number];
            } else {
                var result = new String();
                for (let i = 0; i < value.length; i++){
                    const random_number = Math.floor(Math.random() * codes[value[i]].length);
                    /*
                    if (value[i] == " "){
                        result += codes["Space"][random_number]
                    } else {
                        /** */
                        result += codes[value[i]][random_number];
                        /*
                    }
                    /** */
                }
                if (callback){
                    return callback(false, result)
                } else {
                    return result;
                }
            } 

        } else {
            if (callback){
                return callback(`CriptJS: "${typeof value}" value cannot be encrypted.`, null)
            }
        }
}
function CodeToText(value, callback){
    if (typeof value === "string"){

            if (value.length == 6){
                for (let i = 0; i < letters.length; i++){
                    if (codes[letters[i]].includes(value)){
                        const letter = letters[i];
                        i = letters.length;
                        return letter;
                    }
                }
            } else {
                const value_splited = new Array();
                var real_result = "";
                var general_index = 0;
                function Split(){
                    if (general_index >= value.length) return;
                    var current_value = "";
                    for (let i = 0; i < 6; i++){
                        current_value += value[general_index];
                        general_index++;
                    }
                    value_splited.push(current_value)
                    Split();
                }
                Split();
                for (let twoi = 0; twoi < value_splited.length; twoi++){
                    for (let i = 0; i < letters.length; i++){
                        if (codes[letters[i]].includes(value_splited[twoi])){
                            const letter = letters[i];
                            i = letters.length;
                            real_result += letter;
                        }
                        /** */
                    }
                }
                if (callback){
                    return callback(false, real_result)
                } else {
                    return real_result;
                }
            } 

        } else {
            if (callback){
                return callback(`CriptJS: "${typeof value}" value cannot be encrypted.`, null)
            }
        }
}

module.exports = cript;