var canvas = document.getElementById('myCanvas');
   var gl = canvas.getContext('webgl');
   gl.clearColor(1, 1, 1, 1);
   gl.clear(gl.COLOR_BUFFER_BIT);
function main(){
   

   //titik (koordinat biasa, tergantung banyaknya)
    //(rgb)
    var vertices = [
        // 0.5, -0.5, 1.0, 0, 0,
        // 1, -0.5, 1.0, 0, 0,
        // 0.5, 0.5, 1.0, 0, 0,
        // -1, -0.5, 0, 1.0, 0,
        // -0.5, -0.5, 0, 1.0, 0,
        // -0.5, 0.5, 0, 1.0, 0
        // 0.5, -0.5, 0.0, 1.0, 0.0,    // Point B
        // -0.5, -0.5, 1.0, 0.0, 0.0,    // Point A
        // -0.5,  0.5, 0.0, 0.0, 1.0,    // Point C
        //  0.5,  0.5, 1.0, 1.0, 1.0,    // Point D
        //  0.5, -0.5, 0.0, 1.0, 0.0,    // Point B
        // -0.5,  0.5, 0.0, 0.0, 1.0     // Point C
        0.3, -0.75, 0.0, .0, 0.0,
        0.285, -0.25, 0.0, .0, 0.0,
        0.275, 0.3, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.275, 0.3, 0.0, .0, 0.0,
        0.275, 0.55, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.275, 0.55, 0.0, .0, 0.0,
        0.2875, 0.7, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.2875, 0.7, 0.0, .0, 0.0,
        0.3, 0.75, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.3, 0.75, 0.0, .0, 0.0,
        0.35, 0.8, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.35, 0.8, 0.0, .0, 0.0,
        0.5, 0.875, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.5, 0.875, 0.0, .0, 0.0,
        0.6, 0.875, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.6, 0.875, 0.0, .0, 0.0,
        0.65, 0.85, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.65, 0.85, 0.0, .0, 0.0,
        0.675, 0.8, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.675, 0.8, 0.0, .0, 0.0,
        0.7, 0.75, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.7, 0.75, 0.0, .0, 0.0,
        0.705, 0.5, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.705, 0.5, 0.0, .0, 0.0,
        0.7, -0.2, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.7, -0.2, 0.0, .0, 0.0,
        0.675, -0.75, 0.0,.0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.675, -0.75, 0.0,.0, 0.0,
        0.6625, -0.8, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.6625, -0.8, 0.0, .0, 0.0,
        0.575, -0.9, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.575, -0.9, 0.0, .0, 0.0,
        0.45, -0.875, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.45, -0.875, 0.0, .0, 0.0,
        0.375, -0.85, 0.0, .0, 0.0,

        0.3, -0.75, 0.0, .0, 0.0,
        0.375, -0.85, 0.0, .0, 0.0,
        0.375, -0.8, 0.0, .0, 0.0,

        0.65, 0.85, 0.125, 0.125, 0.125,
        0.5, 0.875, 0.0, 0.0, 0.0,
        0.45, 0.7, 0.0, 0.0, 0.0,

        0.65, 0.85, 0.125, 0.125, 0.125,
        0.5, 0.875, 0.0, 0.0, 0.0,
        0.55, 0.875, 0.0, 0.0, 0.0,

        0.65, 0.85, 0.125, 0.125, 0.125,
        0.45, 0.7, 0.005, 0.005, 0.005,
        0.7, 0.75, 0.005, 0.005, 0.005,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.215, -0.25, 0.0, .0, 0.0,
        // -0.225, 0.3, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.225, 0.3, 0.0, .0, 0.0,
        // -0.225, 0.55, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.225, 0.55, 0.0, .0, 0.0,
        // -0.2125, 0.7, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.2125, 0.7, 0.0, .0, 0.0,
        // -0.2, 0.75, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.2, 0.75, 0.0, .0, 0.0,
        // -0.15, 0.8, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.15, 0.8, 0.0, .0, 0.0,
        // 0.0, 0.85, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.0, 0.85, 0.0, .0, 0.0,
        // 0.1, 0.875, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.1, 0.875, 0.0, .0, 0.0,
        // 0.15, 0.85, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.15, 0.85, 0.0, .0, 0.0,
        // 0.175, 0.8, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.175, 0.8, 0.0, .0, 0.0,
        // 0.2, 0.75, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.2, 0.75, 0.0, .0, 0.0,
        // 0.205, 0.5, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.205, 0.5, 0.0, .0, 0.0,
        // 0.2, -0.2, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.2, -0.2, 0.0, .0, 0.0,
        // 0.175, -0.75, 0.0,.0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.175, -0.75, 0.0,.0, 0.0,
        // 0.1625, -0.8, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.1625, -0.8, 0.0, .0, 0.0,
        // 0.075, -0.9, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // 0.075, -0.9, 0.0, .0, 0.0,
        // -0.05, -0.875, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.05, -0.875, 0.0, .0, 0.0,
        // -0.125, -0.85, 0.0, .0, 0.0,

        // -0.2, -0.75, 0.0, .0, 0.0,
        // -0.125, -0.85, 0.0, .0, 0.0,
        // -0.175, -0.8, 0.0, .0, 0.0,

        // 0.15, 0.85, 0.125, 0.125, 0.125,
        // 0.0, 0.85, 0.0, 0.0, 0.0,
        // -0.05, 0.7, 0.0, 0.0, 0.0,

        // 0.15, 0.85, 0.125, 0.125, 0.125,
        // 0.0, 0.85, 0.0, 0.0, 0.0,
        // 0.05, 0.875, 0.0, 0.0, 0.0,

        // 0.15, 0.85, 0.125, 0.125, 0.125,
        // -0.05, 0.7, 0.005, 0.005, 0.005,
        // 0.2, 0.75, 0.005, 0.005, 0.005,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.85, 0.6, 0.0, 0.0, 0.0,
        -0.775, 0.75, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.775, 0.75, 0.0, 0.0, 0.0,
        -0.65, 0.9, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.65, 0.9, 0.0, 0.0, 0.0,
        -0.6, 0.925, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.6, 0.925, 0.0, 0.0, 0.0,
        -0.55, 0.9, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.55, 0.9, 0.0, 0.0, 0.0,
        -0.4, 0.8, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.4, 0.8, 0.0, 0.0, 0.0,
        -0.3, 0.7, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.3, 0.7, 0.0, 0.0, 0.0,
        -0.275, 0.65, 0.0, 0.0, 0.0,
        
        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.275, 0.65, 0.0, 0.0, 0.0,
        -0.225, 0.05, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.225, 0.05, 0.0, 0.0, 0.0,
        -0.25, -0.75, 0.0, 0.0, 0.0,
        
        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.25, -0.75, 0.0, 0.0, 0.0,
        -0.3375, -0.9, 0.0, 0.0, 0.0,

        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.3375, -0.9, 0.0, 0.0, 0.0,
        -0.375, -0.95, 0.0, 0.0, 0.0,
        
        -0.775, -0.9, 0.0, 0.0, 0.0,
        -0.375, -0.95, 0.0, 0.0, 0.0,
        -0.65, -0.95, .0, 0.0, 0.0,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.6, 0.925, 0.2, 0.2, 0.2,
        -0.4, 0.8, 0.2, 0.2, 0.2,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.4, 0.8, 0.2, 0.2, 0.2,
        -0.275, 0.65, 0.0, 0.0, 0.0,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.275, 0.65, 0.0, 0.0, 0.0,
        -0.23, 0.1, 0.0, 0.0, 0.0,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.23, 0.1, 0.0, 0.0, 0.0,
        -0.425, 0.35, 0.0, 0.0, 0.0,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.425, 0.35, 0.0, 0.0, 0.0,
        -0.8125, -0.2, 0.0, 0.0, 0.0,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.8125, -0.2, 0.0, 0.0, 0.0,
        -0.85, 0.6, 0.05, 0.05, 0.05,

        -0.65, 0.9, 0.2, 0.2, 0.2,
        -0.85, 0.6, 0.05, 0.05, 0.05,
        -0.775, 0.75, 0.05, 0.05, 0.05
    ];

    var vertices1;

    // vertices.foreach((value, index) => {
    //     if(index % 5 === 0){
    //         value += 0.5
    //     }
    // })

    // for (let index = 0; index < vertices.length; index + 5) {
    //     vertices[index] *= 0.5;
    // }
    //linked list vertice
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // var vertices1 = [
    //     -1, -0.5, 0, 1.0, 0,
    //     -0.5, -0.5, 0, 1.0, 0,
    //     -0.5, 0.5, 0, 1.0, 0
    // ];
    
    // var buffer1 = gl.createBuffer();
    // gl.bindBuffer(gl.ARRAY_BUFFER + 3, buffer1);
    // gl.bufferData(gl.ARRAY_BUFFER + 3, new Float32Array(vertices1), gl.STATIC_DRAW);

   //Bentuk dan posisi kotak
   //vec4(Horizontal, vertical, ??, harus 1 supaya ada)
//     var vertexShaderSource = document.getElementById("vertexShaderSource").text;
//         //warna kotak
//    var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform vec2 uChange;
        void main() {
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
    precision mediump float;
    varying vec3 vColor;
    void main() {
        gl_FragColor = vec4(vColor, 1.0);
    }
`;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    // var vertexShaderSource1 = `
    //     attribute vec2 aPosition1;
    //     attribute vec3 aColor1;
    //     varying vec3 vColor1;
    //     uniform vec2 uChange1;
    //     void main() {
    //         gl_PointSize = 40.0;
    //         gl_Position = vec4(aPosition1 + uChange1, 0.0, 1.0);
    //         vColor1 = aColor1;
    //     }
    // `;

    // var vertexShader1 = gl.createShader(gl.VERTEX_SHADER);
    // gl.shaderSource(vertexShader1, vertexShaderSource1);
    // gl.compileShader(vertexShader1);

    

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // var fragmentShaderSource1 = `
    //     precision mediump float;
    //     varying vec3 vColor1;
    //     void main() {
    //         gl_FragColor = vec4(vColor1, 1.0);
    //     }
    // `;

    // var fragmentShader1 = gl.createShader(gl.FRAGMENT_SHADER);
    // gl.shaderSource(fragmentShader1, fragmentShaderSource1);
    // gl.compileShader(fragmentShader1);

    var shaderProgram = gl.createProgram();
    //var shaderProgram1 = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // gl.attachShader(shaderProgram1, vertexShader1);
    // gl.attachShader(shaderProgram1, fragmentShader1);

    gl.linkProgram(shaderProgram);
    //gl.linkProgram(shaderProgram1);

    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);
    // var aPosition1 = gl.getAttribLocation(shaderProgram1, "aPosition");
    // gl.vertexAttribPointer(
    //     aPosition1,
    //     2,
    //     gl.FLOAT,
    //     false,
    //     5 * Float32Array.BYTES_PER_ELEMENT,
    //     0
    // );
    // gl.enableVertexAttribArray(aPosition1);

    // var aColor1 = gl.getAttribLocation(shaderProgram1, "aColor");
    // gl.vertexAttribPointer(
    //     aColor1,
    //     3,
    //     gl.FLOAT,
    //     false,
    //     5 * Float32Array.BYTES_PER_ELEMENT,
    //     2 * Float32Array.BYTES_PER_ELEMENT
    // );
    // gl.enableVertexAttribArray(aColor1);

    // var freeze = false;
    // function onMouseClick(event){
    //     freeze = !freeze;
    // }
    // document.addEventListener("click", onMouseClick);

    // var framerate = 60;
    // var speedRaw = [0, 0];
    // var speed = [];

    // speed[0] = speedRaw[0] / framerate / 10;
    // speed[1] = speedRaw[1] / framerate / 10;
   
    var speed = [0, 174/60000];
    // //var speed1 = [0, 1/600];
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");
    // //var uChange1 = gl.getUniformLocation(shaderProgram1, "uChange");
    var change = [0,0];
    // //var change1 = [0,0];
    // var speedRaw = 1;
    // var speed = speedRaw / 600;
    // var change = 0;
    // var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    //gl.drawArrays(gl.TRIANGLES, 0,6);
    function render(){
        //gl.useProgram(shaderProgram);
        //gl.clearColor(red, green, blue, alpha)
        //if (!freeze) {
            
            //gl.drawArrays(gl.TRIANGLE, 0, 3);
        //gl.useProgram(shaderProgram1);
        if(change[1] > 0.125 || change[1] < -0.1)
        {
            speed[0] = -speed[0];
            speed[1] = -speed[1];
        }
        change[1] = change[1] + speed[1];
        // vertices.forEach((value, index) => {
        //     if(index >= 270) {
        //         value += speed[1];
        //     }
        // })
        
            // change[0] = change[0] + speed[0];
            // change[1] = change[1] + speed[1];
            // // change1[0] = change1[0] + speed1[0];
            // // change1[1] = change1[1] + speed1[1];
            gl.uniform2fv(uChange, change);
            //gl.uniform2fv(uChange1, change1);
            //gl.drawArrays(gl.TRIANGLE_FAN, 0, 6);
            //gl.drawArrays(gl.TRIANGLE, 3,3);
            // if(change >= 0.5 || change <= -0.5) speed = -speed;
            // change = change + speed;
            // gl.uniform1f(uChange, change);
        //}
        // else {
            
        //     gl.useProgram(shaderProgram1);
        // }
        //if (change >= 0.5 || change <= -0.5) speed = -speed;
        //change = change + speed;
        // gl.uniform1f(uChange, change);
        
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 54;
        
        gl.drawArrays(primitive, offset, nVertex);
        //gl.drawArrays(gl.TRIANGLE_FAN, 54, 9);
        gl.drawArrays(gl.TRIANGLES, 54, 57);
        //gl.drawArrays(gl.TRIANGLES, 0,6);
        gl.drawArrays(gl.TRIANGLES, 111, 9);
        requestAnimationFrame(render);
        
    }
    

    //change = [0.5,0];

        //gl.drawArrays(gl.POINT, 63, 0);
    
    //render();
    //setInterval(render, 1000/framerate);
    requestAnimationFrame(render);
}
