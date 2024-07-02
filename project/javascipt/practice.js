const milestoneData = JSON.parse(data).data;

function loadMilestones(){
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestoneData.map((milestone) => {
    return `<div class="milestone border-b" id = ${milestone._id}>
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick = "milestoneTransfer(this, ${milestone._id})"/></div>
              <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map((module) => {
                return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`;
                }).join("")}
            </div>
          </div>
        </div>`;
  }).join("")}`;
}
loadMilestones();


function openMilestone(on, id){
  const show = document.querySelector(".show");
  const active = document.querySelector(".active");
  const onPanel = on.parentNode.nextElementSibling;


  if(!onPanel.classList.contains("show") && show){
    show.classList.remove("show");
  }onPanel.classList.toggle("show");

  if (!on.classList.contains("active") && active){
    active.classList.remove("active");
  }

  showImage(id);
}

function showImage(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");


  milestoneImage.style.opacity = "0"; 
  milestoneTitle.innerText = milestoneData[id].name;
  milestoneDetails.innerText = milestoneData[id].description;
  milestoneImage.src = milestoneData[id].image;
}

const milestoneImage = document.querySelector('.milestoneImage');

milestoneImage.onload = function () {
  this.style.opacity="1";
}



function milestoneTransfer(checkbox, id) {
  const doneList = document.querySelector(".doneList");
  const milestoneList = document.querySelector(".milestones");
  const item = document.getElementById(id);

  if (checkbox.checked){
    milestoneList.removeChild(item);
    doneList.appendChild(item);
  }else{
    doneList.removeChild(item);
    milestoneList.appendChild(item);
  }
}

