/**
 * ProductPulse Transition Detector
 * Finds the lowest point inside a rotated sorted dataset.
 */

function findLowestTransitionPoint(values) {
    let left = 0;
    let right = values.length - 1;

    while (left < right) {
        const middle = Math.floor(
            (left + right) / 2
        );

        // Minimum exists after middle
        if (values[middle] > values[right]) {
            left = middle + 1;
        } 
        // Minimum is middle or before it
        else {
            right = middle;
        }
    }

    return values[left];
}


module.exports = {
    findLowestTransitionPoint
};
