  // JavaScript to toggle content visibility based on batch and department selection
  window.addEventListener('load', function () {
    var batchSelect = document.getElementById('batchSelect');
    var departmentSelect = document.getElementById('departmentSelect');
    var contentContainer = document.getElementById('contentContainer');

    batchSelect.addEventListener('change', toggleContentVisibility);
    departmentSelect.addEventListener('change', toggleContentVisibility);

    function toggleContentVisibility() {
        // Check if both batch and department are selected
        if (batchSelect.value !== 'Select the batch' && departmentSelect.value !== 'Select the department') {
            contentContainer.style.display = 'block';
        } else {
            contentContainer.style.display = 'none';
        }
    }
});