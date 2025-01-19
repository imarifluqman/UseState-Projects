export interface dataType {
    id:number,
    image:string,
    heading:string,
    button:string,
    color:string,
    hover:string,
    link:string,
}

export const data:dataType[] = [
    {
        id:1,
        image:"./counter.png",
        heading:"Counter App",
        button:"View Project",
        color:"bg-[#1C3A64]",
        hover:"bg-[#204271]",
        link:"counter"
    },
    {
        id:2,
        image:"./Toggle.png",
        heading:"Toggle Visibility",
        button:"View Project",
        color:"bg-green-500",
        hover:"bg-green-400",
        link:"toggle"
    },
    {
        id:3,
        image:"./Input-Mirror.png",
        heading:"Input Mirror",
        button:"View Project", 
        color:"bg-sky-500",
        hover:"bg-sky-400",
        link:"input-mirror"
    },
    {
        id:4,
        image:"./Simple-Form.png",
        heading:"Simple Form",
        button:"View Project",
        color:"bg-[#ff9000]",
        hover:"bg-[#ff9100e7]",
        link:"simple-form"
    },
    {
        id:5,
        image:"./Background-Changer.png",
        heading:"Background Color Changer",
        button:"View Project",
        color:"bg-blue-500",
        hover:"bg-blue-400",
        link:"background-changer"

    },
    {
        id:6,
        image:"./Todo-List.png",
        heading:"Simple Todo List",
        button:"View Project",
        color:"bg-gray-800",
        hover:"bg-gray-700",
        link:"todo-list"
    },
    {
        id:7,
        image:"./Mode-Changer.png",
        heading:"Light/Dark Mode",
        button:"View Project",
        color:"bg-black",
        hover:"bg-[#0d0606e7]",
        link:"mode-changer"
    },
    {
        id:8,
        image:"./Stop-Watch.png",
        heading:"Simple Stopwatch",
        button:"View Project",
        color:"bg-[#CA0137]",
        hover:"bg-[#9d0129]",
        link:"stop-watch"
    },
    {
        id:9,
        image:"./Character-Counter.png",
        heading:"Character Counter",
        button:"View Project",
        color:"bg-purple-600",
        hover:"bg-purple-500",
        link:"character-counter"
    },
    {
        id:10,
        image:"./Random-Number.png",
        heading:"Random Number Generator",
        button:"View Project",
        color:"bg-teal-600",
        hover:"bg-teal-500",
        link:"random-generator"
    },
    

]