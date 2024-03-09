<template>
    <div id="flexContainer">
        <MatrixForm
            @matrixSubmitClicked="checkRef" 
        />
    </div>
</template>

<script>
import  MatrixForm  from '@/components/forms/MatrixForm.vue';
import { isRowEchelonForm } from '@/scripts/matrixUtils.js';
export default {
    components: {
        MatrixForm 
    },
    methods: {
        checkRef(matrix) {

            let result = isRowEchelonForm(matrix);
            if (result) {
                alert('The matrix is in row echelon form');
            } else {
                alert('The matrix is not in row echelon form');
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
</style>