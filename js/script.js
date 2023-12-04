const menu=[
    {
        id:1,
        name:"Html & CSS",
        img:"html.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:5000,
        duration:"30Days"
    },
    {
        id:2,
        name:"Javascript",
        img:"js.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:6000,
        duration:"20Days"
    },
    {
        id:3,
        name:"Angular",
        img:"angular.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:15000,
        duration:"60Days"
    },
    {
        id:4,
        name:"React Js",
        img:"react.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:18000,
        duration:"50Days"
    },
    {
        id:5,
        name:"Node Js",
        img:"nodejs.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:25000,
        duration:"90Days"
    },
    {
        id:6,
        name:"Photoshop",
        img:"photoshop.jpg",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:10000,
        duration:"30Days"
    },
    {
        id:7,
        name:"JAVA",
        img:"java.webp",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:30000,
        duration:"120Days"
    },
    {
        id:8,
        name:"Python",
        img:"python.png",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio odio omnis dolor cum minus accusamus reiciendis mollitia repudiandae iure voluptates tempora, porro ea dignissimos dolorem recusandae aperiam fugit delectus!",
        fees:28000,
        duration:"90Days"
    }
    ]
    let p=""
    for(let i=0;i<menu.length;i++){
    p+=`
    <tr>
        <td>${menu[i].id}</td>
        <td>${menu[i].name}</td> 
        <td> <img src="./images/${menu[i].img}" alt=""></td>
        <td>${menu[i].content}</td>
        <td>${menu[i].fees}</td>
        <td>${menu[i].duration}</td>
    </tr>



    
    `
    
}
document.getElementById("menu").innerHTML=p

 function lowtoheigh(){
    menu.sort((x,y)=>{
    return (x.fees-y.fees)
    })
    let p=""
    for(let i=0;i<menu.length;i++){
    p+=`
    <tr>
        <td>${menu[i].id}</td>
        <td>${menu[i].name}</td> 
        <td> <img src="./images/${menu[i].img}" alt=""></td>
        <td>${menu[i].content}</td>
        <td>${menu[i].fees}</td>
        <td>${menu[i].duration}</td>
    </tr>
    `
    
}
document.getElementById("menu").innerHTML=p
 }   
 function heightolow(){
    menu.sort((x,y)=>{
    return (y.fees-x.fees)
    })
    let p=""
    for(let i=0;i<menu.length;i++){
    p+=`
    <tr>
        <td>${menu[i].id}</td>
        <td>${menu[i].name}</td> 
        <td> <img src="./images/${menu[i].img}" alt=""></td>
        <td>${menu[i].content}</td>
        <td>${menu[i].fees}</td>
        <td>${menu[i].duration}</td>
    </tr>
    `
    
}
document.getElementById("menu").innerHTML=p
 }   