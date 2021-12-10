var canvas = document.getElementById('myCanvas');
   var gl = canvas.getContext('webgl');
   
function main(){

    var vertices = [
        //Front square
        -2, 0.5, 1,     0.1, 0.1, 0.1,    -1.25, -0.25, 1,
        -0.5, 0.5, 1,   0.1, 0.1, 0.1,    -1.25, -0.25, 1,
        -0.5, -1, 1,    0.1, 0.1, 0.1,    -1.25, -0.25, 1,
        -2, -1, 1,      0.1, 0.1, 0.1,    -1.25, -0.25, 1,
        //triangle front
        -2, 0.5, 1,     0.1, 0.1, 0.1,    -1.25, 0.6875, 0.95,
        -1, 0.875, 0.9, 0.1, 0.1, 0.1,    -1.25, 0.6875, 0.95,
        -0.5, 0.5, 1,   0.1, 0.1, 0.1,    -1.25, 0.6875, 0.95,
        //left side
        -2, 0.5, 1,     0.1, 0.1, 0.1,    -2, -0.25, 0.25,
        -2, 0.5, 0.5,   0.1, 0.1, 0.1,    -2, -0.25, 0.25,
        -2, -1, 0.5,    0.1, 0.1, 0.1,    -2, -0.25, 0.25,
        -2, -1,  1,     0.1, 0.1, 0.1,    -2, -0.25, 0.25,
        //right side
        -0.5, 0.5, 1,   0.1, 0.1, 0.1,    -0.5, -0.25, 0.25,
        -0.5, 0.5, 0.5, 0.1, 0.1, 0.1,    -0.5, -0.25, 0.25,
        -0.5, -1, 0.5,  0.1, 0.1, 0.1,    -0.5, -0.25, 0.25,
        -0.5, -1, 1,    0.1, 0.1, 0.1,    -0.5, -0.25, 0.25,
        //left roof
        -2, 0.5, 1,         0.1, 0.1, 0.1, -1.5, 0.6875, 0.75,
        -1, 0.875, 0.9,     0.1, 0.1, 0.1, -1.5, 0.6875, 0.75,
        -1.5, 0.875, 0.5,   0.1, 0.1, 0.1, -1.5, 0.6875, 0.75,
        -2, 0.5, 0.5,       0.1, 0.1, 0.1, -1.5, 0.6875, 0.75,
        //right roof
        -1, 0.875, 0.9,    0.1, 0.1, 0.1, -1, 0.6875, 0.75,
        -0.5, 0.5, 1,      0.1, 0.1, 0.1, -1, 0.6875, 0.75,
        -0.5, 0.5, 0.5,     0.1, 0.1, 0.1, -1, 0.6875, 0.75,
        -1.5, 0.875, 0.5,   0.1, 0.1, 0.1, -1, 0.6875, 0.75,
        //backtrapezium
        -2, 0.5, 0.5,       0.1, 0.1, 0.1, -1.25, -0.25, 0.5,
        -1.5, 0.875, 0.5,   0.1, 0.1, 0.1,  -1.25, -0.25, 0.5,
        -0.5, 0.5, 0.5,     0.1, 0.1, 0.1,  -1.25, -0.25, 0.5,
        -0.5, -1, 0.5,      0.1, 0.1, 0.1,  -1.25, -0.25, 0.5,
        -2, -1, 0.5,       0.1, 0.1, 0.1,  -1.25, -0.25, 0.5,
        //base
        -2, -1, 1,      0.1, 0.1, 0.1, -1.25, -1, 0.25,
        -0.5, -1, 1,    0.1, 0.1, 0.1, -1.25, -1, 0.25,
        -0.5, -1, 0.5,  0.1, 0.1, 0.1, -1.25, -1, 0.25,
        -2, -1, 0.5,    0.1, 0.1, 0.1, -1.25, -1, 0.25
    ];

    var vertices1 = [
        //Front square
        2, 0.5, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        0.5, -1, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        2, -1, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        //triangle front
        2, 0.5, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        1, 0.875, 0.4, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 1.25, -0.25, 0.5,
        //left side
        2, 0.5, 1, 0.1, 0.1, 0.1, 2, -0.25, 0.25,
        2, 0.5, 0.5, 0.1, 0.1, 0.1, 2, -0.25, 0.25,
        2, -1, 0.5, 0.1, 0.1, 0.1, 2, -0.25, 0.25,
        2, -1,  1, 0.1, 0.1, 0.1, 2, -0.25, 0.25,
        //right side
        0.5, 0.5, 1, 0.1, 0.1, 0.1, 0.5, -0.25, 0.25,
        0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 0.5, -0.25, 0.25,
        0.5, -1, 0.5, 0.1, 0.1, 0.1, 0.5, -0.25, 0.25,
        0.5, -1, 1, 0.1, 0.1, 0.1, 0.5, -0.25, 0.25,
        //left roof
        2, 0.5, 1, 0.1, 0.1, 0.1, 1.5, 0.6875, 0.25,
        2, 0.5, 0.5, 0.1, 0.1, 0.1, 1.5, 0.6875, 0.25,
        1, 0.875, 0.4, 0.1, 0.1, 0.1, 1.5, 0.6875, 0.25,
        1.5, 0.875, 1, 0.1, 0.1, 0.1, 1.5, 0.6875, 0.25,
        //right roof
        1, 0.875, 0.4, 0.1, 0.1, 0.1, 1, 0.6875, 0.25,
        1.5, 0.875, 1, 0.1, 0.1, 0.1, 1, 0.6875, 0.25,
        0.5, 0.5, 1, 0.1, 0.1, 0.1, 1, 0.6875, 0.25,
        0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 1, 0.6875, 0.25,
        //backtrapezium
        2, 0.5, 1, 0.1, 0.1, 0.1, 1.25, -0.25, 1,
        1.5, 0.875, 1, 0.1, 0.1, 0.1, 1.25, -0.25, 1,
        0.5, 0.5, 1, 0.1, 0.1, 0.1, 1.25, -0.25, 1,
        0.5, -1, 1, 0.1, 0.1, 0.1, 1.25, -0.25, 1,
        2, -1, 1, 0.1, 0.1, 0.1, 1.25, -0.25, 1,
        //base
        2, -1, 1, 0.1, 0.1, 0.1, 1.25, -1, 0.75,
        0.5, -1, 1, 0.1, 0.1, 0.1, 1.25, -1, 0.75,
        0.5, -1, 0.5, 0.1, 0.1, 0.1, 1.25, -1, 0.75,
        2, -1, 0.5, 0.1, 0.1, 0.1, 1.25, -1, 0.75
    ];

    var vertices3 = [
        0.05, 0.05, -0.1, 1, 1, 1, -0.1, -0.1, -0.1,
        0.05, -0.05, -0.1, 1, 1, 1, -0.1, -0.1, -0.1,
        -0.05, -0.05, -0.1, 1, 1, 1, -0.1, -0.1, -0.1,
        -0.05, 0.05, -0.1, 1, 1, 1, -0.1, -0.1, -0.1,

        0.05, 0.05, -0.1, 1, 1, 1, 0.5, 0, -0.05,
        0.05, -0.05, -0.1, 1, 1, 1, 0.5, 0, -0.05,
        0.05, -0.05, 0, 1, 1, 1, 0.5, 0, -0.05,
        0.05, 0.05, 0, 1, 1, 1, 0.5, 0, -0.05,

        -0.05, 0.05, -0.1, 1, 1, 1, -0.05, 0, -0.05,
        -0.05, -0.05, -0.1, 1, 1, 1, -0.05, 0, -0.05,
        -0.05, -0.05, 0, 1, 1, 1, -0.05, 0, -0.05,
        -0.05, 0.05, 0, 1, 1, 1, -0.05, 0, -0.05,

        0.05, 0.05, 0, 1, 1, 1, 0, 0, 0,
        0.05, -0.05, 0, 1, 1, 1, 0, 0, 0,
        -0.05, -0.05, 0, 1, 1, 1, 0, 0, 0,
        -0.05, 0.05, 0, 1, 1, 1, 0, 0, 0,

        -0.05, 0.05, -0.1, 1, 1, 1, 0, 0.05, -0.05,
        0.05, 0.05, -0.1, 1, 1, 1, 0, 0.05, -0.05,
        0.05, 0.05, 0, 1, 1, 1, 0, 0.05, -0.05,
        -0.05, 0.05, 0, 1, 1, 1, 0, 0.05, -0.05,

        0.05, -0.05, -0.1, 1, 1, 1, 0, -0.05, -0.05,
        -0.05, -0.05, -0.1, 1, 1, 1, 0, -0.05, -0.05,
        -0.05, -0.05, 0, 1, 1, 1, 0, -0.05, -0.05,
        0.05, -0.05, 0, 1, 1, 1, 0, -0.05, -0.05
    ];

    /*
        Color : #029029
        RGB
        R : 0.0078125
        G : 0.5625
        B : 0.16015625
    */
    var vertices4 = [
        -10, -1, 1, 0.0078125, 0.5625, 0.16015625, 0,0,0,
        10, -1, 1, 0.0078125, 0.5625, 0.16015625, 0,0,0,
        10, -1, -19, 0.0078125, 0.5625, 0.16015625, 0,0,0,
        -10, -1, -19, 0.0078125, 0.5625, 0.16015625, 0,0,0
    ];

    var indices = [
        0, 1, 2, 0, 2, 3,
        4, 5, 6,
        7, 8, 9, 7, 9, 10,
        11, 12, 13, 11, 13, 14,
        15, 16, 17, 15, 17, 18,
        19, 20, 21, 19, 21, 22,
        23, 24, 25, 23, 25, 26, 23, 26, 27,
        28, 29, 30, 28, 30, 31
    ];

    var indices1 = [
        32, 33, 34, 32, 34, 35,
        36, 37, 38,
        39, 40, 41, 39, 41, 42,
        43, 44, 45, 43, 45, 46,
        47, 48, 49, 47, 49, 50,
        51, 52, 53, 51, 53, 54,
        55, 56, 57, 55, 57, 58, 55, 58, 59,
        60, 61, 62, 60, 62, 63
    ];

    var indices3 = [
        64, 65, 66, 64, 66, 67,
        68, 69, 70, 68, 70, 71,
        72, 73, 74, 72, 74, 75,
        76, 77, 78, 76, 78, 79,
        80, 81, 82, 80, 82, 83,
        84, 85, 86, 84, 86, 87
    ];

    var indices4 = [
        88, 89, 90,
        88, 90, 91
    ];

    var vertices2 = [
        ...vertices, ...vertices1, ...vertices3, ...vertices4
    ];

    var indices2 = [
        ...indices, ...indices1, ...indices3, ...indices4
    ];

    var vertexbuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexbuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices2), gl.STATIC_DRAW);
    
    var vertexShaderSource = `
    attribute vec3 aPosition;
    attribute vec3 aColor;
    attribute vec3 aNormal;
    varying vec3 vColor;
    varying vec3 vNormal;
    uniform mat4 uModel;
    uniform mat4 uView;
    uniform mat4 uProjection;
    varying vec3 vPosition;
    void main() {
        gl_Position = uProjection * uView * uModel * (vec4(aPosition * 2.0 / 3.0, 1.0));
        vColor = aColor;
        vNormal = aNormal;
        vPosition = (uModel * (vec4(aPosition * 2. / 3., 1.))).xyz;
    }
    `;

    var fragmentShaderSource = `
    precision mediump float;
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform vec3 uLightConstant;
        uniform float uAmbientIntensity;
        uniform vec3 uLightPosition;
        uniform mat3 uNormalModel;
        uniform vec3 uViewerPosition;
        uniform mat4 uChangepos;
        uniform mat4 transfer;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0., 0., 0.);
            if (cosTheta > 0.) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 reflector = reflect(-lightDirection, normalizedNormal);
            vec3 normalizedReflector = normalize(reflector);
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0; 
                float specularIntensity = pow(cosPhi, shininessConstant); 
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.);
        }
`;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);
    //gl.linkProgram(shaderProgram1);

    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal, 
        3, 
        gl.FLOAT, 
        false, 
        9 * Float32Array.BYTES_PER_ELEMENT, 
        6 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aNormal);
   
    //var speed = 0.0029 ;

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    
    var projection = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        projection,
        Math.PI / 3,
        1,
        0.5,
        10
    );
    gl.uniformMatrix4fv(uProjection, false, projection);
    
    var view = glMatrix.mat4.create();
    var camera = [0,0,3];
    var camera2 = [0,0,0];
    var speedcam = [0,0,0/60];
    //var speed = [0/600, 0/60, 0/60];
    //var change = [0, 0, 0];
    var freeze = false;
    var xambient = 0, yambient = 0, zambient = 0;
    var intense = 0;
    var nrp = 0;
    var rightcube = 0;
    var changecube = [0,0,0];
    var changedube = [0,0,0];
    
    function onKeydown(event) {
        if (event.keyCode == 32){
            if(xambient == 0 && yambient == 0 && zambient == 0 && intense == 0 && nrp == 0 && rightcube == 0){
                xambient = 1;
                yambient = 1;
                zambient = 1;
                intense = 1;
                nrp = 0.029;
                rightcube = 8.62;
            }
            else if (xambient == 1 && yambient == 1 && zambient == 1 && intense == 1 && nrp == 0.029 && rightcube == 8.62){
                xambient = 0;
                yambient = 0;
                zambient = 0;
                intense = 0;
                nrp = 0;
                rightcube = 0;
            }
        }
        
        if(event.keyCode == 38)
        {
            speedcam[2] = -0.029;
        }
        if(event.keyCode == 40)
        {
            speedcam[2] = 0.029;
        }
        if(event.keyCode == 37)
        {
            speedcam[0] = -0.029;
        }
        if(event.keyCode == 39)
        {
            speedcam[0] = 0.029;
        }
        if(event.keyCode == 87)
        {
            changecube[1] = 0.029;
        }
        if(event.keyCode == 83)
        {
            changecube[1] = -0.029;
        }
        if(event.keyCode == 65)
        {
            changecube[0] = -0.029;
        }
        if(event.keyCode == 68)
        {
            changecube[0] = 0.029;
        }
    }
    
    function onKeyup(event) {
        if(event.keyCode == 38)
            {
                speedcam[2] = 0;
            }
            if(event.keyCode == 40)
            {
                speedcam[2] = 0;
            }
        if(event.keyCode == 37)
        {
            speedcam[0] = 0;
        }
        if(event.keyCode == 39)
        {
            speedcam[0] = 0;
        }
        if(event.keyCode == 87)
        {
            changecube[1] = 0;
        }
        if(event.keyCode == 83)
        {
            changecube[1] = 0;
        }
        if(event.keyCode == 65)
        {
            changecube[0] = 0;
        }
        if(event.keyCode == 68)
        {
            changecube[0] = 0;
        }
    }
    
    document.addEventListener("keydown", onKeydown, false);
    document.addEventListener("keyup", onKeyup, true);
    

    function render(){
        if(!freeze) {
            camera[0] = camera[0] + speedcam[0];
            camera[2] = camera[2] + speedcam[2];
            changedube[0] = changedube[0] + changecube[0];
            changedube[1] = changedube[1] + changecube[1];
            //camera[0] = camera[0] + speedcam[0];
            glMatrix.mat4.lookAt(
                view,
                camera,      // camera position
                camera2,      // the point where camera looks at
                [0, 1, 0]       // up vector of the camera
            );
            gl.uniformMatrix4fv(uView, false, view);
            
        
            var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
            var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
            
            var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
            
            var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
            var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");
            gl.uniform3fv(uViewerPosition, camera);
            //change[1] = change[1] + speed[1];

            var model = glMatrix.mat4.create();

            //glMatrix.mat4.translate(model, model, change);
            
            gl.uniformMatrix4fv(uModel, false, model);

            var normalModel = glMatrix.mat3.create();
            glMatrix.mat3.normalFromMat4(normalModel, model);
            gl.uniformMatrix3fv(uNormalModel, false, normalModel);

            var whitecube = [
                1.0, 0.0, 0.0, 0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                changedube[0], changedube[1], 0.0, 1.0
            ];

            gl.enable(gl.DEPTH_TEST);
            gl.clearColor(0.5, 0.5, 0.5, 1);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.drawElements(gl.TRIANGLES, indices4.length, gl.UNSIGNED_SHORT, 264);
            gl.uniform3fv(uLightConstant, [0, 0, 0]);
            gl.uniform1f(uAmbientIntensity, nrp)
            gl.drawElements(gl.TRIANGLES, 48, gl.UNSIGNED_SHORT, 0);
            gl.uniform3fv(uLightConstant, [rightcube, rightcube, rightcube]);
            gl.uniform1f(uAmbientIntensity, nrp);
            gl.drawElements(gl.TRIANGLES, 48, gl.UNSIGNED_SHORT, 96);

            gl.uniformMatrix4fv(uModel, false, whitecube);
            gl.uniform3fv(uLightConstant, [xambient, yambient, zambient]);
            gl.uniform1f(uAmbientIntensity, intense);
            gl.uniform3fv(uLightPosition, [0.0, 0.0, 0.0]);
            gl.drawElements(gl.TRIANGLES, indices3.length, gl.UNSIGNED_SHORT, 192);
            
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

//Thank you, Mr. Hadziq
//But my laptop begs to differ
//In terms of speed