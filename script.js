let count = 0; // state

const render=()=>{
     document.getElementById("count").innerHTML=count
}

const increment = () => {
  count++;
  render()
};
const decrement = () => {
  count--;
  render()
};
render()
document.getElementById("Increment").addEventListener("click", increment);
document.getElementById("Decrement").addEventListener("click", decrement);
