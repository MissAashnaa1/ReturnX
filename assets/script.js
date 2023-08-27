const form = document.getElementById("return-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = form.querySelector("#email").value;
  const orderNumber = form.querySelector("#order-number").value;

  try {
    const response = await fetch(
      `/verify-return?email=${email}&orderNumber=${orderNumber}`
    );
    const data = await response.json();

    if (data.error) {
      toast.textContent = data.error;
    } else {
      toast.textContent = "Order verified!";
    }
  } catch (error) {
    console.error("An error occurred:", error);
    toast.textContent = "An error occurred. Please try again later.";
  }
});
