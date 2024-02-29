let button=document.querySelector(".button");
let todo=document.querySelector(".inputtext");
let main=document.querySelector(".main1");

button.addEventListener("click", function() {
   
    if(todo.value == 0)
    {
        alert("Jai Balayya");
       
    }

    else
    {   
        main.classList.remove("hidden");
        document.querySelector("#tasks").innerHTML +=
        `<div class="tasks margin-top-bottom">
        <span>${document.querySelector(".inputtext").value}</span> <button class="delete"><i class="fas fa-trash"></i></button>
        </div>`;
        var currentasks=document.querySelectorAll(".delete");

        for(var i=0; i<currentasks.length; i++)
        {
          currentasks[i].addEventListener("click", function()
          {
              console.log("test");
              return this.parentNode.remove();
          });

          }
          todo.value ="";
    }
  });


  



