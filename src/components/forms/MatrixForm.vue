<template>
   <div class="matrixForm">
            <div id="matrixDimsInput">
                Matrix Size: <input type="text" id="mInput">x<input type="text" id="nInput">
                <button id="matrixDimsInputBtn" @click="generateMatrixInput">
                    submit
                </button>
            </div>
        
            <div v-if="matrix" id="matrixElemInput">
                <div v-for="rowIndex in rows" :key="`row-${rowIndex}`" class="row">
                    <input v-for="colIndex in cols" :key="`col-${colIndex}`" type="text" class="inputElem">
                </div>
                <button id="checkRef" @click="emitArrayValues">
                    submit
                </button>
            </div>

    </div>
</template>


<script>

export default {
    name: 'MatrixForm',
    data() {
        return {
            matrix: null,
            rows: 0,
            cols: 0
        }
    },
    methods: {
        generateMatrixInput() {
            this.resetMatrix();
            const rows = parseInt(document.getElementById('mInput').value); 
            const cols = parseInt(document.getElementById('nInput').value); 
            this.rows = rows;
            this.cols = cols;
            this.matrix = []; 

            for (let i = 0; i < rows; i++) {
                let row = []
                for (let j = 0; j < cols; j++) {
                    row.push('');
                }
                this.matrix.push(row);
            }
        },
        resetMatrix() {
            this.matrix = null;
            this.rows = 0;
            this.cols = 0;
        },
        emitArrayValues() {
            let matrixElemInput = document.getElementById('matrixElemInput');
            let rows = matrixElemInput.getElementsByClassName('row');
            
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let inputs = row.getElementsByClassName('inputElem');
                for (let j = 0; j < inputs.length; j++) {
                    let input = inputs[j];
                    let value = input.value;

                    // string to Float
                    value = parseFloat(value);
                    this.matrix[i][j] = value;
                }
            }
            
            this.$emit('matrixSubmitClicked', this.matrix);
        }
         
    }
}
</script>


<style scoped>

.matrixForm {
    display: flex;
    justify-content: center;
    align-items: center; /* Changed to center to align items vertically */
    flex-direction: column;
    width: 50%;
    max-width: 50%;
    height: 70vh;
    padding: 20px;
    background-color: #ebebef;
}

#matrixDimsInput input {
    width: 20px;
    height: 1.2em; 
    font-size: 16px; 
    padding: 0; 
    border: 1px solid #000; 
    vertical-align: middle; 
    margin: 0 2px; 
}

#matrixDimsInputBtn {
    margin-left: 1rem;
}


#matrixElemInput {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
}


.inputElem {
    width: 1.5rem;
    height: 1.5rem; 
    font-size: 16px; 
    padding: 0; 
    border: 1px solid #000; 
    margin-right: 0.2rem;
    margin-left: 0.2rem;

}

.row {
  display: flex; 
  justify-content: space-between; 
  flex-wrap: nowrap; 
  margin-top: 0.5rem;
}


</style>