//Points for fingers
const fingerJoints = {
    thumb: [0, 1, 2, 3, 4], 
    indexFinger: [0, 5, 6, 7, 8], 
    middleFinger: [0, 9, 10, 11, 12], 
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]
};

//Drawing function
export const drawHand = (predictions, ctx) => {
    //Check if there are any predictions 
    if(predictions.length > 0){
        //Loop through each prediction 
        predictions.forEach(prediction => {
            //Grab landmarks
            const landmarks = prediction.landmarks;

                //Loop through fingers
                for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
                    
                    let finger = Object.keys(fingerJoints)[j];
                    
                    //Loop through pairs of joints
                    for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
                        //Get pairs of joints 
                        const currJointMarker = fingerJoints[finger][k];
                        const nextJointMarker = fingerJoints[finger][k+1];

                        //Draw path
                        ctx.beginPath();
                        ctx.moveTo(
                            landmarks[currJointMarker][0],
                            landmarks[currJointMarker][1]
                        );
                        ctx.lineTo(
                            landmarks[nextJointMarker][0],
                            landmarks[nextJointMarker][1]
                        );
                        ctx.strokeStyle = 'green';
                        ctx.lineWidth = 4;
                        ctx.stroke(); //Render the path    
                    }
                }

            //Loop through landmarks and draw them
            for (let i = 0; i < landmarks.length; i++) {
                //Get x point
                const x = landmarks[i][0];
                
                //Get y point
                const y = landmarks[i][1];
                
                //Start drawing
                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 3*Math.PI);

                //Set line color
                ctx.fillStyle = 'red';
                ctx.fill();     //fill the circle
            }
        })
    }
}

/**
 * ctx = canvas
 * 
 */