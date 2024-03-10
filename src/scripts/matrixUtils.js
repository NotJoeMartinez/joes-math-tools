export function isRowEchelonForm(matrix) {

    let lastPivotColumn = -1; // Tracks the column of the last pivot found

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let pivotFound = false;

        for (let j = 0; j < row.length; j++) {
            if (row[j] !== 0) { // Check for a non-zero element to identify a pivot
                // If this pivot is not strictly to the right of the last pivot, return false
                if (j <= lastPivotColumn) return false;
                lastPivotColumn = j; // Update the column index of the last pivot
                pivotFound = true;
                break; // Move to the next row after finding the pivot
            }
        }

        // If no pivot found in a non-zero row, and it's not strictly zeros below
        if (!pivotFound && i < matrix.length - 1) {
            for (let k = i + 1; k < matrix.length; k++) {
                if (matrix[k].some(val => val !== 0)) {
                    return false; // Found a non-zero row below, which violates REF
                }
            }
        }
    }

    // Passed all checks, the matrix is in row echelon form
    return true;
}


export function isReducedRowEchelon(matrix) {
    let lastLeadingOneIndex = -1;

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let foundLeadingOne = false;

        for (let j = 0; j < row.length; j++) {
            if (row[j] === 1) {
                // Check if the leading 1 is the only non-zero entry in its column.
                for (let k = 0; k < matrix.length; k++) {
                    if (k !== i && matrix[k][j] !== 0) {
                        return false; // Found another non-zero entry in the column.
                    }
                }

                // Check if the leading 1 is to the right of the leading 1 in the row above it.
                if (j <= lastLeadingOneIndex) {
                    return false;
                }

                lastLeadingOneIndex = j;
                foundLeadingOne = true;
                break; // Exit after finding the first leading 1 in the row.
            } else if (row[j] !== 0) {
                // Found a non-zero entry before the leading 1.
                return false;
            }
        }

        // If the row is not all zeros and we didn't find a leading 1.
        if (!foundLeadingOne && row.some(val => val !== 0)) {
            return false;
        }
    }

    return true; // All conditions met.
}
