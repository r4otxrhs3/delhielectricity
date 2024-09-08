function toggleEdit() {
    const inputs = document.querySelectorAll('#profile-form input');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');

    // Enable all input fields
    inputs.forEach(input => {
        input.disabled = false;
    });

    // Hide edit button, show save button
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline-block';
}

function saveChanges() {
    event.preventDefault();

    const inputs = document.querySelectorAll('#profile-form input');
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');

    // Disable input fields after saving
    inputs.forEach(input => {
        input.disabled = true;
    });

    // Show edit button, hide save button
    editBtn.style.display = 'inline-block';
    saveBtn.style.display = 'none';

    alert("Profile updated successfully!");
}
