<template>
    <div id="flexContainer">
        <div class="matrixForm">
            <div id="matrixDimsInput">
                Matrix Size: <input type="text">x<input type="text">
                <button id="matrixDimsInputBtn" @click="generateMatrixInput">
                    submit
                </button>
            </div>
        
            <div id="matrixElemInput">
            </div>
        </div>
  
    </div>
</template>

<script>
export default {
    name: 'IsRef',
    data() {
        return {
            matrix: null,
            rows: 0,
            cols: 0
        }
    },
    methods: {
        generateMatrixInput() {
            let rows = document.querySelector('input[type="text"]').value;
            let cols = document.querySelector('input[type="text"]').nextElementSibling.value;

            let matrixElemInput = document.getElementById('matrixElemInput');


            for (let i = 0; i < rows; i++) {
                let row = document.createElement('div');
                row.setAttribute("class", "row");
                for (let j = 0; j < cols; j++) {
                    let input = document.createElement('input');
                    input.setAttribute("type", "text");
                    input.setAttribute("class", "inputElem");
                    row.appendChild(input);
                }
                matrixElemInput.appendChild(row);
            }

        }
    }
}


</script>


<style scoped>
#flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.matrixForm {
    display: flex;
    justify-content: center;
    align-items: center; /* Changed to center to align items vertically */
    flex-direction: column;
    width: 25%;
    max-width: 50%;
    height: 70vh;
    padding: 20px;
    background-color: #ebebef;
}

#matrixDimsInput input {
    width: 20px;
    height: 1.2em; /* Set the height to match your line-height, assuming default line-height is around 1.2 */
    font-size: 16px; /* Adjust this to match your text font size */
    padding: 0; /* Remove default padding */
    border: 1px solid #000; /* Default style, adjust as needed */
    vertical-align: middle; /* Aligns input vertically with inline(-block) elements like text */
    margin: 0 2px; /* Optional: add some space around your inputs */
}

#matrixDimsInputBtn {
    margin-left: 1rem;
}


#matrixElemInput {
    display: flex;
    flex-direction: column;
}

.row {
  display: flex; 
  justify-content: space-between; 
  flex-wrap: nowrap; 
}
</style>