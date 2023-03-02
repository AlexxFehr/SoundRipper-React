
export default function isYTLinkValid(link : string){

    const ex = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

    if (link.match(ex)){
        //TOOD Check if the link leads to video
        return true;

    } else {
        return false;
    }
}