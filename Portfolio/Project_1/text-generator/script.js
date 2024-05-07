const para = [
	"0Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium nunc vitae libero tincidunt, id viverra est egestas. Praesent at justo rhoncus, volutpat arcu vitae, interdum ligula. Maecenas at nibh nec mauris finibus sollicitudin. Quisque nunc libero, ornare vitae  vel leo. Nam quis mauris sed justo posuere maximus. Proin ac luctus sapien.",

	"1Phasellus ullamcorper tortor vel augue porta cursus sed vel metus. Aenean condimentum ex libero. Proin ligula justo, semper a ipsum ut, feugiat pretium ante. Nulla in placerat justo. Aenean et maximus metus. Donec nec tincidunt elit, sed luctus leo. Donec porttitor mauris id vehicula interdum.",

    "4Nullam interdum risus sit amet tellus blandit mollis. el euismod ipsum. Donec fermentum velit lobortis risus mattis blandit. Donec non feugiat erat. In pretium dictum sem, a posuere lacus euismod vel. Nunc ac nunc condimentum, convallis leo et, viverra augue.",

	"5Nulla tellus dui, laoreet nec erat ultricies, bibendum t leo facilisis, id vehicula eros laoreet. Curabitur malesuada arcu a euismod convallis. Donec vitae lobortis nunc. Nulla facilisi. Praesent molestie elit in cursus dictum.",
    
	"61Proin posuere scelerisque magna a tristique. Vestibulum et lacus sed mi placerat eleifend. Praesent at dolor ac felis malesuada tempor at placerat lorem.  mattis. Donec eu venenatis felis. Vestibulum finibus viverra nulla, non maximus justo bibendum non. Etiam maximus, odio vitae elementum imperdiet, purus dui sagittis risus, vitae finibus tellus eros a diam. Pellentesque tellus ex, placerat sollicitudin enim non, tempus lobortis quam.",

	"73In finibus sapien nunc, eu congue erat aliquam in. Morbi et velit eget mi sollicitudin sollicitudin in vitae tortor. Nulla eget aliquet elit. Etiam nisl diam, purra nec, porta malesuada mi. Ut eu ante id justo aliquam finibus non vitae massa. Vivamus ac tempor nisi. Integer vulputate auctor sem eu dictum.",

	"84Nunc rutrum dolor eget leo ornare, quis placerat tellus tempor. Phasellus facilisis, nunc pretium pellentesque maximus, nisl lorem feugiat metus, ut cursus tellus nunc vel elit. Aenean at risus sed ex fringilla ce mollis lobortis risus, vitae fermentum nulla semper non. Donec quis rutrum ipsum, sed dictum felis. Cras fringilla at leo nec dapibus.",

	"9Nam ante nisl, sagittis id dignissim ut, scelerisque in purus. Donec condimentum a mauris sed suscipit. Nulla ac ex felis. Curabitur dictum imperdiet ornare. In hac congue tellus vitae felis mattis porta. Cras eget lacus vitae diam porttitor pellentesque ut vulputate justo.",

    "hjhddhhdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"
];



const form = document.querySelector(".form");
const input = document.getElementById("amount");
const btn = document.querySelector("#btn");
const result = document.querySelector(".para-text");

// console.log(form);
// console.log(input);
// console.log(btn);
form.addEventListener("submit", function (e) {
	e.preventDefault();
	const value = parseInt(input.value);

	// console.log(value);
	// Turn on Num Lock (if not already enabled).
	// Hold the ALT key.
	// On the numeric keypad, type 124.
	// Release the ALT ke|y.
    // console.log("hi");
    if (value > 9 || value < 0) 
        { const random = Math.floor(Math.random() * 10); 
        
        result.innerHTML = '<p class="text">' + para[random] + "</p>";
        
        // result.textContent =para[0] ; 
    }
    
    else
    {    
        let showPara = para.slice(0,value);
        
        showPara = showPara.map(function(item){
         return  '<p class="text">' + item + '<br><br></p>' ; 
    // result.textContent = item;
   
    console.log(item);
       
    })
    showPara= showPara.join("   ");
    result.innerHTML=showPara
}
});