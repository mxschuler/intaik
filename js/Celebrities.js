let celebrityIndexes = {
    alcohol: 0,
    nicotine: 0,
    marijuana: 0,
    opioids: 0,
    cocaine: 0,
    inhalants: 0
};

function showNextCelebrity(drug) {
    const section = document.getElementById(`${drug}`).querySelector('.drug-celebrity-box');
    const celebrityBoxes = section.querySelectorAll('.celebrity-box');

    // Get the current index
    let currentIndex = celebrityIndexes[drug];

    // Hide the current celebrity box
    celebrityBoxes[currentIndex].style.display = 'none';

    // Calculate the next index (wrap around using modulus)
    let nextIndex = (currentIndex + 1) % celebrityBoxes.length;

    // Show the next celebrity box
    celebrityBoxes[nextIndex].style.display = 'block';

    // Update the index for next time
    celebrityIndexes[drug] = nextIndex;
}