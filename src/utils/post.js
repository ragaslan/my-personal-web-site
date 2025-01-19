

export function createDateFormat(createdAt){
    let months_tr = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Eylül","Ekim","Kasım","Aralık"]
    let date = new Date(createdAt);
    let date_str = date.getDate() + " " + months_tr.at(date.getMonth()) + " " + date.getFullYear();
    return date_str;
}