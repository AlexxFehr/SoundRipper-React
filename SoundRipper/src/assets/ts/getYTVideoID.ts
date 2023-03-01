export default function getYTVideoID(link:string){
    return String(link).split("watch?v=")[1];
}