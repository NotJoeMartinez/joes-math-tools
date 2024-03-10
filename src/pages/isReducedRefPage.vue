
<template>
    <div class="flexContainer">

        <div class="pageTitle">
            <h1>
                Is Reduced Row Echelon Form
            </h1>
        </div>

        <MatrixForm @matrixSubmitClicked="checkRref" />

        <div v-if="showResult" class="result">
            <div v-if="isRREF" style="background-color: green;">
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
import MatrixForm from '@/components/forms/MatrixForm.vue'
import { isReducedRowEchelon } from '@/scripts/matrixUtils.js'

export default {
    components:  {
        MatrixForm
    },
    data() {
        return {
            showResult: false,
            isRREF: false
        }
    }, 
    methods : {
        checkRref(matrix) {

            let result = isReducedRowEchelon(matrix)

            if (result) {
                this.isRREF = true;
                console.log("The matrix is in reduced row echelon form");
            } else {
                this.isRREF = false;
                console.log("The matrix is not in reduced row echelon form");
            }

            this.showResult = true;
        }
    }
}

</script>

<style scoped>
.flexContainer {
    display: flex;
    justify-content: flext-start;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #fff;
}

.result {
    display: flex;
}
</style>
