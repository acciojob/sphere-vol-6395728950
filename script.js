function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;

    // Convert input to a number
    radius = parseFloat(radius);

    // Validate input (must be a non-negative number)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate the volume using the formula V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round result to 4 decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume
    document.getElementById("volume").value = volume;
}
 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
