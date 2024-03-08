<template>
    <div id="flexContainer">
        <div class="matrixForm">
            <div id="matrixDimsInput">
                Matrix Size: <input type="text" id="mInput">x<input type="text" id="nInput">
                <button id="matrixDimsInputBtn" @click="generateMatrixInput">
                    submit
                </button>
            </div>
        

            <div id="matrixElemInput">
                <div v-for="rowIndex in rows" :key="`row-${rowIndex}`" class="row">
                    <input v-for="colIndex in cols" :key="`col-${colIndex}`" type="text" class="inputElem">
                </div>
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
            this.resetMatrix();
            const rows = parseInt(document.getElementById('mInput').value); 
            const cols = parseInt(document.getElementById('nInput').value); 
            this.rows = rows;
            this.cols = cols;
            console.log(rows, cols);    

            this.matrix = []; 

            for (let i = 0; i < rows; i++) {
                let row = []
                for (let j = 0; j < cols; j++) {
                    row.push('');
                }
                this.matrix.push(row);
            }
            console.log(this.matrix);
        },

        resetMatrix() {
            this.matrix = null;
            this.rows = 0;
            this.cols = 0;
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