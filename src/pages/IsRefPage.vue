<template>
    <div id="flexContainer">
        <MatrixForm
            @matrixSubmitClicked="checkRef" 
        />


        <div v-if="showResult" class="result">
            <div v-if="isRowEchelonForm" style="background-color: green;">
                <p>
                    The matrix is in row echelon form
                </p>
            </div>

            <div v-else  style="background-color: red;">
                <p>
                    The matrix is not in row echelon form
                </p>
            </div>
        </div>

    </div>
</template>

<script>
import  MatrixForm  from '@/components/forms/MatrixForm.vue';
import { isRowEchelonForm } from '@/scripts/matrixUtils.js';
export default {
    components: {
        MatrixForm 
    },
    data() {
        return {
            showResult: false,
            isRowEchelonForm: false
        }
    },
    methods: {
        checkRef(matrix) {

            let result = isRowEchelonForm(matrix);
            this.showResult = true;
            if (result) {
                this.isRowEchelonForm = true;
                console.log('The matrix is in row echelon form');
            } else {
                this.isRowEchelonForm = false;
                console.log('The matrix is not in row echelon form');
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
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
}
.result {
    display: flex;
}
</style>