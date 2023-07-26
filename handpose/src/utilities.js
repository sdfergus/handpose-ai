//Drawing function
export const drawHand = (predictions, ctx) => {
    //Check if there are any predictions 
    if(predictions.length > 0){
        //Loop through each prediction 
        predictions.forEach(prediction => {
            //Grab landmarks
            const landmarks = prediction.landmarks;

            //Loop through landmarks and draw them
            for (let i = 0; i < landmarks.length; i++) {
                //Get x point
                const x = landmarks[i][0];
                
                //Get y point
                const y = landmarks[i][1];
                
                //Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 3*Math.PI);

                //Set line color
                ctx.fillStyle = 'indigo';
                ctx.fill();     //fill the circle
            }
        })
    }
}

/**
 * ctx = canvas
 * 
 */